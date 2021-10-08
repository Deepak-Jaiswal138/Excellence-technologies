import React, { useState, useEffect } from 'react'
import '../App.css';
import delImg from '../assets/delete.png'
import updImg from '../assets/edit.png'

const getLocalItems = () => {

    let list = localStorage.getItem('lists')
    console.log(list)

    if (list) {
        return JSON.parse(localStorage.getItem('lists'))
    } else {
        return [];
    }
}

const Todo = () => {



    const [todo, setTodo] = useState("");
    const [data, setData] = useState(getLocalItems())
    const [isEditing, setEditing] = useState(false);
    const [updateindex, setIndex] = useState(0);

    const saveData = (e) => {

        e.preventDefault();
        if (!todo) {

        } else {
            setData([...data, todo])
            setTodo("")
        }

    }
    const updateSubmitData = (e) => {

        e.preventDefault();
        if (!todo) {

        } else {

            const updatedItem = data.map((tod,ind) => {
                return ind === updateindex? todo : tod;
              });
            setData(updatedItem)
            setTodo("")
            setEditing(false)
        }

    }
    const deleteData = (index) => {
        const d = data.filter((it, ind) => {
            return (ind !== index);
        })
        setData(d)
    }
    const updateData = (item, index) => {
        setTodo(item)
        setIndex(index)  
        setEditing(true)
    }
    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(data))
    }, [data])






    return (
        <div className="d-flex justify-content-center">
        <div className="col-sm-6 col-md-6 col-lg-6">
            {
                isEditing ?
                    <form onSubmit={updateSubmitData}>
                        <h1 className="text-center my-5">Todo App</h1>

                        <div className="input-group mb-3">
                            <input type="text" className="form-control" required placeholder="Enter Todo here.." value={todo} onChange={(e) => setTodo(e.target.value)} aria-label="Enter Todo here.." aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2"><b>Update</b></button>
                        </div>
                    </form> :
                    <form onSubmit={saveData}>
                        <h1 className="text-center my-5">Todo App</h1>

                        <div className="input-group mb-3">
                            <input type="text" className="form-control" required placeholder="Enter Todo here.." value={todo} onChange={(e) => setTodo(e.target.value)} aria-label="Enter Todo here.." aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2"><b>Add</b></button>
                        </div>
                    </form>
            }
            <br /><br />
            {
                data.length > 0 && data.map((item, index) => (
                    <div className="bg-light p-3 d-flex my-1"><span className="display-6 col-7 px-5">{item}</span>
                        <div className="col-3 d-flex  offset-3">
                            <button onClick={() => updateData(item, index)}><img src={updImg} alt="update todo" /></button>
                            <button className="mx-1" onClick={() => deleteData(index)}><img src={delImg} alt="delete todo" /></button>
                        </div>
                    </div>
                ))
            }

        </div>
        </div>
    )
}

export default Todo
