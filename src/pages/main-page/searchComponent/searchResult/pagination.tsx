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
const Pagination: React.FC<{container: HTMLDivElement}> = ({container}) => {
    const PKBTStore = usePKBStore()
    
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
            container.scrollTop = 0
        
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