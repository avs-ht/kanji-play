export default interface IKanjiStore {
    fieldKanji: string
    selectedKanji: string[]
    setFieldKanji: (kanji: string) => void
    addSelectedKanji: (kanji: string) => void
    deleteSelectedKanji: (kanji: string) => void
}