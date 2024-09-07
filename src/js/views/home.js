import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ContactCard from "../component/ContactCard.jsx"
import { Context } from "../store/appContext";


export const Home = () => {

	const {store} = useContext(Context);
	
	return (
	<div className="text-center mt-5">
			{store.arrayOfCOntacts.map((item, index)=>{
				return <h1>contacto 2</h1>
			})}
		<p>how about this?</p>
		
	</div>
)};
