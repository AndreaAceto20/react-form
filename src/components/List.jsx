import { useState } from "react";



const InitialItem = ['uova', 'latte', 'pane', 'pasta']





export default function List() {

    const [item, setItem] = useState(InitialItem);
    const [NewItem, setNewItem] = useState('');

    const addItem = e => {
        e.preventDefault();
        const updatedItem = [...item, NewItem];
        setItem(updatedItem);
        setNewItem('');
    };



    return (
        <>

            <form onSubmit={addItem}>
                <input type="text" value={NewItem} onChange={event => setNewItem(event.target.value)}></input>
                <button>Invia</button>
            </form>
            <ul className='todolist'>
                {item.map((item, i) => (
                    <li key={i}>
                        {item}
                    </li>))}
            </ul>
        </>
    )
}