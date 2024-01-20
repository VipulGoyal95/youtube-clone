import Navbar from "./components/header/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Container from 'react-bootstrap/Container';
import Homescreen from "./screens/homescreens/homescreen";


function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Sidebar/>
        <Container fluid>
        <Homescreen/>
        </Container>

      </div>
      
    </>
  );
}

export default App;
