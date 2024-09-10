import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ContactCard from "../component/ContactCard.jsx"
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import getState , { state, actions }from "../store/flux.js"


export const Home = () => {

	const {store} = useContext(Context);
	
	return (
	<div className="text-center m-5 container">
		 <Link to="/ContactForm"><button className="btn btn-success">Add new contact</button></Link>
		{store.arrayOfCOntacts.map((item, index)=>{
			return <ContactCard key={index} fullName={item.name} address={item.address} phone={item.phone} email={item.email} 
			onRemove={()=>{state.deleteContact(tarea.id)}} onUpdate={()=> {state.updateContact(item.id)}} />
		})}

		
	</div>
)};
