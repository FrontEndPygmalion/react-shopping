import { Link } from 'react-router-dom'
import './styles/Componente404.css'

function Componente404() {

    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div>
                            <div className="contant_box_404">
                                <h3 className="h2">
                                    Parece que estas perdido </h3>
                                <p>La pagina que buscas no está disponible!</p>
                                <Link to="/" className="link_404">Volver al inicio</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Componente404