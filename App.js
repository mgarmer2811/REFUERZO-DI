import Card from './Card'
import { cd1,cd2,cd3 } from './CardData'

export default function App() {
    return(
        <div>
            <Card cardData={cd1}/>
            <Card cardData={cd2}/>
            <Card cardData={cd3}/>
        </div>
    );
}