import PlayPage from "@/pages/play-page/playPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/kanji-play/play/')({
    component: Index,
})

function Index() {
    return  (
        <PlayPage/>
    )
}

