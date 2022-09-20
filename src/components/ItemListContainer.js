

const ItemListContainer = ( {empresa} ) => {
    return (
        <>
        <div id="tituloDeBienvenida__container" className="centeredText">
            <h1 className="font-sans hover:font-serif">¡Bienvenido al E-commerce de {empresa}!</h1>
            <hr/>
        </div>
        </>
        
    )
}
export default ItemListContainer