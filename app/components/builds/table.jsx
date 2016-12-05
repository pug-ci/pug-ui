import React            from 'react';
import { push }         from 'react-router-redux';
import { Table, Label } from 'semantic-ui-react';
import { buildColor }   from '../../utils';

export default class BuildsTable extends React.Component {
  constructor() {
    super();
    this.handleBuildClick = this.handleBuildClick.bind(this);
    this.renderBuild = this.renderBuild.bind(this);
    this.renderBuilds = this.renderBuilds.bind(this);
  }

  handleBuildClick(build) {
    this.props.dispatch(push(`/repositories/${this.props.repositoryId}/builds/${build.id}`));
  }

  renderBuild(build) {
    return (
      <Table.Row key={build.id} onClick={() => this.handleBuildClick(build)}>
        <Table.Cell>#{build.id}</Table.Cell>
        <Table.Cell>
          <Label color={buildColor(build.status)} basic>{build.status}</Label>
        </Table.Cell>
        <Table.Cell>{build.committer_username}</Table.Cell>
        <Table.Cell>{build.commit_message}</Table.Cell>
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
      <Table selectable basic="very" className="builds">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pipeline</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Committer</Table.HeaderCell>
            <Table.HeaderCell>Commit message</Table.HeaderCell>
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
  dispatch: React.PropTypes.func.isRequired,
  builds: React.PropTypes.array.isRequired,
  repositoryId: React.PropTypes.number.isRequired,
};
