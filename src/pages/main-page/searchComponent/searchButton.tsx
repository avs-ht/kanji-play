import { Link } from '@tanstack/react-router'
import styles from './searchButton.module.scss'
import { useContext } from 'react'
import { gameContext } from '@/stores/gameContext'
import clsx from 'clsx'
import useKanjiStore from '@/stores/kanjiStore'
const SearchButton  = () => {
    const disabled = useKanjiStore(state => !(state.selectedKanji.length > 0))
    const game = useContext(gameContext)
    return (
        <Link to='/play' className={clsx(styles.button, disabled && styles.disabled)} type='submit' onClick={() => {
            game?.setStart(true)
        }}>Начать игру</Link>
    )
}

export default SearchButton