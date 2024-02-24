import styles from './searchComponent.module.scss'
import SearchButton from "./searchComponent/searchButton"
import SearchField from "./searchComponent/searchField"
import SearchResult from "./searchComponent/searchResult/searchResult"

const SearchComponent = () => {
    return (
        <form className={styles.form}>
            <SearchField/>
            <SearchResult/>
            <SearchButton/>
        </form>
    )
}

export default SearchComponent