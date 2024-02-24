import KanjiInfoPage from '@/pages/kanji-info-page/kanjiInfoPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kanji/$kanji')({
  component: () => KanjiPage()
})

function KanjiPage() {
  const { kanji } = Route.useParams()
  return <KanjiInfoPage kanji={kanji}/>
}
