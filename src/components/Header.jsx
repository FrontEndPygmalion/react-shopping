import { Link } from 'react-router-dom'
import './styles/Header.css'

function Header() {

    const isLoggedIn = true


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">React Shopping</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/productos">Productos <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/carrito-compras">
                            Carrito de compras
                         <span className="fas fa-shopping-cart"></span>
                            <span className="shopping-cart" > 1</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        {
                            isLoggedIn ?
                                <Link className="nav-link"> Bienvenido fulanito</Link>
                                :
                                <Link className="nav-link"> Iniciar Sesion</Link>
                        }

                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Header