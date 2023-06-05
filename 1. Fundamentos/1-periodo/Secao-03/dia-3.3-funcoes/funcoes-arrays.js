const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

let cliente = "1";

function addCustomer(customer) {
    if (typeof customer !== "string") {
        console.log("O parâmetro passado deve ser do tipo string");
    } else {
        trybeBankCustomers.push(customer)
        console.log(trybeBankCustomers);
    }
}

addCustomer(cliente);
