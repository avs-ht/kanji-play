import { useQuery } from '@tanstack/react-query'
import styles from './gameScreen.module.scss'
import useKanjiStore from "@/stores/kanjiStore"
import { fetchKanjiInfo } from '@/api/kanjiAPI'
import { useContext, useEffect, useRef, useState } from 'react'
import { KANJI_TIMER_TIME } from '@/constants/const'
import { IKanjiInfoSuccess } from '@/types/kanjiInfoObject'
import { statContext } from '@/stores/statContext'

const GameScreen = () => {

    const selectedKanji = useKanjiStore(state => state.selectedKanji)
    const deleteKanji = useKanjiStore(state => state.deleteSelectedKanji)
    const pushToLast = useKanjiStore(state => state.pushToLast)
    const statStore = useContext(statContext)
    
    const [isAnswerShowed, setAnswerShow] = useState<boolean>(false)
    const [time, setTime] = useState<number>(KANJI_TIMER_TIME)

    const timerRef = useRef<NodeJS.Timeout>()
    const nextFunction = useRef<() => void>(() => {});

    const selectedKanjiChar = selectedKanji[0]

    const {data, isLoading} = useQuery({
        queryKey: ["KanjiInfo", selectedKanjiChar],
        queryFn: () => fetchKanjiInfo(selectedKanjiChar)
    })
    // const meaning = (data as IKanjiInfoSuccess).kanji.meaning.english
    const wrongClickHandler = () => {

            if (!statStore?.errors) return

            const newErrors = {...statStore.errors}

            if (selectedKanjiChar in statStore.errors) {
                newErrors[selectedKanjiChar]+=1
            } else {
                newErrors[selectedKanjiChar] = 0
            }

            statStore.setErrors(newErrors)
            pushToLast()
        
    }
    useEffect(() => {
        setTime(KANJI_TIMER_TIME)
        const timer = setInterval(() => {
            setTime(prev => {
                if (prev - 1 === 0) {
                    setAnswerShow(true)
                    clearInterval(timerRef.current)
                    nextFunction.current = wrongClickHandler
                }
                return prev - 1
            })
        }, 1000)
        timerRef.current = timer
        return () => clearInterval(timerRef.current)
    }, [selectedKanji])



    return (
        <>
            <div className={styles.container}>
            <div className={styles.amount}>Еще в очереди {selectedKanji.length - 1} кандзи</div>
            <div className={styles.kanjiCard}>
                {
                    <>
                        <div className={styles.kanji}>{selectedKanjiChar}</div>
                        {
                            !isAnswerShowed
                            &&
                            <>
                                <h2 className={styles.timeTitle}>Вспомни значения кандзи <b>(<span className={styles.time}>{time}</span>c.)</b></h2>
                                <div className={styles.buttons} onClick={() => {
                                    setAnswerShow(true)
                                    clearInterval(timerRef.current)
                                }}>.
                                    <button className={styles.rightButton} onClick={() => {
                                        nextFunction.current = () => {
                                            deleteKanji(selectedKanjiChar)
                                            if (!statStore?.errors) return

                                            if (selectedKanjiChar in statStore.errors) {
                                                return
                                            }
                                            statStore.setAnswers([...statStore.answers, selectedKanjiChar])
                                        }

                                    }}>Вспомнил!</button>
                                    <button className={styles.wrongButton} onClick={() => {
                                        if (selectedKanji.length === 1) {
                                            nextFunction.current = () => {
                                                wrongClickHandler()
                                                deleteKanji(selectedKanjiChar)
                                            }
                                            return;
                                        }
                                        nextFunction.current = wrongClickHandler
                                    }}>Не помню...</button>
                                </div>
                            </>
                        
                        }
                        {
                            isAnswerShowed
                            &&
                            <>
                                <div className={styles.answer}>
                                    Значение: <b>{isLoading ? "..." : (data as IKanjiInfoSuccess).kanji.meaning.english}</b>
                                </div>
                                <button className={styles.next} onClick={() => {
                                    nextFunction.current()
                                    setAnswerShow(false)
                                }}>{selectedKanji.length !== 1 ? "Следующий кандзи": "К результатам"}</button>
                            </>
                        }
                    </>
                }
            </div>
        </div>
        </>
    )
}

export default GameScreen