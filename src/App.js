// import Container from 'react-bootstrap/Container';
import Login from "./screens/login/login"
import "./app.scss";
import { BrowserRouter,Route,Routes,Navigate} from "react-router-dom";
import Layout from "./layout";
import Homescreen from "./screens/homescreens/homescreen";

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout Screen={<Homescreen/>}/>} />
        <Route path="/auth" element={<Login/>} />
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
