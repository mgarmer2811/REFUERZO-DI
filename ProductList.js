import Product from './Product'

export default function ProductList() {
    return (
        <div>
            <Product 
                name="Auriculares Inalámbricos X1000" 
                price="€129,99" 
                description='Auriculares inalámbricos con cancelación de ruido, hasta 20 horas de batería, y sonido de alta fidelidad.'
            />
            <Product
                name='Reloj Inteligente V2'
                price='€249,99'
                description='Reloj inteligente con monitoreo de salud, GPS integrado, y notificaciones de teléfono en tu muñeca.'
            />
            <Product
                name='Blender Portátil SmoothiePro'
                price='€39,99'
                description='Batidora portátil de alto rendimiento, perfecta para hacer smoothies y batidos en cualquier lugar. Incluye batería recargable y es fácil de limpiar.'
            />
        </div>
    );
}