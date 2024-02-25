import { useQuery } from '@tanstack/react-query'
import styles from './gameScreen.module.scss'
import useKanjiStore from "@/stores/kanjiStore"
import { fetchKanjiInfo } from '@/api/kanjiAPI'
import { useEffect, useRef, useState } from 'react'
import { KANJI_TIMER_TIME } from '@/constants/const'
import { IKanjiInfoSuccess } from '@/types/kanjiInfoObject'

const GameScreen = () => {

    const selectedKanji = useKanjiStore(state => state.selectedKanji)
    const deleteKanji = useKanjiStore(state => state.deleteSelectedKanji)
    const pickRandomN = selectedKanji.length - 1
    const selectedKanjiChar = selectedKanji[pickRandomN]
    const [isAnswerShowed, setAnswerShow] = useState<boolean>(false)
    const [time, setTime] = useState<number>(KANJI_TIMER_TIME)
    const timerRef = useRef<NodeJS.Timeout>()

    let nextFunction = useRef<() => void>(() => {});

    const {data} = useQuery({
        queryKey: ["KanjiInfo", selectedKanjiChar],
        queryFn: () => fetchKanjiInfo(selectedKanjiChar)
    })

    useEffect(() => {
        setTime(KANJI_TIMER_TIME)
        const timer = setInterval(() => {
            setTime(prev => {
                if (prev - 1 === 0) {
                    setAnswerShow(true)
                    clearInterval(timerRef.current)
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
                                        nextFunction.current = () => console.log(1)

                                    }}>Вспомнил!</button>
                                    <button className={styles.wrongButton} onClick={() => {
                                        nextFunction.current = () => console.log(0)
                                    }}>Не помню...</button>
                                </div>
                            </>
                        
                        }
                        {
                            isAnswerShowed
                            &&
                            <>
                                <div className={styles.answer}>
                                    Значение: <b>{(data as IKanjiInfoSuccess).kanji.meaning.english}</b>
                                </div>
                                <button className={styles.next} onClick={() => {
                                    nextFunction.current()
                                    setAnswerShow(false)
                                    deleteKanji(selectedKanjiChar)
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