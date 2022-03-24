import React from 'react'
import { useState } from 'react'

export const SimpleFormValidation = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [agevalidator, setagevalidator] = useState(true)

    var isAgeValid = true;

    function SubmitButton(){
        if (name && email && agevalidator){
          return <button type="button">Submit</button>
        } else {
          return <button type="button" disabled>Submit</button>
        };
      };

    const ageBlurhandler = (e) => {
        console.log("!!!!!!",e.target.value)
        if(e.target.value.length<=0){
            setagevalidator(false)
        }
    } 
  return (
    <div>
        <form>
            <div>
                 <label>Enter the Name</label>
                <input type="text" name='name' onChange={(e) => setname(e.target.value)} />
                {
                    name.length > 0 && name.length < 3 ? "plz check length!!" : null
                }
            </div>
            <div>
                <label>Enter the Email</label>
                <input type="text" name='email' onChange={(e) => setemail(e.target.value)} />
                {
                    email.length <=0 ? "plz check leng" : null
                }
            </div>
            <div>
                <label >Enter age</label>
                <input type="text" name='age' name="agevalidator" onChange={(e) => setagevalidator(e.target.value)} onBlur = {(e) => {ageBlurhandler(e)}} />
                {
                    agevalidator ? "" : "plz enter age"
                }
            </div>
            <div>
            
                <SubmitButton/>
            </div>
        </form>

    </div>
  )
}
