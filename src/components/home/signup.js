import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Col, Form,
  FormGroup, Label, Input,} from "reactstrap";

class SignUp extends React.Component {
  state = {
    modal: false,
  };
  toggle = () => this.setState({ modal: !this.state.modal });
  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle}>Sign up</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Sign up form</ModalHeader>
          <ModalBody>
          <Form className="form">
          
          <Col>
            <FormGroup>
              <Label>Name</Label>
              <Input
              type="text" id="fname" name="fname"
              />
            </FormGroup>
          </Col>
          
          
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col> 
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>
            Submit information
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SignUp ;
