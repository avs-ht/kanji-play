import {Outlet, createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/kanji/")({
    component: KanjiIndex,
})

function KanjiIndex() {
    return (
        <>
        <Outlet/>
        </>
    )
}

