import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import CategoriesBar from "../../components/categoriesbar/CategoriesBar";
import Video from "../../components/video/Video";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./homescreen.scss";
const Homescreen = () => {
  return (
    <Container fluid="md" className="outer-container">
        <CategoriesBar/>
        <Row>
        {
            [...new Array(20)].map(()=>
            (<Col lg={4} md={3} className="video">
            <Video/>
            </Col>)
        )}
        </Row>

    </Container>
  )
}

export default Homescreen
