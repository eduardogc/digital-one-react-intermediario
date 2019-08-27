import React from 'react';

const Item = (item, index) => {
    debugger
    return <li key={index}>{item}</li>
}

export const Topico2 = () => {
    const list = [1, 2, 3, 4, 5];
    return (
        <ul>
            {list.map((item, index) => Item(item, index))}
        </ul>
    )
}