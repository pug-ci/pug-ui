import React          from 'react';
import { Table }      from 'semantic-ui-react';

export default class BuildsTable extends React.Component {
  constructor() {
    super();
    this.renderBuild = this.renderBuild.bind(this);
    this.renderBuilds = this.renderBuilds.bind(this);
  }

  renderBuild(build) {
    return (
      <Table.Row key={build.id}>
        <Table.Cell>{build.id}</Table.Cell>
        <Table.Cell>{build.status}</Table.Cell>
        <Table.Cell>{build.created_at}</Table.Cell>
      </Table.Row>
    );
  }

  renderBuilds() {
    const { builds } = this.props;

    return builds.map(build =>
      this.renderBuild(build),
    );
  }

  render() {
    return (
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Created at</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.renderBuilds()}
        </Table.Body>
      </Table>
    );
  }
}

BuildsTable.propTypes = {
  builds: React.PropTypes.array.isRequired,
};
