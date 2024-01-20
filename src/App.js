import Navbar from "./components/header/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Container from 'react-bootstrap/Container';
import CategoriesBar from "./components/categoriesbar/CategoriesBar";

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Sidebar/>
        <Container >
        <CategoriesBar/>
        </Container>

      </div>
      
    </>
  );
}

export default App;
