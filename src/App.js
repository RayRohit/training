import React from 'react'
import Main from './UseEffect/Main'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { Navbar,Nav,Container } from 'react-bootstrap'
import Review from './UseEffect/Review/Review'
import Accordian from './UseEffect/Accordian'
import Menu from './Menu/Menu'
import Control from './Forms/Control'
import Formss from './GlobalState/Formss'
import Aform from './GlobalState/Aform'
import MainState from './GlobalState/MainState'
import Addform from './GlobalState/Addform'

export default function App() {
  return (
    <div>
      <MainState>
        <BrowserRouter>
          <Navbar variant='dark' bg="dark" expand="lg">
            <Container>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav>
                  <Nav.Link as={Link} to="/tours">Tours</Nav.Link>
                  <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
                  <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
                  <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                  <Nav.Link as={Link} to="/form">Form</Nav.Link>
                  <Nav.Link as={Link} to="/gform">G-Form </Nav.Link>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/tours' element={<Main />}></Route>
            <Route path='/reviews' element={<Review />}></Route>
            <Route path='/faq' element={<Accordian />}></Route>
            <Route path='/menu' element={<Menu />}></Route>
            <Route path='/form' element={<Control />}></Route>
            <Route path='/gform' element={<Formss />}></Route>
            <Route path='/aform' element={<Aform />}></Route>
            <Route path='/addform' element={<Addform />}></Route>

          </Routes>
        </BrowserRouter>
      </MainState>
    </div>
  )
}
