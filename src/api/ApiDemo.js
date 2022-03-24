import React from 'react'
import axios from 'axios'

export const ApiDemo = () =>{
    const getData =() =>{
        axios.get('http://localhost:4000/users').then(res=>{
            console.log(res.data.data);

        })
    }


    const postData =() =>{
        var data = {
            name :'Virat',
            job :'Cricketer'
        }
        axios.post('http://localhost:4000/users').then(res=>{
            console.log(res)
        })
    }
    return(
        <div>
            <button onClick={getData}>Get Data</button>
            <button onClick={postData}>Post Data</button>

        </div>
    )

    }
  

