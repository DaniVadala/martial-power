import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <img className='shopLogo' src="https://cdn.pixabay.com/photo/2014/04/02/10/58/karate-305102_1280.png" alt="" /> 
        <Navbar.Brand href="#home">Martial Spirit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <NavDropdown title="Our Producs" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Boxing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Taekwondo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kung Fu</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                All products
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


//  NavBar = () => {
//   return (

//     <nav className="navbar navbar-expand-lg navbar-light navBarBackground navBarPadding">
//       <img className='shopLogo' src="https://cdn.pixabay.com/photo/2014/04/02/10/58/karate-305102_1280.png" alt="" />
//     <a className="navbar-brand" href="#">Martial Spirit</a>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul className="navbar-nav">
//         <li className="nav-item active">
//           <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">About Us</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Contact us</a>
//         </li>
//       </ul>
//     </div>
//     <div>
//     <CartWidget/>
//     </div>

//   </nav>
    
    
    
//   )
// }

// export default NavBar;const
