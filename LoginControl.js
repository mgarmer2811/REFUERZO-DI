'use client'
import { useState } from 'react'

export default function LoginControl() {
    const[state, setState] = useState(false);
    let buttonText = state ? 'Cerrar Sesion' : 'Iniciar Sesion';

    return(
        <button onClick={() => setState(!state)}>{buttonText}</button>
    );
}