import React, { useEffect, useState } from 'react'

const Product = ({productData}) => {
    const { img, name, nickname} = productData // desestructuracion de objeto productData
    const [cantidad, modificarCantidad] = useState(0)

    useEffect(() => {
        document.title = `has comprado ${cantidad} arepas`
    }
    )

    return (
        <>
            <div className='col-4' style={{ 'border': '1px solid gray' }} >
                <img src={img}
                    height='200px'
                    width = 'auto'
                    className="card-img-top"
                    alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name} ({cantidad})</h5>
                    <p className="card-text">{nickname}</p>
                    <button
                        onClick={() => modificarCantidad(cantidad + 1)}
                        className="btn btn-primary">Comprar</button>

                </div>
            </div>
        </>
    )

}
export default Product