import React                from 'react';
import { connect }          from 'react-redux';
import { Button, Segment, Header, Icon }           from 'semantic-ui-react';

import { setDocumentTitle } from '../../utils';
import RemoteRepositoriesTable from '../../components/repositories/remote_table';
import Actions              from '../../actions/repositories';

class RepositoriesIndex extends React.Component {
  constructor() {
    super();
    this.handleSyncAccount = this.handleSyncAccount.bind(this);
    this.renderRemoteRepositories = this.renderRemoteRepositories.bind(this);
  }

  componentDidMount() {
    setDocumentTitle('Repositories');
  }

  handleSyncAccount() {
    this.props.dispatch(Actions.fetchRemoteRepositories());
  }

  renderRemoteRepositories() {
    const { remoteRepositories } = this.props;

    if (remoteRepositories.length === 0) {
      return (
        <h2>No remote repositories. Try to synchronize your account.</h2>
      );
    }

    return (
      <RemoteRepositoriesTable dispatch={this.props.dispatch} remoteRepositories={remoteRepositories} />
    );
  }

  render() {
    return (
      <Segment basic className="view-container repositories index">
        <Header as="h2">
          <Icon name="github" />
          <Header.Content>
            { this.props.currentUser.name }
            <Header.Subheader>
              Connect your repositories
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Button
          content="Sync account" icon="refresh" labelPosition="left" color="blue" onClick={this.handleSyncAccount}
        />

        {this.renderRemoteRepositories()}
      </Segment>
    );
  }
}

RepositoriesIndex.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  remoteRepositories: React.PropTypes.array.isRequired,
  currentUser: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  remoteRepositories: state.repositories.remoteRepositories,
  currentUser: state.session.currentUser,
});

export default connect(mapStateToProps)(RepositoriesIndex);
