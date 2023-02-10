import React, { useState } from 'react'

export default function Todo() {
    const [item, setItem] = useState("")
    const [data, setData] = useState([])
    function Addbutton() {
        setData([...data, item])
        setItem("");
    }
    function deletedata(index) {
        let newlistTodo = [...data];
        newlistTodo.splice(index, 1)
        setData([...newlistTodo])
    }
    return (
        <>
            <div className='container'>
                <h1 className='todoapp'>Todo App</h1>
                <input type="text" id='input' placeholder='add Items' value={item} onChange={(e) => setItem(e.target.value)} ></input>
                <button onClick={Addbutton} id="btn1"> + </button>

                <div className='Data_list'>
                    {
                        data.map(
                            (item, index) => <div className='outputdata1'> <h1 id='outputdata' key={index}>{item} <button id='delete' onClick={() => deletedata(index)}> - </button></h1></div>)
                    }
                </div>
            </div>

        </>
    )
}
