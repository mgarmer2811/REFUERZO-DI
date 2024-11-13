export default function Card({cardData}) {
    return(
        <div>
            <h2>{cardData.title}</h2>
            <p>{cardData.description}</p>
            <img src={cardData.source} alt={cardData.title} />
        </div>
    );
}