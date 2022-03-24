import React from 'react'
import { Props3 } from './Props3'

export const Props2 = (props) => {
    var emoployee =[
        {
            ename : "Abhishek",
            eage : 21,
            isActive :true
        },
        {
            ename :"Raj",
            eage :20,
            isActive : false
        },
    ]
  return (
    <div>
        <h1>Props 2</h1>
        Name={
            props.name
        }
        props.x()
        <Props3 emoployee={emoployee}/>
    </div>
  )
}
