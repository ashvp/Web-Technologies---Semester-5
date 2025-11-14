import { Container, Row } from "react-bootstrap";
import BlogCard from "./BlogCard";

// Function to Display Dashboard with Blog Posts
function Dashboard({ posts }) {
  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Blog Dashboard</h1>
      <p className="text-center mb-4">
        Welcome to my blog! Check out the latest posts below.
      </p>
      <Row>
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Dashboard;
