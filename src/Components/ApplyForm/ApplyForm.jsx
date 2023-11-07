import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import upload from "../../assets/images/upload.svg";
import "./ApplyForm.css";
function ApplyForm() {
  return (
    <Form className="contact-form">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Full name </Form.Label>
          <Form.Control type="name" placeholder="Full Name" required />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group className="mb-3" controlId="formGridPhone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control placeholder="009 0000 0000" />
        </Form.Group>
      </Row>
      <button className="upload-cv">
        <div style={{ textAlign: "center" }}>
          <img src={upload} alt="" />
        </div>
        <p>Upload your resume </p>
      </button>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email address </Form.Label>
          <Form.Control type="email" placeholder="Your Email" required />
        </Form.Group>
      </Row>

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
        <Form.Label>What are your salary expectations?</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Salary expectations"
          rows={2}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
        <Form.Label>
          What makes you the ideal candidate for this position?
        </Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Write your answer here"
          rows={2}
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
        Submit Application
      </Button>

      <button className="cancel">cancel</button>
    </Form>
  );
}

export default ApplyForm;
