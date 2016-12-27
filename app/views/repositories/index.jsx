import React                from 'react';
import { connect }          from 'react-redux';
import { Button, Segment, Header, Icon }           from 'semantic-ui-react';

import { setDocumentTitle } from '../../utils';
import RepositoriesTable    from '../../components/repositories/table';
import Actions              from '../../actions/repositories';

class RepositoriesIndex extends React.Component {
  constructor() {
    super();
    this.handleSyncAccount = this.handleSyncAccount.bind(this);
    this.rendeRepositories = this.renderRepositories.bind(this);
  }

  componentDidMount() {
    setDocumentTitle('Repositories');
  }

  handleSyncAccount() {
    this.props.dispatch(Actions.fetchRepositories());
  }

  renderRepositories() {
    const { repositories } = this.props;

    if (repositories.length === 0) {
      return (
        <Header as="h2" textAlign="center">No repositories. Try to synchronize your account.</Header>
      );
    }

    return (
      <RepositoriesTable dispatch={this.props.dispatch} repositories={repositories} />
    );
  }

  render() {
    return (
      <Segment basic className="view-container repositories index">
        <Header as="h2" className="title">
          <Icon name="github" />
          <Header.Content>
            { this.props.currentUser.name }
            <Header.Subheader>
              Connect your repositories
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Button
          content="Sync account" icon="refresh" labelPosition="left" color="blue" floated="right"
          onClick={this.handleSyncAccount}
        />

        {this.renderRepositories()}
      </Segment>
    );
  }
}

RepositoriesIndex.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  repositories: React.PropTypes.array.isRequired,
  currentUser: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  repositories: state.repositories.repositories,
  currentUser: state.session.currentUser,
});

export default connect(mapStateToProps)(RepositoriesIndex);
