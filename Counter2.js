'use client'
import { useState } from 'react'

export default function Counter2() {
    const [clicks, setClicks] = useState(0);
    
    return (
      <div>
        <h1>Numero de clicks: {clicks}</h1>
        <button onClick={() => setClicks(clicks+1)}>Añadir click</button>
        <button onClick={() => setClicks(clicks-1)}>Eliminar click</button>
      </div>
    );
}