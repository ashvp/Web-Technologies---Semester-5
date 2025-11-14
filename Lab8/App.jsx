import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";

// Function to display the components
function App() {
  // Sample Blog Posts Data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      description:
        "Learn the basics of React and how to build your first component. This guide covers everything you need to know to get started.",
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox",
      description:
        "Understanding when to use CSS Grid and when to use Flexbox for your layouts. Compare the pros and cons of each approach.",
    },
    {
      id: 3,
      title: "JavaScript ES6 Features",
      description:
        "Explore the most useful ES6 features including arrow functions, destructuring, and template literals that every developer should know.",
    },
    {
      id: 4,
      title: "Building Responsive Websites",
      description:
        "Master the art of creating websites that look great on all devices. Learn mobile-first design principles and best practices.",
    },
  ];
  return (
    <>
      <div>
        <NavigationBar />
        <Dashboard posts={blogPosts} />
      </div>
    </>
  );
}

export default App;
