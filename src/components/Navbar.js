import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import ARGFlag from "./../Assets/Flags/argentina.png"
import USAFlag from "./../Assets/Flags/united-states.png"

function NavBar(){
  const [expand, updateExpanded] = useState(false)
  const [navColour, updateNavbar] = useState(false)
  const { t, i18n } = useTranslation()

  const thisLang = () => {
    return /es/.test(i18n.language) ? 'es' : 'en'
  }

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true)
    } else {
      updateNavbar(false)
    }
  }

  function openModal(){
    if(document.getElementById("btnModal")){
      const modal = document.getElementById("tvesModal")
      const body = document.getElementsByTagName("body")[0]

      modal.style.display = "block"
      body.style.position = "static"
      body.style.height = "100%"
      body.style.overflow = "hidden"
    }
  }

  window.addEventListener("scroll", scrollHandler)

  return (
    <>
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand>
          <Nav.Item style={{ color: "#b562d6" }}>
            <b>LautaroTiamat</b>
          </Nav.Item>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <i className="fas fa-home"></i> {t('home')}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/aboutMe"
                onClick={() => updateExpanded(false)}
              >
                <i className="far fa-user"></i> {t('about')}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <i className="fab fa-codepen"></i> {t('projects')}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <i className="far fa-file-alt"></i> {t('resume')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                id="btnModal"
                className="fork-btn-inner"
                onClick={() => {
                  openModal()
                  updateExpanded(false)
                }}
              >
                <img
                  alt="Language"
                  style={{ width: "25px" }}
                  src={thisLang() === 'es' ? ARGFlag : USAFlag}
                />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar
