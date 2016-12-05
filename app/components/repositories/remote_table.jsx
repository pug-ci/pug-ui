import React        from 'react';
import { Checkbox, Table } from 'semantic-ui-react';

import Actions  from '../../actions/repositories';

export default class RemoteRepositoriesTable extends React.Component {
  constructor() {
    super();
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.renderRepository = this.renderRepository.bind(this);
    this.renderRepositories = this.renderRepositories.bind(this);
  }

  handleToggleChange(repository) {
    const { dispatch } = this.props;

    const data = {
      github_id: repository.github_id,
      name: repository.name,
      url: repository.url,
      owner: repository.owner,
    };

    dispatch(Actions.createRepository(data));
  }

  renderRepository(repository) {
    return (
      <Table.Row key={repository.github_id}>
        <Table.Cell>
          <Checkbox toggle defaultChecked={repository.connected} onChange={() => this.handleToggleChange(repository)} />
        </Table.Cell>
        <Table.Cell>{repository.owner}</Table.Cell>
        <Table.Cell>{repository.name}</Table.Cell>
      </Table.Row>
    );
  }

  renderRepositories() {
    const { remoteRepositories } = this.props;

    return remoteRepositories.map(repository =>
      this.renderRepository(repository),
    );
  }

  render() {
    return (
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Connect</Table.HeaderCell>
            <Table.HeaderCell>Owner</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.renderRepositories()}
        </Table.Body>
      </Table>
    );
  }
}

RemoteRepositoriesTable.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  remoteRepositories: React.PropTypes.array.isRequired,
};
