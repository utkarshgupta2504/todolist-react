import React, {useState} from "react";
import ListItem from "./ListItem";
import InputItem from "./InputItem";

function App() {

    const [items, setItems] = useState([]);

    function deleteItem(id) {
        console.log(items.filter((val, index) => id !== index))
        setItems(items.filter((val, index) => id !== index));
    }

    function addItem(text) {

        if (text != "") {

            setItems([...items, text]);
        }
    }

    return (<div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <InputItem 
            addItem={addItem}
        />
        <div>
            <ul>
                {items.map((litem, idx) => (
                    <ListItem key={idx} id={idx} isDone={deleteItem} item={litem} />
                ))}
            </ul>
        </div>
    </div>);
}

export default App;
