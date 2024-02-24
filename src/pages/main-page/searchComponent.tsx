import { ContainerContextProvider } from '@/stores/containerContext'
import styles from './searchComponent.module.scss'
import SearchButton from "./searchComponent/searchButton"
import SearchField from "./searchComponent/searchField"
import SearchResult from "./searchComponent/searchResult/searchResult"

const SearchComponent = () => {
    return (
        <form className={styles.form}>
            <SearchField/>
            <ContainerContextProvider>
                <SearchResult/>
            </ContainerContextProvider>
            
            <SearchButton/>
        </form>
    )
}

export default SearchComponent