
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import useForm from "../hooks/useForm";

const Contact = () => {
  const { form, setForm, handleOnChange } = useForm({
    email: "",
    subject: "",
    message: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nEmail: ${form.email}\nSubject: ${form.subject}`);
    setForm({ email: "", subject: "", message: "" }); // Reset form
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <div className="row">
        {/* FAQ Section (Left on Desktop, Above Form on Mobile) */}
        <div className="col-md-5 order-md-1 order-2 mt-4 mt-md-0">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>How do I borrow a book?</Accordion.Header>
              <Accordion.Body>
                To borrow a book, you need to be a registered member of the
                library. You can check the availability of books online and
                visit the library to borrow them.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What is the loan period for books?
              </Accordion.Header>
              <Accordion.Body>
                The standard loan period for books is 14 days. You can renew the
                book online or visit the library for an extension.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Can I return books after hours?
              </Accordion.Header>
              <Accordion.Body>
                Yes, we have a book drop-off box at the entrance of the library
                where you can return books after hours.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How can I reserve a book?</Accordion.Header>
              <Accordion.Body>
                You can reserve a book through our online catalog. Once the book
                is available, you will receive a notification to collect it.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        {/* Contact Form (Right on Desktop, Below FAQ on Mobile) */}
        <div className="col-md-7 order-md-2 order-1 d-flex justify-content-center">
          <div className="col-md-10 p-4 border rounded shadow">
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Your message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" variant="success">
                  Send Message
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
