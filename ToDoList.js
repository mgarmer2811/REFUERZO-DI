'use client'
import { useState } from 'react'

export default function ToDoList() {

    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregarTarea = () => {
        if(nuevaTarea.trim() === '') {return};
        const nuevasTareas = tareas.concat({ texto : nuevaTarea, completada : false});
        setTareas(nuevasTareas);
        setNuevaTarea('');
    };

    const marcarCompletada = (index) => {
        const nuevasTareas = [];
        for(let i = 0; i < tareas.length; i++){
            nuevasTareas.push(tareas[i]);
        }
        nuevasTareas[index].completada = !nuevasTareas[index].completada;
        setTareas(nuevasTareas);
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((_,i) => i !== index);
        setTareas(nuevasTareas);
    };

    return(
        <div>
            <h1>LISTA DE TAREAS</h1>
            <input type='text' value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} placeholder='Escribe una tarea' />
            <button onClick={agregarTarea} >Agregar</button>
            <ul>
                {tareas.map((tarea,index) => (
                    <li key={index} >
                        <span style={{textDecoration:tarea.completada ? 'line-through' : 'none',}} >
                            {tarea.texto}
                        </span>
                        <button onClick={() => marcarCompletada(index)} >✔</button>
                        <button onClick={() => eliminarTarea(index)} ><b>X</b></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}