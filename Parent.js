'use client'
import { useState } from 'react';

function Child({sentFromFather,onSendMessage}) {

    function sendMessage() {
        onSendMessage('This text is sent from the child component');
    }
    
    return(
        <div>
            <h3>Child component's text</h3>
            <p>Sent by father component: {sentFromFather}</p>
            <button onClick={sendMessage}>Message father component</button>
        </div>
    );
}

export default function Parent() {
    
    const sentToChild = 'This message is being displayed in the child component'
    const [receivedFromChild,setReceivedFromChild] = useState('');

    function sendMessage(message){
        setReceivedFromChild(message);
    }

    return(
        <div>
            <Child sentFromFather={sentToChild} onSendMessage={sendMessage}/>
            <p>Message from child component: {receivedFromChild}</p>
        </div>
    );
}