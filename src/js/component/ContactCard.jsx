import React from "react" ;
import { Link } from "react-router-dom";
import imagen from "../../img/rigo-baby.jpg"

    //No hacer con props. editar
const ContactCard = (props) => {
    return (
        <div className="d-flex border row container">
            <img className="rounded-circle mx-1 col-2" src={imagen} alt="imagen" />
            <div className="col-8 text-start">
                <h3>{props.fullName}</h3>
                <h4>{props.address}</h4>
                <p>{props.phone}</p>
                <p>{props.email}</p>
            </div>
            <div className="col-1">
                 {/* primero enrutar a una form para update los datos then Connect with updateContact() */}
                <Link className="m-2" to="/ContactUpdate" ><i className="fa-solid fa-pencil" ></i></Link>
                 {/* Connect with deleteContact() */}
                <span className="m-2" onClick={()=>{props.onRemove()}}><i className="fa-solid fa-trash-can"></i></span>

            </div>

        </div>
    )
}
//onClick={updateContact()}

export default ContactCard;