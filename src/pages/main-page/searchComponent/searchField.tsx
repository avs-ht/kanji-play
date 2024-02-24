import styles from './searchField.module.scss'
const SearchField = () => {
    return ( 
        <>
            <input placeholder='Найдите нужный кандзи' type="text" className={styles.field}/>
        </>
    )
}

export default SearchField