import { gameContext } from "@/stores/gameContext"
import useKanjiStore from "@/stores/kanjiStore"
import { useContext } from "react"
import ErrorScreen from "./screens/errorScreen"
import EndScreen from "./screens/endScreen"
import GameScreen from "./screens/gameScreen/gameScreen"
import { StatContextProvider } from "@/stores/statContext"

const PlayPage = () => {
    const game = useContext(gameContext)
    const kanjiStoreLength = useKanjiStore(state => state.selectedKanji.length)
    return (
        <StatContextProvider>
            <>
        {
            game?.isStarted && kanjiStoreLength > 0
            &&
            <GameScreen/>
        } 
        {
            game?.isStarted && kanjiStoreLength === 0
            &&
            <EndScreen/>
        } 
        {
            !game?.isStarted
            &&
            <ErrorScreen/>
        } 
            </>
        </StatContextProvider>
    )
}

export default PlayPage