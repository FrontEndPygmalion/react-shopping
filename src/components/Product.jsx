import React, { useEffect, useState } from 'react'

const Product = (props) => {
    const [cantidad, modificarCantidad] = useState(0)

    useEffect(() => {
        document.title = `has comprado ${cantidad} arepas`
    }
    )

    return (
        <>
            <div className='col-4' style={{ 'border': '1px solid gray' }} >
                <img src={props.productData.image}
                    height='200px'

                    className="card-img-top"
                    alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.productData.name} ({cantidad})</h5>
                    <p className="card-text">{props.productData.description}</p>
                    <button
                        onClick={() => modificarCantidad(cantidad + 1)}
                        className="btn btn-primary">Comprar</button>

                </div>
            </div>
        </>
    )

}
export default Product