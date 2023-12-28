import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import { store } from "../../store/store";
import Router from "../Router/Router";
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function App() {
    return ( 
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <Router/>
                    <Footer/>
                </BrowserRouter>
            </Provider>
     );
}

export default App;