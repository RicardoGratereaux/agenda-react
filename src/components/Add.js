import React, {useState} from "react";
import '../styles/add.css'

const Add = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {nombre, apellido, telefono};

        fetch ('http://www.raydelto.org/agenda.php', {
            method: 'POST',
            body: JSON.stringify(user)
        }).then(() => {
            alert('Contacto Agregado')
        })
    }

    return (
        <nav>
            <div class="container-add">
                <h2 class="title"> Agregar contacto </h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                    <input type="text" placeholder="Apellido" required value={apellido} onChange={(e) => setApellido(e.target.value)}></input>
                    <input type="text" placeholder="Telefono" required value={telefono} onChange={(e) => setTelefono(e.target.value)}></input>
                    <button class="button"><span>Agregar</span></button>
                </form>
            </div>
        </nav>
    )
}

export default Add