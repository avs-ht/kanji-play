import getKanjiInfo from "@/api/kanjiAPI"
import { useLayoutEffect, useState } from "react"
import KanjiErrorScreen from "./kanjiErrorScreen"
import KanjiInfoScreen from "./kanjiInfoScreen"

const KanjiInfoPage: React.FC<{kanji: string}> = ({kanji}) => {
    const [kanjiInfo, setKanjiInfo] = useState<object>({})
    const [isHasError, setHasError] = useState<boolean>(false)
    useLayoutEffect(() => {
        getKanjiInfo(kanji).then((data) => {
            setKanjiInfo(data)
        }).catch(() => {
            setHasError(true)
        })
    }, [])
    
    return (
        <>
            {isHasError && <KanjiErrorScreen/>}
            {!isHasError && <KanjiInfoScreen kanjiInfo={kanjiInfo}/>}
        </>
    )
}

export default KanjiInfoPage