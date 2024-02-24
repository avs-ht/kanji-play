import clsx from 'clsx'
import styles from './searchResult.module.scss'
import KANJI from '@/constants/const'
import useKanjiStore from '@/stores/kanjiStore'
import ResultButton from './resultButton'
import Pagination from './pagination'
import { useEffect, useRef } from 'react'

const SearchResult = () => {
    const fieldKanji = useKanjiStore(state => state.fieldKanji.split(''))
    const isEmpty = fieldKanji.length === 0
    const inKanji = KANJI.filter(kanji => fieldKanji.includes(kanji)).map(kanji => {
        return <ResultButton key={kanji} kanji={kanji}/>
    })
    const container = useRef<HTMLDivElement>(null)
    const notFinded = !isEmpty && inKanji.length === 0

    useEffect(() => {
        console.log(container.current)
    }, [container.current])
    
    return ( 
        <div className={styles.positionContainer}>
            <h2 className={styles.title}>Список кандзи "в наличии"</h2>
            <div className={clsx(styles.resultContainer, notFinded && styles.notFinded)} ref={container}>
                {isEmpty && <Pagination container={container.current as HTMLDivElement}/>}
                {!isEmpty && inKanji.length !== 0 && inKanji}
                {notFinded && "Такого кандзи не было найдено!"}
            </div>
        </div>
    )
}

export default SearchResult


