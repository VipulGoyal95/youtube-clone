import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import CategoriesBar from "../../components/categoriesbar/CategoriesBar";
import Video from "../../components/video/Video";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Homescreen = () => {
  return (
    <Container fluid>
        <CategoriesBar/>
        <Row>
        {
            [...new Array(20)].map(()=>
            (<Col lg={3} md={4}>
            <Video/>
            </Col>)
        )}
        </Row>

    </Container>
  )
}

export default Homescreen
