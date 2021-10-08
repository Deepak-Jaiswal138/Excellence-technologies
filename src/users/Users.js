import React, { useState, useEffect } from 'react'

const Users = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)


    useEffect(() => {
        loadApi()
    }, [])

    const url = `https://reqres.in/api/users?pages=${page}`;
    function loadApi(){
        
        console.log(page)
        fetch(url).then((resp) => {
            resp.json().then((res) => {
                setData(res.data);

            })
        })
    }



    const prePage=()=>{
        if(page>1){
            setPage(1)
            loadApi()
        }
        console.log(page)
    }
    const nextPage=()=>{
        if(page===1){
            setPage(2)
            loadApi()
        }  
        console.log(page) 
    }
    console.log(data)
    return (
        <div className="container mx-5 my-5">
            {
                data.map((item) =>

                    <div className="card mb-3 col-6" key={item.id}>
                        <div className="row d-flex" >
                            <div className="col-md-2">
                                <img style={{ height: '100px', width: '100px' }} src={item.avatar} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4">
                                <div className="card-body">
                                    <h5 className="card-title">{item.first_name} {item.last_name}</h5>
                                    <p className="card-text">{item.email}</p>

                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
            <nav className="my-3" aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <button className="page-link" onClick={()=>prePage()}>Previous</button>
                    </li>
                    <li className="page-item"><button className="page-link" onClick={()=>prePage()} >1</button></li>
                    <li className="page-item"><button className="page-link" onClick={()=>nextPage()}>2</button></li>
                    <li className="page-item">
                        <button className="page-link" onClick={()=>nextPage()}>Next</button>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Users
