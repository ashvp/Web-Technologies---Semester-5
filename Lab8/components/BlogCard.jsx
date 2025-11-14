import { Card, Col, Button } from "react-bootstrap";

// Function to Display Individual Blog Post Card
function BlogCard({ title, description }) {
  // Function to Handle Button Click
  const onClick = (title) => {
    alert(`You clicked on ${title}`);
  };

  return (
    <Col md={6} lg={3}>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" onClick={() => onClick(title)}>
            Read More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BlogCard;
