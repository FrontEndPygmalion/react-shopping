import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import PageListaCompras from './pages/PageListaCompras'
import Products from './pages/Products'
import Layout from './components/Layout'
import Componente404 from './components/Componente404'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Products} />
                    <Route exact path="/productos" component={Products} />
                    <Route exact path="/carrito-compras" component={PageListaCompras} />
                    <Route component={Componente404} />
                    <Redirect from='*' to="/404" />
                </Layout>

            </Switch>
        </BrowserRouter>
    )
}

export default App