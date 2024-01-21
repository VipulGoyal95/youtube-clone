import Navbar from "./components/header/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Container from 'react-bootstrap/Container';
import Homescreen from "./screens/homescreens/homescreen";
import "./app.scss";

function App() {
  return (
    <>
      <Navbar/>
      <div className="app-container">
        <Sidebar/>
        <Container fluid className="main-container border border-black">
        <Homescreen/>
        </Container>

      </div>
      
    </>
  );
}

export default App;
