import { useQuery } from '@tanstack/react-query'
import styles from './playPage.module.scss'
import useKanjiStore from "@/stores/kanjiStore"
import { fetchKanjiInfo } from '@/api/kanjiAPI'
import { useState } from 'react'
import { IKanjiInfoSuccess} from "@/types/kanjiInfoObject"
// TODO: Сниппет для вставки стиля, css module, config
const PlayPage = () => {
    const selectedKanji = useKanjiStore(state => state.selectedKanji)
    const pickRandomN = Math.floor(Math.random() * selectedKanji.length)
    const selectedKanjiChar = selectedKanji[pickRandomN]
    const [isAnswerShowed, setAnswerShow] = useState<boolean>(false)
    
    const {data, isLoading, isError} = useQuery({
        queryKey: ["KanjiInfo", selectedKanjiChar],
        queryFn: () => fetchKanjiInfo(selectedKanjiChar)
    })
    console.log(data, isLoading, isError)
    return (
        <div className={styles.container}>
            Осталось
            <div className={styles.kanji}>{selectedKanjiChar}</div>
            <h2>Вспомни значения кандзи (<span className={styles.time}>20с.</span>)</h2>
            {
                !isAnswerShowed
                &&
                <div className={styles.buttons}>
                    <button className={styles.rightButton}>Вспомнил!</button>
                    <button className={styles.wrongButton}>Непомню...</button>
                </div>
            }
            {
                isAnswerShowed
                &&
                <div className={styles.answer}>
                </div>
            }
        </div>
    )
}

export default PlayPage