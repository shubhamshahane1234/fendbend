import React from 'react'
import { useEffect,useState } from 'react'



export default function Form() {
  const [name,setname] = useState("")
const [surname,setsurname] = useState("")
const [phone,setphone] = useState("")

function saveuserdata(){
let data = {name,surname,phone}

fetch("http://127.0.0.1:8000/apiContact/",{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify(data)})
  .then((response) => response.json())
.then(json =>  console.log(json))
}
          



    return (
        <>
        <form   class = "p-5 ">

  <div class="mb-3 w-50">
    <label for="name" class="form-label">NAME :</label>
    <input type="text" value = {name}  onChange = {(e) =>{setname(e.target.value)}} name = "name" placeholder="name here" class="form-control" id="name" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3 w-50">
    <label for="surname" class="form-label">SURNAME :</label>
    <input  name = "surname" value = {surname}  onChange = {(e) =>{setsurname(e.target.value)}} type="text" placeholder="surname here" class="form-control" id="surname"/>
  </div>

  <div class="mb-3 w-50">
    <label for="phone"  class="form-label">PHONE NUMBER :</label>
    <input name="phone" value = {phone}  onChange = {(e) =>{setphone(e.target.value)}} type="phone"  placeholder="phone number here" class="form-control" id="phone"/>
  </div>


  
  <button onClick={saveuserdata} type=" submit" class="btn btn-primary">Submit</button>
</form>

            
        </>)
    
    }

