import React, {useState} from 'react'
import getState, {state, actions} from  "../store/flux"


const ContactForm = ()=> {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  })

  const {actions} = useContext(Context)
    return (
        
    <div className='container'>
         <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input onChange={(e) => {
            setContactInfo({...contactInfo, name: e.target.value})
          }} 
            type="text" className="form-control" id="fullName" />
         
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input onChange={(e) => {
            setContactInfo({...contactInfo, phone: e.target.value})
          }} type="text" className="form-control" id="phone" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input onChange={(e) => {
            setContactInfo({...contactInfo, email: e.target.value})
          }} type="email" className="form-control" id="email" />
          
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input onChange={(e) => {
            setContactInfo({...contactInfo, address: e.target.value})
          }} type="text" className="form-control" id="Address" />
        </div>
        <button onClick={()=>{actions.createContact(contactInfo)}} className="btn btn-primary">Submit</button>
      </div>
    )
      
}

export default ContactForm;