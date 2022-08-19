import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Row>
          <Col sm="11">
            <Form.Control
              type="text"
              className="input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Add new todo"
            />
          </Col>
          <Col sm="1">
            <Button variant="primary mb-3 submit_button" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
}
export default FormTodo;
