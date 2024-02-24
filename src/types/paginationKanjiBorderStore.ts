export default interface IPKBStore {
    floor: number,
    ceiling: number,
    setFloor: (n: number) => void,
    setCeiling: (n: number) => void
}