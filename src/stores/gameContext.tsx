import IGameContext from "@/types/gameStore";
import { createContext, useState } from "react";
export const gameContext = createContext<IGameContext | null>(null)


export const GameContextProvider: 
React.FC<{children: JSX.Element | JSX.Element[] | string}> = ({children}) => {
    const [isStarted, setStart] = useState<boolean>(false)
    return (
        <gameContext.Provider value={{
            isStarted,
            setStart
        }}>
            {children}
        </gameContext.Provider>
    )
}