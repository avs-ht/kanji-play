import styles from './searchResult.module.scss'
import KANJI from '@/constants/const'
const SearchResult = () => {
    return ( 
        <>
        <h2 className={styles.title}>Список кандзи "в наличии"</h2>
        <div className={styles.resultContainer}>
            {
                KANJI.map(kanji => {
                    return (
                        <button className={styles.resultButton} key={kanji}>{kanji}</button>
                    )
                })
            }
        </div>
        </>
    )
}

export default SearchResult