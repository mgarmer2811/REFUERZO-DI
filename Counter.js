'use client';
import { useState } from 'react';

export default function Counter() {
    const [clicks,setClicks] = useState(0);
    
    return(
        <>
            <p>Numero de clicks: {clicks}</p>
            <button onClick={() => setClicks(clicks + 1)}>
                Clickame!
            </button>
        </>
    );
}