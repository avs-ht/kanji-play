import clsx from 'clsx'
import styles from './searchResult.module.scss'
import KANJI from '@/constants/const'
import useKanjiStore from '@/stores/kanjiStore'
import ResultButton from './resultButton'
import Pagination from './pagination'

const SearchResult = () => {
    const fieldKanji = useKanjiStore(state => state.fieldKanji.split(''))
    const isEmpty = fieldKanji.length === 0
    const inKanji = KANJI.filter(kanji => fieldKanji.includes(kanji)).map(kanji => {
        return <ResultButton key={kanji} kanji={kanji}/>
    })

    const notFinded = !isEmpty && inKanji.length === 0

    let showed: JSX.Element[] | JSX.Element | string = ""

    if (isEmpty) {
        showed = <Pagination />
    }
    if (!isEmpty && inKanji.length !== 0) {
        showed = inKanji
    }
    if (notFinded) {
        showed = "Такого кандзи не было найдено!"
    }
    
    return ( 
        <div className={styles.positionContainer}>
            <h2 className={styles.title}>Список кандзи "в наличии"</h2>
            <div className={clsx(styles.resultContainer, notFinded && styles.notFinded)}>
                {showed}
            </div>
        </div>
    )
}

export default SearchResult


