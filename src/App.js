import {Outlet} from 'react-router-dom'
import './App.css';
import NavTopBar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

/*const StyledCont = styled(Container)`
background-color: #e2e2e2;
height: 100vh;
`*/

export default function App() {
  return (
    <div className="App">
      <header>
        <NavTopBar/>
      </header>
      <Outlet />
      <Footer/>
    </div>
  );
}

