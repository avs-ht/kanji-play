import useKanjiStore from '@/stores/kanjiStore'
import styles from './searchField.module.scss'
const SearchField = () => {
    const fieldKanji = useKanjiStore(state => state.fieldKanji)
    const setFieldKanji = useKanjiStore(state => state.setFieldKanji)

    function onChangeHandler(e : React.ChangeEvent<HTMLInputElement>) {
        setFieldKanji(e.target.value)
    }

    return ( 
        <>
            <input 
            onChange={
                (e) => onChangeHandler(e)
            }
            placeholder='Найдите нужный кандзи' 
            type="text" 
            className={styles.field} 
            value={fieldKanji}/>
        </>
    )
}

export default SearchField