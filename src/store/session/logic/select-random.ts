export function selectRandom<TItem>(all: TItem[], count: number): TItem[] {
    const items = [...all]
    const result = new Array<TItem>()
    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * items.length)
        const item = items.splice(index, 1)[0]
        result.push(item)
    }
    return result
}