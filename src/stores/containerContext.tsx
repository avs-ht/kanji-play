import IContainerContext from "@/types/containerContext";
import { createContext, useState } from "react";
export const containerContext = createContext<IContainerContext | null>(null)


export const ContainerContextProvider: 
React.FC<{children: JSX.Element | JSX.Element[] | string}> = ({children}) => {
    const [ref, setRef] = useState<React.RefObject<HTMLDivElement> | null>(null)
    return (
        <containerContext.Provider value={{
            ref,
            setRef
        }}>
            {children}
        </containerContext.Provider>
    )
}