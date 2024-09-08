import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ContactForm = ()=> {
    return (
        
    <form>
         <div class="mb-3">
          <label for="fullName" class="form-label">Full Name</label>
          <input type="text" class="form-control" id="fullName" aria-describedby="emailHelp" />
         
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Phone</label>
          <input type="email" class="form-control" id="phone" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <input type="email" class="form-control" id="Address" aria-describedby="emailHelp" />
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    )
      
}
export default ContactForm;