import React        from 'react';
import { Checkbox, Table } from 'semantic-ui-react';

export default class RemoteRepositoriesTable extends React.Component {
  constructor() {
    super();
    this.renderRepository = this.renderRepository.bind(this);
    this.renderRepositories = this.renderRepositories.bind(this);
  }


  renderRepository(repository) {
    return (
      <Table.Row>
        <Table.Cell>
          <Checkbox toggle />
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
  remoteRepositories: React.PropTypes.array.isRequired,
};
