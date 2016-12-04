import React                            from 'react';
import { connect }                      from 'react-redux';
import { push }                         from 'react-router-redux';
import { Sidebar, Menu, Image, Icon }   from 'semantic-ui-react';

import SessionActions       from '../actions/sessions';
import RepositoriesActions  from '../actions/repositories';

class SidebarMenu extends React.Component {
  constructor() {
    super();
    this.handleSignOutClick = this.handleSignOutClick.bind(this);
    this.handleRepositoryClick = this.handleRepositoryClick.bind(this);
    this.renderRepositories = this.renderRepositories.bind(this);
    this.renderConnectedRepositories = this.renderConnectedRepositories.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(RepositoriesActions.fetchRepositories());
  }

  handleSignOutClick(e) {
    e.preventDefault();

    this.props.dispatch(SessionActions.signOut());
  }

  handleRepositoryClick(repositoryId) {
    this.props.dispatch(push(`/repositories/${repositoryId}`));
  }

  renderRepositories(repositories) {
    return repositories.map(repository =>
      <Menu.Item key={repository.id} onClick={() => this.handleRepositoryClick(repository.id)}>
        {repository.name}
      </Menu.Item>,
    );
  }

  renderConnectedRepositories() {
    const { connectedRepositories } = this.props;

    if (connectedRepositories.length === 0) return false;

    return (
      <Menu.Item name="connectedRepositories">
        Connected repositories
        <Menu.Menu>
          {this.renderRepositories(connectedRepositories)}
        </Menu.Menu>
      </Menu.Item>
    );
  }

  render() {
    return (
      <Sidebar as={Menu} animation="push" size="massive" width="wide" visible icon="labeled" vertical inverted>
        <Menu.Item name="logo" onClick={() => this.props.dispatch(push('/'))}>
          <Image src="/img/logo.png" size="small" centered />
        </Menu.Item>
        <Menu.Item name="user">
          {this.props.currentUser.name}
        </Menu.Item>
        {this.renderConnectedRepositories()}
        <Menu.Item onClick={this.handleSignOutClick} name="signOut">
          <Icon name="sign out" />
          Sign out
        </Menu.Item>
      </Sidebar>
    );
  }
}

SidebarMenu.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  currentUser: React.PropTypes.object.isRequired,
  connectedRepositories: React.PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  connectedRepositories: state.repositories.connectedRepositories,
});

export default connect(mapStateToProps)(SidebarMenu);
