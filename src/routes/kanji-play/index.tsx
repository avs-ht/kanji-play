import MainPage from "@/pages/main-page/mainPage"
import { createFileRoute } from "@tanstack/react-router"


export const Route = createFileRoute('/kanji-play/')({
    component: Index,
})

function Index() {
    return  (
        <MainPage/>
    )
}

