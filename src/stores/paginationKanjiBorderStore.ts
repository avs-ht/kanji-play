
import { PAGINATION_STEP } from "@/constants/const"
import IPKBStore from "@/types/paginationKanjiBorderStore"
import { create } from "zustand"

// PKB - Pagination Kanji Border 
const usePKBStore = create<IPKBStore>((set) => ({
    floor: 0,
    ceiling: PAGINATION_STEP,
    setFloor: (n) => {set(() => ({floor: n}))},
    setCeiling: (n) => {set(() => ({ceiling: n}))}
}))

export default usePKBStore