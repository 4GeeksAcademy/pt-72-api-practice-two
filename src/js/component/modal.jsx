import React, { useState } from 'react'

// {
//     "name": "string",
//     "phone": "",
//     "email": "",
//     "address": ""
//   }
export default function Modal() {
    // js
    // const [name, setName] = useState("");
    const [user, setUser] = useState({"name": "", "email": "", "phone": "", "address": ""});

    const createContact = async () => {
        // then I want to make a POST request to save that infromation to the APIs DB (database)
        let response = await fetch("https://playground.4geeks.com/contact/agendas/valerie/contacts", {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
        let data = await response.json();
        console.log(data);
    }   
  return (
    // html
    <div>
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Create Contact
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Create A New Contact</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                <input 
                    type="text" 
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e) => setUser({"name": e.target.value, "email": user.email, "phone": user.phone, "address": user.address})}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                <input 
                    type="text" 
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e) => setUser({"name": user.name, "email": e.target.value, "phone": user.phone, "address": user.address})}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
                <input 
                    type="text" 
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e) => setUser({"name": user.name, "email": user.email, "phone": e.target.value, "address": user.address})}
                    />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Address</span>
                <input 
                    type="text" 
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e) => setUser({"name": user.name, "email": user.email, "phone": user.phone, "address":  e.target.value})}
                />
            </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={() => createContact()}>Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
