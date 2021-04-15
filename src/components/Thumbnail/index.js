import React from 'react';
import { Image, Button, Card } from "react-bootstrap";
const Thumbnail = ({ title, src, onCancel }) => {
  return (
    <Card className="thumbnail">
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Text>
          {title}
        </Card.Text>
      </Card.Body>
      {onCancel ? <Button className="btn-cancel" onClick={onCancel}>X</Button> : null}
    </Card>
  );
};

export default Thumbnail;
