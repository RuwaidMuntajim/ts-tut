import { Invoice } from './Invoice';
const invOne = new Invoice('Ruwaid', 'working on TypeScript', 2500);
const invTwo = new Invoice('Arik', 'working on TypeScript', 2500);
let invoices = [];
invoices = [...invoices, invOne, invTwo];
invoices.forEach(invoice => {
    let inv = invoice.format();
    console.log(inv);
});
const form = document.querySelector('.new-item-form');
const select = document.querySelector('#type');
const user = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const add = document.querySelector('button');
add.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(select.value, user.value, details.value, amount.valueAsNumber);
    console.table({ yo: "hi", title: "nums", time: 3 });
});
