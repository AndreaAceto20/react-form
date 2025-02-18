import { useState } from "react";



const InitialItem = ['uova', 'latte', 'pane', 'pasta']





export default function List() {

    const [item, setItem] = useState(InitialItem);



    return (
        <>
            <p>{InitialItem.join(' ')}</p>
            {/* <form>
                <input type="text" value={NewItem} ></input>

            </form> */}
        </>
    )
}