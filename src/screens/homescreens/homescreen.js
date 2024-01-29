import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import CategoriesBar from "../../components/categoriesbar/CategoriesBar";
import Video from "../../components/video/Video";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./homescreen.scss";
import { useSelector } from 'react-redux';
const Homescreen = () => {
  const video = useSelector(state=> state.video.videos);
  return (
    <Container fluid className="outer-container">
        <CategoriesBar/>
        <Row>
        {
            video.map((video)=>
            (<Col lg={4} md={6} sm={6} className="video" key={video.id}>
            <Video videos={video} />
            </Col>)
        )}
        </Row>

    </Container>
  )
}

export default Homescreen
