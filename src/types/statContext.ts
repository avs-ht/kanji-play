export default interface IStatContext {
    errors: {[key in string]: number},
    answers: string[],
    setErrors: React.Dispatch<React.SetStateAction<{[x: string]: number}>>,
    setAnswers: React.Dispatch<React.SetStateAction<string[]>>
}