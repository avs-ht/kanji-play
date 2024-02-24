import styles from './searchResult.module.scss'
import KANJI, { PAGINATION_STEP } from '@/constants/const'
import ResultButton from './resultButton'
import usePKBStore from '@/stores/paginationKanjiBorderStore'
import { useContext } from 'react'
import { containerContext } from '@/stores/containerContext'

const ALL_KANA = KANJI.map(kanji => {
    return (
        <ResultButton key={kanji} kanji={kanji}/>
    )
})

const STEP = PAGINATION_STEP
const Pagination = () => {
    const PKBTStore = usePKBStore()
    const usedContainerContext = useContext(containerContext)
    const container = usedContainerContext?.ref as React.RefObject<HTMLDivElement>;

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

    const toTop = () => {
        if (container.current) container.current.scrollTop = 0
    }
    return (
        <> 
        {ALL_KANA.slice(PKBTStore.floor, PKBTStore.ceiling)}
        <div className={styles.paginationButtons}>
            {
                PKBTStore.floor > 0 
                && 
                <button type='button' onClick={() => {
                    leftArrowClickHandler()
                    toTop()
                }}>{"<"}</button>
            }
            {
                PKBTStore.ceiling < ALL_KANA.length 
                && 
                <button type='button' onClick={() => {
                    rightArrowClickHandler()
                    toTop()
                }}>{">"}</button>
           }
        </div>
        </>
    )
}

export default Pagination