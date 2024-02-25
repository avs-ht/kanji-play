import IKanjiStore from "@/types/kanjiStore"
import { create } from "zustand"

const useKanjiStore = create<IKanjiStore>((set) => ({
    fieldKanji: "",
    selectedKanji: [],
    setFieldKanji: (kanji) => set(() => ({fieldKanji: kanji})),
    addSelectedKanji: (kanji) => set((state) => ({selectedKanji: [kanji, ...state.selectedKanji]})),
    deleteSelectedKanji: (kanji) => set((state) => {
        const index = state.selectedKanji.indexOf(kanji)
        return {
            selectedKanji: [...state.selectedKanji.slice(0, index), ...state.selectedKanji.slice(index+1)]
        }
    }),
    pushToLast: () => set((state) => {
        return {
            selectedKanji: [...state.selectedKanji.slice(1), state.selectedKanji[0]]
        }
    })
}))

export default useKanjiStore