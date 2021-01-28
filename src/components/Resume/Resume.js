import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import Button from "react-bootstrap/Button"
import Particle from "../Particle"
import Resumecontent from "./ResumeContent"
import myCV from "../../Assets/Docs/RolónLautaroEmanuel.pdf"
import myCert1 from "./../../Assets/Docs/Cert/web-development-I.pdf"
import myCert2 from "./../../Assets/Docs/Cert/web-development-II.pdf"
import myCert3 from "./../../Assets/Docs/Cert/productividad-personal.pdf"
import myCert4 from "./../../Assets/Docs/Cert/ciberseguridad.pdf"

const Resume = () => {
  const { t } = useTranslation()

  const DownloadCV = () => {
    return(
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button variant="primary" href={myCV} target="_blank">
          <i className="fas fa-download">&nbsp;</i>{t('downloadCV')}
        </Button>
      </Row>
    )
  }

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <DownloadCV />
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">{t('resumeText-1')}</h3>
            <Resumecontent
              title={t('resumeExp-1')}
              date="2020"
              content={[]}
            />
            <Resumecontent
              title={t('resumeExp-2')}
              date="2020"
              content={[
                t('resumeExp-2-1'),
              ]}
            />

            <h3 className="resume-title">{t('extCurrActText-1')}</h3>
            <Resumecontent
              title={t('extCurrActExp-1')}
              date={"2021 - " + t('present')}
              content={[
                t('extCurrActExp-1-1')
              ]}
            />
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title">{t('educationText-1')}</h3>
            <Resumecontent
              title={t('educationExp-1')}
              date={"2019 - " + t('present')}
              content={[]}
            />
            <Resumecontent
              title={t('educationExp-2')}
              date="2020"
              content={[]}
            />

            <h3 className="resume-title">{t('trainingText-1')}</h3>
            <Resumecontent
              title=""
              content={[
                <Link to={myCert1} target="_blank">{t('trainingExp-1')}</Link>,
                <Link to={myCert2} target="_blank">{t('trainingExp-2')}</Link>,
                <Link to={myCert3} target="_blank">{t('trainingExp-3')}</Link>,
                <Link to={myCert4} target="_blank">{t('trainingExp-4')}</Link>
              ]}
            />
          </Col>
        </Row>
        <DownloadCV />
      </Container>
    </Container>
  )
}

export default Resume
