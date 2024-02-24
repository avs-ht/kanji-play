import { useQuery } from "@tanstack/react-query"
import { IKanjiInfoSuccess} from "@/types/kanjiInfoObject"
import { fetchKanjiInfo } from "@/api/kanjiAPI"
import KanjiErrorScreen from "./screens/kanjiErrorScreen"
import KanjiInfoScreen from "./screens/kanjiInfoScreen"
import KanjiLoadingScreen from "./screens/kanjiLoadingScreen"

const KanjiInfoPage: React.FC<{kanji: string}> = ({kanji}) => {
  const {data, isLoading, isError }= useQuery({
    queryKey: ["KanjiInfo", kanji], 
    queryFn: () => fetchKanjiInfo(kanji)} ,

  )

  if (isLoading) {
    return <KanjiLoadingScreen/>
  }
  if (isError || !data || data.hasOwnProperty("error")) {
    return <KanjiErrorScreen/>
  }
  
  return <KanjiInfoScreen kanjiInfo={data as IKanjiInfoSuccess}/>
}


export default KanjiInfoPage