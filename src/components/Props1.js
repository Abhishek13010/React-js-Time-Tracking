import React from 'react'
import { Props2 } from './Props2'

export const Props1 = (props) => {
  return (
    <div>
        {
            props.demo()
        }
        <h1>PROPS 1 COMPONENT</h1>
        Name = {props.name}
       title = {props.title}
       <Props2 name={props.name} title={props.title} x={props.demo}/>
    </div>
  )
}
