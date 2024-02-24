import clsx from 'clsx'
import styles from './searchResult.module.scss'
import KANJI from '@/constants/const'
import { useMemo, useState } from 'react'
import useKanjiStore from '@/stores/kanjiStore'

const ResultButton: React.FC<{kanji: string}> = ({kanji}) => {
    const selectedKanji = useKanjiStore(state => state.selectedKanji)
    const addKanji = useKanjiStore(state => state.addSelectedKanji)
    const deleteKanji = useKanjiStore(state => state.deleteSelectedKanji)
    const [isSelected, setSelected] = useState<boolean>(selectedKanji.includes(kanji))
    return (
        <button 
        className={clsx(styles.resultButton, isSelected && styles.selected  )} 
        type="button"
        onClick={() => {
            setSelected(!isSelected)
            if (isSelected) {
                deleteKanji(kanji)
                return
            }
            addKanji(kanji)
        }}> 
            {kanji}
        </button>
    )
}

const SearchResult = () => {
    const fieldKanji = useKanjiStore(state => state.fieldKanji)
    const isEmpty = fieldKanji === ""
    const isInKanji = KANJI.indexOf(fieldKanji) !== -1
    const notFinded = !isEmpty && !isInKanji

    const showed = useMemo(() => {
        if (isEmpty) {
            return (
                <>
                {
                    KANJI.map(kanji => {
                        return (
                            <ResultButton key={kanji} kanji={kanji}/>
                        )
                    })
                }
                </>
            )
        }
        if (!isEmpty && isInKanji) {
            return  <ResultButton kanji={fieldKanji}/>
        }

        if (notFinded) {
            return "Такого кандзи не было найдено!"
        }
    }, [fieldKanji])
    return ( 
        <>
        <h2 className={styles.title}>Список кандзи "в наличии"</h2>
        <div className={clsx(styles.resultContainer, notFinded && styles.notFinded)}>
            {showed}
        </div>
        </>
    )
}

export default SearchResult


