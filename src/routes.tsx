import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./pages"


const AppRouter = () =>{

    return (
    <BrowserRouter>
        <Routes>
          <Route  path="/:query?" element={<Home/>} />
          {/* <Route  path="/details/:name?" element={Details} /> */}
        </Routes>
      </BrowserRouter>
    )
}