import { useState, useEffect } from 'react'
import Product from '../components/Product'

let dataProducts = [
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

    const [personajes, setPersonajes] = useState([])


    const getData = async () => {
        let reponse = await fetch('https://breakingbadapi.com/api/characters')
        let data = await reponse.json()
        console.log(data)
        setPersonajes(data)
    }

    useEffect(() => {
            getData()
    }, [getData])

    return (
        <div className="row">
            {
                personajes.map((producto) =>
                    <Product key={producto.id} productData={producto} />
                )
            }
        </div>
    )
}
export default Products