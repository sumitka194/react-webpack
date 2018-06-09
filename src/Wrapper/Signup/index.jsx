import React, { Component } from 'react';
import { Button, Checkbox, Form, Card } from 'semantic-ui-react';

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
      <div>
        <Card>
          {/* <Image src='/assets/images/avatar/large/matthew.png' /> */}
          <Card.Content>
            <Card.Header>Signup Page</Card.Header>
            {/* <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description> */}
          </Card.Content>
          <Card.Content extra>
            <Form>
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
            </Form>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Signup;
