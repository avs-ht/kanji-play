import { ExamplesEntity, IKanjiInfoSuccess} from '@/types/kanjiInfoObject';
import styles from './kanjiInfoScreen.module.scss'

const KanjiInfoScreen: React.FC<{kanjiInfo: IKanjiInfoSuccess}> = ({kanjiInfo}) => {
    const kanji = kanjiInfo.kanji.character
    const meaning = kanjiInfo.kanji.meaning.english
    const examples = kanjiInfo.examples
    const strokes = kanjiInfo.kanji.strokes
    const grade = kanjiInfo.references.grade
    return (
        <>

        <div className={styles.bigKanjiContainer}>
            <div className={styles.bigKanji}>
                {kanji}
            </div>
            <div className={styles.bigKanjiInfo}>
                <span>Количество строк: {strokes}</span>
                <span>Grade: {grade}</span>
            </div>
        </div>
        <ul className={styles.kanjiInfo}>
            <li className={styles.kanjiInfoItem}>
               <span>Значение:</span> <b>{meaning}</b>
            </li>
            <li className={styles.kanjiInfoItem}>
                <span>Примеры:</span>
                <ul data-examples>
                {
                        examples?.map((example: ExamplesEntity, index) => {
                            return (
                                <li key={index}>
                                    <span>{example.japanese} - {example.meaning.english}</span>
                                    <audio controls src={example.audio.mp3}></audio>
                                </li>
                            )
                        }) 
                    }
                </ul>
            </li>        </ul>

        </>
    )
}

export default KanjiInfoScreen;