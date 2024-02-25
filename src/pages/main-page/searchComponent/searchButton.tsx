import styles from './searchButton.module.scss'
const SearchButton  = () => {
    return (
        <button className={styles.button} type='submit' onClick={(e) => {
            e.preventDefault()
        }}>Начать игру</button>
    )
}

export default SearchButton