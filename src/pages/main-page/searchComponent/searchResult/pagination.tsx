import styles from './searchResult.module.scss'
import KANJI, { PAGINATION_STEP } from '@/constants/const'
import ResultButton from './resultButton'

import usePKBStore from '@/stores/paginationKanjiBorderStore'
const ALL_KANA = KANJI.map(kanji => {
    return (
        <ResultButton key={kanji} kanji={kanji}/>
    )
})

const STEP = PAGINATION_STEP
const Pagination = () => {
    const PKBTStore = usePKBStore()
    console.log(PKBTStore)
    const rightArrowClickHandler = () => {
        const prev = {
            floor: PKBTStore.floor,
            ceiling: PKBTStore.ceiling
        }
        const newBorders = {
            floor: prev.floor + STEP,
            ceiling: prev.ceiling + STEP
        }

        if (prev.ceiling > ALL_KANA.length) {
            prev.ceiling = ALL_KANA.length
            prev.floor = prev.ceiling - STEP
        }

        PKBTStore.setFloor(newBorders.floor)
        PKBTStore.setCeiling(newBorders.ceiling)
    }

    const leftArrowClickHandler = () => {
        const prev = {
            floor: PKBTStore.floor,
            ceiling: PKBTStore.ceiling
        }
        const newBorders = {
            floor: prev.floor - STEP,
            ceiling: prev.ceiling - STEP
        }

        if (prev.floor < 0) {
            prev.ceiling = STEP
            prev.floor = 0
        }

        PKBTStore.setFloor(newBorders.floor)
        PKBTStore.setCeiling(newBorders.ceiling)
    }
    return (
        <> 
        {ALL_KANA.slice(PKBTStore.floor, PKBTStore.ceiling)}
        <div className={styles.paginationButtons}>
           {PKBTStore.floor > 0 && <button type='button' onClick={leftArrowClickHandler}>{"<"}</button>}
           {PKBTStore.ceiling < ALL_KANA.length && <button type='button' onClick={rightArrowClickHandler}>{">"}</button>}
        </div>
        </>
    )
}

export default Pagination