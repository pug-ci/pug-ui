import React                from 'react';
import { connect }          from 'react-redux';
import { Sidebar, Segment } from 'semantic-ui-react';

import SidebarMenu  from '../layouts/sidebar_menu';

class AuthenticatedContainer extends React.Component {
  render() {
    const { currentUser } = this.props;

    if (!currentUser) return false;

    return (
      <Sidebar.Pushable>
        <SidebarMenu />
        <Sidebar.Pusher>
          <Segment basic>
            <div className="main-container">
              {this.props.children}
            </div>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

AuthenticatedContainer.propTypes = {
  children: React.PropTypes.node.isRequired,
  currentUser: React.PropTypes.object,
};

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

export default connect(mapStateToProps)(AuthenticatedContainer);
