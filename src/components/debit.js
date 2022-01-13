import React, { useState } from 'react'

function Debit(){
    const [amount, setAmount] = useState(0);
    const [name, setName] = useState("");
    const [debits, setDebit] = useState([
        { amount: 200, name: "Supplies" },
        { amount: 100, name: "Rent" },
        { amount: 75, name: "Car Expenses" },
    ]);

    const onChangeName = (e) => { 
        setName(e.target.value); 
    };

    const onChangeAmount = (e) => { 
        setAmount(parseInt(e.target.value)) 
    };

    const addDebit = () => {
        const newDebits = [...debits];
        newDebits.push({ amount, name});
        setDebit(newDebits);
    }

    return(
        <div className="debit">
            {debits.map(((debit, key) => {
                return(
                    <div key={key}>
                        {debit.name} :: {debit.amount}
                    </div>
                );
            }))}
            <input onChange={onChangeName} type="text" placeholder="name" />
            <input onChange={onChangeAmount} type="number" placeholder="amount" />
            <button onClick={addDebit}>Add Debit</button>
        </div>
    );
}

export default Debit;