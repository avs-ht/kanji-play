import { createFileRoute } from "@tanstack/react-router"
import MainPage from "../pages/main-page/mainPage"

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return  (
        <MainPage/>
    )
}

