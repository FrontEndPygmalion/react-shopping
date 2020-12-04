import { useState, useEffect } from 'react'
import Product from '../components/Product'

let data = [
    {
        id: 1,
        name: 'Arepa',
        image: 'https://www.pequerecetas.com/wp-content/uploads/2019/10/arepas-receta-768x523.jpg',
        description: 'Deliciosas arepas'
    },
    {
        id: 2,
        name: 'Quesito',
        image: 'https://www.mercadoslpineda.co/1749-thickbox_default/quesito-colanta-x-400-g-montefrio.jpg',
        description: 'Deliciosas quesito'
    },
    {
        id: 3,
        name: 'Chocolate',
        image: 'https://i2.wp.com/www.adelantosdigital.com/web/wp-content/uploads/2017/01/chocolate-port.jpg?resize=720%2C405&ssl=1',
        description: 'Delicioso chocolate'
    },
    {
        id: 4,
        name: 'Galletas',
        image: 'https://s1.eestatic.com/2020/04/16/cocinillas/recetas/postres/Reposteria-Galletas-Postres_482962222_150389308_1706x960.jpg',
        description: 'Delicioso chocolate'
    }
]



const Products = () => {

    const [productos, setProductos] = useState([])
    const [query, setQuery] = useState('')


    const getData = async () => {
        let reponse = await fetch('https://breakingbadapi.com/api/characters')
        let data = await reponse.json()
        console.log(data)
        setProductos(data)
    }

    useEffect(()=>{
        // getData()
        setProductos(data)
    },[getData])

    let filtered = productos.filter((producto) => {
            console.log(producto)
        return  producto.name.toLowerCase().includes(query.toLowerCase())  })

    return (
        <>
            <div className="container">
                <div className="row mb-4 mt-4">
                    <div className="col-4">
                        <input
                            className="form-control"
                            type="text"
                            value = {query}
                            onChange = {
                                (event) => {
                                    setQuery(event.target.value)
                                    console.log(filtered)
                                }
                            }
                            placeholder="Busca productos" />
                    </div>
                    <div className="col-2">
                        <button className="btn btn-primary">Buscar</button>
                    </div>
                </div>
                <div className="row">
                    {
                        filtered.map((producto) =>
                            <Product key={producto.id} productData={producto} />
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default Products