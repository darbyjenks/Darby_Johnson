import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Header from './components/Header';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';
import Work from './components/Work';

function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <AboutMe />
      <Work />
      <ContactMe />
    </div>
  );
}

export default App;