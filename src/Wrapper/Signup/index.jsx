import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment, Checkbox } from 'semantic-ui-react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  render() {
    return (
      <div className="register-form" style={{ background: 'linear-gradient(to right bottom, #008080, #0E6EB8)' }} >
        <style>
          {`
            body > div,
            body > div > div,
            body > div > div > div.register-form {
              height: 100%;
            }
          `}
        </style>
        <Grid textAlign="center" verticalAlign="middle" style={{ height: '100%' }} >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Sign Up
            </Header>
            <Form size="large" >
              <Segment stacked>
                <Form.Field>
                  <label htmlFor="Email">Email
                    <input placeholder="Email" defaultValue={this.state.email} onChange={email => this.setState({ email })} />
                  </label>
                </Form.Field>
                <Form.Field>
                  <label htmlFor="Password">Password
                    <input placeholder="Password" defaultValue={this.state.password} onChange={password => this.setState({ password })} />
                  </label>
                </Form.Field>
                <Form.Field>
                  <Checkbox label="I agree to the Terms and Conditions" />
                </Form.Field>
                <Button type="submit">Submit</Button>
              </Segment>
            </Form>
            <Message>
              Already Registered? <Link to="/login" >Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Signup;
