import  { Invoice }  from './Invoice'
const invOne = new Invoice('Ruwaid', 'working on TypeScript', 2500)
const invTwo = new Invoice('Arik', 'working on TypeScript', 2500)

let invoices: Invoice[] = []
invoices = [...invoices, invOne, invTwo]


invoices.forEach(invoice => {
    let inv = invoice.format();
    console.log(inv);

})


const form = document.querySelector('.new-item-form') as HTMLFormElement;
const select = document.querySelector('#type') as HTMLSelectElement;
const user = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const add = document.querySelector('button') as HTMLButtonElement;
add.addEventListener('click', (e: Event) => {
    e.preventDefault();
    console.log(select.value, 
        user.value, 
        details.value, 
        amount.valueAsNumber 

    )
    console.table({yo: "hi", title: "nums", time: 3})
})
