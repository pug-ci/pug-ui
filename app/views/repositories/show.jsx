import React                      from 'react';
import { connect }                from 'react-redux';
import { Segment, Header, Icon }  from 'semantic-ui-react';

import { setDocumentTitle } from '../../utils';
import Actions              from '../../actions/current_repository';
import BuildsTable          from '../../components/builds/table';

class RepositoriesShow extends React.Component {
  constructor() {
    super();
    this.renderAllBuilds = this.renderAllBuilds.bind(this);
  }

  componentDidMount() {
    const { dispatch, params } = this.props;

    setDocumentTitle('Repository');
    dispatch(Actions.fetchRepository(params.id));
    dispatch(Actions.fetchBuilds(params.id));
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, params } = this.props;
    const nextId = nextProps.params.id;

    if (nextId !== params.id) {
      dispatch(Actions.fetchRepository(nextId));
      dispatch(Actions.fetchBuilds(nextId));
    }
  }

  renderAllBuilds() {
    const { builds } = this.props.currentRepository;

    if (builds.length === 0) {
      return (
        <h2>No builds yet.</h2>
      );
    }

    return (
      <BuildsTable dispatch={this.props.dispatch} repositoryId={this.props.currentRepository.id} builds={builds} />
    );
  }

  render() {
    const { currentRepository } = this.props;

    return (
      <Segment basic className="view-container repositories show">
        <Header as="h2">
          <Icon name="cubes" />
          <Header.Content>
            {currentRepository.owner}/{currentRepository.name}
            <Header.Subheader>
              Builds
            </Header.Subheader>
          </Header.Content>
        </Header>
        {this.renderAllBuilds()}
      </Segment>
    );
  }
}

RepositoriesShow.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  params: React.PropTypes.object.isRequired,
  currentRepository: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  currentRepository: state.currentRepository,
});

export default connect(mapStateToProps)(RepositoriesShow);
