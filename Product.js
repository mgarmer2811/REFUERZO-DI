export default function Product({name,price,description}) {
    return (
        <div>
            <br/>
            <h2>Nombre: {name}</h2>
            <h3>Precio: {price}</h3>
            <p>Descripcion: {description}</p>
        </div>
    );
}