import React, { Component } from 'react'


class Product extends Component {


    constructor(props) {
        super(props)
        this.state = {
            "title": "Arepa"
        }
        console.log('hola soy el constructor')
        this.cambiarTitulo = this.cambiarTitulo.bind(this)
    }

    componentDidMount() {
        console.log('hola el componente producto fue renderizado tambien llamado "montado"')

    }

    componentDidUpdate() {
        console.log('el componente fue actualizado')
    }

    componentWillUnmount(){
        console.log('el componente será desmontado')
    }

    cambiarTitulo() {
        this.setState({
            "title": "Arepa de chocolo"
        })
    }

    render() {
        console.log('hola soy el render')
        return (
            <div className='col-4' >
                <div>
                    <img src="https://www.pequerecetas.com/wp-content/uploads/2019/10/arepas-receta-768x523.jpg"
                        className="card-img-top"
                        alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.title}</h5>
                        <p className="card-text">Deliciosas arepas de bello.</p>
                        <button  onClick={this.cambiarTitulo} className="btn btn-primary">Comprar</button>
                    </div>
                </div>
            </div>
        )
    }

}
export default Product