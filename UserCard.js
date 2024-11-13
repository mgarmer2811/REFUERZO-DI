export default function UserCard(user) {
    return (
        <div>
            <h2>Nombre: {user.name}</h2>
            <h3>Edad: {user.age}</h3>
            <h3>Sexo: {user.sex}</h3>
        </div>
    );
}