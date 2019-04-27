import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <Row>
        <Col sm={12} md={{ size: 6, offset: 3 }}>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                <Input
                  type="text"
                  value={this.state.email}
                  placeholder="Email"
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">*</InputGroupAddon>
                <Input
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </InputGroup>
              <br />
              <div className="errors">
                {this.props.errors.map(error => (
                  <div key={error}>{error}</div>
                ))}
              </div>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default AuthForm;
