'use client'
import { useState } from 'react'

export default function ToggleSwitch() {
    const[estado,setEstado] = useState(false);
    
    return (
        <div>
            <h2>{estado ? 'ON' : 'OFF'}</h2>
            <button onClick={() => setEstado(!estado)}>Cambiar estado</button>
        </div>
    );
}