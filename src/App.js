import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import PageListaCompras from './pages/PageListaCompras'
import Products from './pages/Products'
import Layout from './components/Layout'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Products} />
                    <Route exact path="/productos" component={Products} />
                    <Route exact path="/carrito-compras" component={PageListaCompras} />
                </Layout>
            </Switch>
        </BrowserRouter>
    )
}

export default App