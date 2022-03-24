import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export const ApiDemo3 = () => {
    const [userList, setuserList] = useState([])

    const getData = () => {
        axios.get("http://localhost:4000/users").then(res => {
            console.log(res.data.data)
            setuserList(res.data.data)
        })
    }

    //for when we run  code then direct get data
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='container'>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">userId</th>
                        <th scope="col">firstName</th>
                        <th scope="col">email</th>
                        {/* <th scope="col">role</th> */}
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((user) => {
                            return (

                                <tr>
                                    <th scope="row">{user._id}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.email}</td>
                                    {/* <td>{user.roleId}</td> */}

                                    <td>
                                        {/* <Link to ={`table/data/${user.id}`}>delete</Link> */}
                                        <Link to ={`/table/delete/${user._id}`} className='btn btn-danger'>DELETE</Link>
                                        {/* <button className='btn btn-primary'>UPDATE</button> */}
                    
                                        <Link  to = {`/table/update/${user._id}`} className = "btn btn-primary">UPDATE</Link>
                                    </td>
                            
                                </tr>

                            )
                        })
                    }


                </tbody>
            </table>
        </div>

    )
}