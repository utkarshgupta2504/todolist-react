import React, {useState} from 'react';

function ListItem(props) {

    return <li onClick={() => {

        setInterval(300, props.isDone(props.id));

    }}>{props.item}</li>;
}

export default ListItem;
