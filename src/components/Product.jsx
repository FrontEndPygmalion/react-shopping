import React, { useEffect, useState } from 'react'

const Product = () => {
    const [cantidadArepas, modificarCantidadArepas] = useState(0)

    useEffect(() => {
        document.title = `has comprado ${cantidadArepas} arepas`
    }
    )



    return (
        <>
            <div className='col-4' >
                <div>
                    <img src="https://www.pequerecetas.com/wp-content/uploads/2019/10/arepas-receta-768x523.jpg"
                        className="card-img-top"
                        alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Arepas</h5>
                        <p className="card-text">Deliciosas arepas de bello.</p>
                        <button
                            onClick={() => modificarCantidadArepas(cantidadArepas + 1)}
                            className="btn btn-primary">Comprar</button>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <h2>
                    {cantidadArepas}
                </h2>
            </div>
        </>
    )

}
export default Product