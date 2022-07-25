import React, { useState } from "react";
import '../styles/list.css'

const List = () => {
    const [contacts, setContacts] = useState([]);

    const  getContacts = () => {
        fetch('http://www.raydelto.org/agenda.php')
        .then(response => response.json())
        .then(data => setContacts(data))
    }

    const listContacts = () => {
        getContacts()

        return (
            <div class="container-list">
                <div class="title-list">
                    <h1> Contactos </h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Telefono</th>
                        </tr>
                    </thead>
                    {
                        contacts.map(contact => 
                            <tbody class="contacts">
                                <tr key={contact.telefono}>
                                    <td>{contact.nombre}</td>
                                    <td>{contact.apellido}</td>
                                    <td>{contact.telefono}</td>
                                </tr>
                            </tbody>)
                    }
                </table>
            </div>
        )
    }
    
    return (
        <div>
        {listContacts()}
        </div>
    )
}

export default List