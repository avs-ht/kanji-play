import IStatContext from "@/types/statContext";
import { createContext, useState } from "react";
export const statContext = createContext<IStatContext | null>(null)


export const StatContextProvider: 
React.FC<{children: JSX.Element | JSX.Element[] | string}> = ({children}) => {
    const [errors, setErrors] = useState<{[key in string]: number}>({})
    const [answers, setAnswers] = useState<string[]>([])
    return (
        <statContext.Provider value={{
            errors,
            setErrors,
            answers,
            setAnswers
        }}>
            {children}
        </statContext.Provider>
    )
}