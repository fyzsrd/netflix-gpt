import { Provider } from "react-redux";
import './App.css'
import Body from './components/Body'
import appStore from "./utils/appStore";
import { AppProvider } from "./context/AppContext";
import { MovieProvider } from "./context/MovieContext";



function App() {


  return (


    <MovieProvider >
      <Provider store={appStore} >
        <Body />
      </Provider>

    </MovieProvider>






  )
}

export default App
