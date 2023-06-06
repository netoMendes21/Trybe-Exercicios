const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];


function addCustomer(customer) {
    for (let index = 0; index < customer.length; index += 1) {

        if (typeof customer[index] !== "string") {
            console.log(`O parâmetro: ${customer[index]} não é uma string`);
        
        } else if (!trybeBankCustomers.includes(customer[index])){
            trybeBankCustomers.push(customer[index])
        }
    }
    return trybeBankCustomers;
}

console.log(addCustomer(["Nat", "Maria", 50]));
