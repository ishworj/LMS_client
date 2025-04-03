import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";

const AiAssistant = () => {
  const [category, setCategory] = useState("general"); // Tracks the selected category
  const [question, setQuestion] = useState(""); // Tracks the question input by the user
  const [response, setResponse] = useState(""); // Tracks the AI's response

  // Handle category change
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // Handle question input
  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  // Handle question submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulating responses for now
    const mockResponses = {
      user: `User Info: There are 100 users registered in the library.`,
      borrowHistory: `Borrow History: The last borrowed book was "Harry Potter" by User#1.`,
      general: `General Info: The library has 500 books in total, with 100 books borrowed and 50 returned this week.`,
    };
    setResponse(
      mockResponses[category] || "I am still learning, ask me something else!"
    );
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="p-4 bg-light shadow-sm rounded">
          <h1 className="text-center mb-4">LibraryBot</h1>
          <p className="text-center">
            Your AI assistant for the Library Management System
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="category" className="mb-3">
              <Form.Label>Select Question Category</Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="general">General</option>
                <option value="user">User Info</option>
                <option value="borrowHistory">Borrowing History</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="question" className="mb-3">
              <Form.Label>Ask a Question</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ask something about the library..."
                value={question}
                onChange={handleQuestionChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Ask
            </Button>
          </Form>

          {response && (
            <div className="mt-4 p-3 bg-light border rounded">
              <h3>Response:</h3>
              <p>{response}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AiAssistant;
