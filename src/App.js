import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import Componente404 from './components/Componente404'
import Layout from './components/Layout'
import Products from './pages/Products'
import PageListaCompras from './pages/PageListaCompras'
import Register from './pages/Register'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Products} />
                    <Route exact path="/productos" component={Products} />
                    <Route exact path="/carrito-compras" component={PageListaCompras} />
                    <Route exact path="/registrarse" component={Register} />
                    <Route component={Componente404} />
                </Layout>

            </Switch>
        </BrowserRouter>
    )
}

export default App