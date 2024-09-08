import React from "react" ;
import { Link } from "react-router-dom";

    //No hacer con props. editar
const ContactCard = (props) => {
    return (
        <div className="d-flex justify-content-between row container">
            <img className=" mx-5 col-2" src="../../img/rico-baby.jpg" alt="imagen" />
            <div className="col-10">
                <h2>{props.fullName}</h2>
                <h3>{props.address}</h3>
                <p>{props.phone}</p>
                <p>{props.email}</p>
            </div>
            <div className="">
                 {/* primero enrutar a una form para update los datos then Connect with updateContact() */}
                <Link to="/ContactForm" ><i class="fa-solid fa-pencil"></i></Link>
                 {/* Connect with deleteContact() */}
                <Link to="/ContactForm" ><i class="fa-solid fa-trash-can"></i></Link>

            </div>

        </div>
    )
}
//onClick={updateContact()}

export default ContactCard;