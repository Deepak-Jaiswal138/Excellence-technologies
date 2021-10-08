import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <>
        <h1 className="text-center my-5">Excellence Technologies</h1>
        <div className="container m-5 p-5 bg-light" >
            <div className="row">
                <div className="col text-center"><Link className="btn btn-primary" to="/todo">Task 1</Link></div>
                <div className="col text-center"><Link className="btn btn-primary" to="/users">Task 2</Link></div>
            </div>
        </div>
        </>
    )
}

export default Main
