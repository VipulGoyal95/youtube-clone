import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import CategoriesBar from "../../components/categoriesbar/CategoriesBar";
import Video from "../../components/video/Video";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./homescreen.scss";
const Homescreen = () => {
  return (
    <Container fluid className="outer-container border border-info">
        <CategoriesBar/>
        <Row className="border border-warning" lg={4}>
        {
            [...new Array(20)].map(()=>
            (<Col lg={3} md={4} className="video border border-danger">
            <Video/>
            </Col>)
        )}
        </Row>

    </Container>
  )
}

export default Homescreen
