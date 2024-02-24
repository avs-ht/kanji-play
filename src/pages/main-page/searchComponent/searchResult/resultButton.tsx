import styles from './searchResult.module.scss'
import useKanjiStore from "@/stores/kanjiStore";
import clsx from 'clsx';
import { memo } from "react";
import InfoButton from './infoButton';

const ResultButton: React.FC<{kanji: string}> = memo(({kanji}) => {
    const selectedKanji = useKanjiStore(state => state.selectedKanji)
    const addKanji = useKanjiStore(state => state.addSelectedKanji)
    const deleteKanji = useKanjiStore(state => state.deleteSelectedKanji)
    const isSelected = selectedKanji.includes(kanji);
    return (
        <button 
        className={clsx(styles.resultButton, isSelected && styles.selected  )} 
        type="button"
        onClick={() => {
            if (isSelected) {
                deleteKanji(kanji);
                return
            } 
            addKanji(kanji);
        }}> 
            {kanji} <InfoButton kanji={kanji}/>
        </button>
    )
})

export default ResultButton