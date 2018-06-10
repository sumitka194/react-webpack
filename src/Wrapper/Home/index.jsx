import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Menu, Divider } from 'semantic-ui-react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    if (name === 'logout') {
      this.props.history.push('/login');
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div className="home" style={{ background: 'linear-gradient(to right bottom, #008080, #0E6EB8)' }} >
        <style>
          {`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
          `}
        </style>
        <Menu secondary>
          <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name="messages"
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="friends"
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        <Divider />
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
