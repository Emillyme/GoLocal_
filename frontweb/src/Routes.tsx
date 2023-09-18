import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/common/navbar/Navbar";
import Login from "components/login/Login";
import Cadastro from "components/cadastro/Cadastro";


const Routes = () => (
  <BrowserRouter>
  <Navbar/>
    <Switch>
       <Route path="/Login">
            <Login/>
       </Route>
       <Route path="/Cadastro">
            <Cadastro/>
       </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;