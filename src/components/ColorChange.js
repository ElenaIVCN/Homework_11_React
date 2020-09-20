import React, { useState } from 'react';
import styles from './ColorModule.css';

const colors = ['#0b2ff8', '#06503a', '#d32709'];

function ColorChange () {
    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex((index+1)%3);
    }

    return (
        <span style={ {backgroundColor: colors[index]}}>
            <button onClick={ () => handleClick() } className={ styles.btn }>+</button>
            <strong>Currently Selected Color: { colors[index] }</strong>
        </span>
    )
}

export default ColorChange;
