export default interface IContainerContext {
    ref: React.RefObject<HTMLDivElement> | null
    setRef: (ref : React.RefObject<HTMLDivElement> | null) => void
}
