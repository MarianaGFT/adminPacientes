import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';

const Formulario = () => {

    //Crear state de citas
    const [cita, actualizarCita]=useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''

    });

    //Segundo State
    const [error, actualizarError]=useState(false);

    //Función que se ejecuta cuando se escribe en un input
    const actualizarState= e =>{
        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        })
    }

    //Extraer valores 
    const {mascota, propietario, fecha, hora, sintomas}=cita;

    //Cuando el user agrega cita
    const submitCita= e =>{
        e.preventDefault();
        
        // Validar
        if(mascota.trim() ===''|| propietario.trim() ===''||fecha.trim() ===''||hora.trim() ===''||sintomas.trim() ===''){
            actualizarError(true);
            //return para detener el código
            return;
        }

        //Eliminar mensaje de error
        actualizarError(false);

        // Asignar ID
        cita.id=uuid();
        console.log(cita);
        // Crear la cita

        // Reiniciar el Form


    }

    return (
        <Fragment>
            <h2>Crear cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>   : null}

            <form
                onSubmit={submitCita}
            >
                <label> Nombre de la mascota </label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label> Nombre del propietario </label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la Mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label> Fecha </label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label> Hora </label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label> Síntomas </label>
                <textarea 
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;