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
        {repository.owner}/{repository.name}
      </Menu.Item>,
    );
  }

  renderConnectedRepositories() {
    const { repositories } = this.props;
    const connectedRepositories = repositories.filter(element => element.connected);

    if (connectedRepositories.length === 0) return false;

    return (
      <Menu.Item name="connectedRepositories">
        <Icon name="github" />
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
        <Menu.Item onClick={() => this.props.dispatch(push('/'))} name="connectRepository">
          <Icon name="add square" />
          Connect repository
        </Menu.Item>
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
  repositories: React.PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  repositories: state.repositories.repositories,
});

export default connect(mapStateToProps)(SidebarMenu);
