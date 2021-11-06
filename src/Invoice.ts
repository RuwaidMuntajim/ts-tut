let req: object;
req = {
    num: 22,
    name: 'foo'
}

class Invoice {
    readonly client: string
    private details: string
    public amount: number

    constructor(c: string, d: string, a: number) {
        this.client = c,
        this.details = d,
        this.amount = a
    }
    format(): string {
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}

export {Invoice};