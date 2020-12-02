const Product = () => {
    return (
        <div className='col-4' >
            <div>
                <img src="https://www.pequerecetas.com/wp-content/uploads/2019/10/arepas-receta-768x523.jpg"
                 className ="card-img-top" 
                 alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Arepas</h5>
                    <p className="card-text">Deliciosas arepas de bello.</p>
                    <button className="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    )

}
export default Product