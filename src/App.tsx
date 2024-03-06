import { Route, Routes,HashRouter } from "react-router-dom"
import routes from "./config/routes"
import Navbar from "./components/Navbar"
import AuthChecker from './auth/AuthChecker'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Footer from "./components/Footer"

function App() {

  return (
    <HashRouter>
      <Navbar/>
      <Provider store={store}>
        <Routes>
          {routes.map
            ((route : any, index : any) => (<Route
              key = {index}
              path = {route.path}
              element = {route.protected ? (<AuthChecker><route.component/></AuthChecker>) : (<route.component/>)}
            />))
          }
          </Routes>
      </Provider>
      <Footer/>
    </HashRouter>
  )
}

export default App
