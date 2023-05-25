import { useState } from "react"

export default function LoginComp()
{
     const [username,setUserName]=useState()
    const [password,setPassword]=useState()
    const [message,setMessage]=useState()
    return <div>
          <label data-testid="label1">
             Enter User Name 
          </label>
           <input type='text'  data-testid="text1" onChange={(e)=>{
                  setUserName(e.target.value)
           }}/>
           <label data-testid="label2">
             Enter Password
           </label>
            <input type='password' data-testid="text2" onChange={(e)=>{
   setPassword(e.target.value)
            }}/>
            <button data-testid="button1"
               onClick={()=>{
               if(!(username==='admin' && password==='admin123'))
               {
                    setMessage("invalid user details")  
               }
              }}
            >Login</button>
            <label data-testid="text3">{message}</label>
    </div>
}