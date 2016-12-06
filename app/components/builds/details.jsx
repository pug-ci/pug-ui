import React                                  from 'react';
import { Segment, Image, Table, Grid, Label } from 'semantic-ui-react';
import { buildColor }                         from '../../utils';

export default class BuildDetails extends React.Component {
  constructor() {
    super();
    this.renderDetails = this.renderDetails.bind(this);
  }

  renderLoader() {
    if (this.props.currentBuild.status !== 'running') return false;

    return (
      <Image src="/img/mops.gif" size="medium" />
    );
  }

  renderDetails() {
    const { currentBuild } = this.props;

    return (
      <Table basic="very" celled collapsing>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Pipeline</Table.Cell>
            <Table.Cell>#{currentBuild.id}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Status</Table.Cell>
            <Table.Cell>
              <Label color={buildColor(currentBuild.status)} basic>{currentBuild.status}</Label>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Committer</Table.Cell>
            <Table.Cell>{currentBuild.committer_username}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Message</Table.Cell>
            <Table.Cell>{currentBuild.commit_message}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Commit</Table.Cell>
            <Table.Cell>
              <a href={currentBuild.commit_url}>{currentBuild.commit_id}</a>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Created at</Table.Cell>
            <Table.Cell>{currentBuild.created_at}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }

  render() {
    return (
      <Segment textAlign="left" color={buildColor(this.props.currentBuild.status)}>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              {this.renderDetails()}
            </Grid.Column>
            <Grid.Column>
              {this.renderLoader()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

BuildDetails.propTypes = {
  currentBuild: React.PropTypes.object.isRequired,
};
