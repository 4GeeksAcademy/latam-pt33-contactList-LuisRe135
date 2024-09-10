import React, {useState} from 'react'



const ContactForm = ()=> {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  })
    return (
        
    <form className='container'>
         <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input onChange={(e) => {setContactInfo({...contactInfo}, {name: e.target.value})}} type="text" className="form-control" id="fullName" />
         
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
          
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="text" className="form-control" id="phone" />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="Address" />
        </div>
        <button onClick={console.log(contactInfo.name)} className="btn btn-primary">Submit</button>
      </form>
    )
      
}
// (event)=> {setContactInfo(
          // { "name": fullName.value, 
          //   "phone": phone.value,
          //   "address": address.value,
          //   "email": email.value })}} 

export default ContactForm;