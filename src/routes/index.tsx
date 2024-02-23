import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return  (
        <div>
            <h1>Индекс</h1>
        </div>
    )
}

