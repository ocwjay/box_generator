import React, { useState } from 'react';

const Form = (props) => {
    const {boxList, setBoxList} = props;
    const [colorInput, setColorInput] = useState("");
    const [sizeInput, setSizeInput] = useState(150);
    //handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxList([...boxList, {
            color: colorInput,
            size: sizeInput
        }]);
        setColorInput("");
        setSizeInput(150);
    }

    return(
        <form onSubmit={ handleSubmit }>
            <label>
                Color:
                <input type="text" value={ colorInput } onChange={(e) => setColorInput(e.target.value)}/>
            </label>
            <label>
                Size:
                <input type="text" value={ sizeInput } onChange={(e) => setSizeInput(e.target.value)}/>
            </label>
            <button>Add</button>
        </form>
    )
}

export default Form;