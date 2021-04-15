import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SearchBox from '../SearchBox';
import SearchResult from '../SearchResult';
import SearchSlider from '../SearchSlider';
import Favorites from '../Favorites';

const LandingPage = (props) => {
  return (
    <Container fluid className="landing-page">
      <Row>
        <Col className="left-panel">
          <p>Find out how wierd you are by selecting the GIFs that make you laugh. We'll show you the least wierd ones to start but you can move the slider to make them weirder.</p>
          <p>When you find a GIF you like, press the <i>Like</i> button. Once you like 5 GIFs, we'll show you how weird you are.</p>
          <SearchBox />
          <SearchResult />
          <SearchSlider />
        </Col>
        <Col className="right-panel">
          <Favorites favs={[
            { src: "https://via.placeholder.com/600x400" },
            { src: "https://via.placeholder.com/600x400" },
            { src: "https://via.placeholder.com/600x400" },
          ]} />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
