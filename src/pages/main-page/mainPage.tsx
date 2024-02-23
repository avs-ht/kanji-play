import KANJI from "@/constants/const"
import { Link } from "@tanstack/react-router"

const MainPage = () => {
    const kanji = `${KANJI[Math.floor(Math.random() *KANJI.length)]}`
    return (
        <Link to="/kanji/$kanji" params={{kanji: kanji}}>{kanji}</Link>
    )
}

export default MainPage