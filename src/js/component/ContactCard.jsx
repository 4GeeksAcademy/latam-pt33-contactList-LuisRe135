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
                <Link className="m-2" to={"/ContactUpdate/"+props.id} ><i className="fa-solid fa-pencil" ></i></Link>
                 {/* Connect with deleteContact() */}
                <span className="m-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-trash-can"></i></span>

            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    Are you shure?
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={()=>{props.onRemove()}} data-bs-dismiss="modal">Delete</button>
                </div>
                </div>
            </div>
            </div>

        </div>
    )
}
//onClick={updateContact()}

export default ContactCard;