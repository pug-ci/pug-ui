import React              from 'react';
import { connect }        from 'react-redux';
import { Sidebar, Menu, Image, Icon }  from 'semantic-ui-react';

import SessionActions     from '../actions/sessions';

class SidebarMenu extends React.Component {
  constructor() {
    super();
    this.handleSignOutClick = this.handleSignOutClick.bind(this);
  }

  handleSignOutClick(e) {
    e.preventDefault();

    this.props.dispatch(SessionActions.signOut());
  }

  render() {
    return (
      <Sidebar as={Menu} animation="push" width="thin" visible icon="labeled" vertical inverted>
        <Menu.Item name="logo">
          <Image src="img/logo.png" size="small" centered />
        </Menu.Item>
        <Menu.Item name="user">
          {this.props.currentUser.name}
        </Menu.Item>
        <Menu.Item onClick={this.handleSignOutClick} name="signOut">
          <Icon name="sign out" />
          SignOut
        </Menu.Item>
      </Sidebar>
    );
  }
}

SidebarMenu.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  currentUser: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

export default connect(mapStateToProps)(SidebarMenu);
