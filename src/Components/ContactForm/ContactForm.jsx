import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./ContactForm.css";
function ContactForm() {
  return (
    <Form className="contact-form">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>First name </Form.Label>
          <Form.Control type="name" placeholder="First Name" required />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email address </Form.Label>
          <Form.Control type="email" placeholder="Your Email" required />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridPhone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control placeholder="009 0000 0000" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridService">
          <Form.Label>Service</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose Service</option>
            <option>Service 1</option>
            <option>Service 2</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
        <Form.Label>Drop us a message</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Hello there,I would like to talk about how to..."
          rows={6}
        />
      </Form.Group>

      <Button
        style={{
          background: "#412B95",
          width: "100%",
          border: "none",
          height: "48px",
        }}
        type="submit"
      >
        Send Massage
      </Button>
    </Form>
  );
}

export default ContactForm;
