import React                from 'react';
import { connect }          from 'react-redux';
import { setDocumentTitle } from '../../utils';
import Actions              from '../../actions/current_repository';

class RepositoriesShow extends React.Component {
  constructor() {
    super();
    this.renderAllBuilds = this.renderAllBuilds.bind(this);
    this.renderBuilds = this.renderBuilds.bind(this);
  }

  componentDidMount() {
    const { dispatch, params } = this.props;

    setDocumentTitle('Repository');
    dispatch(Actions.fetchRepository(params.id));
    dispatch(Actions.fetchBuilds(params.id));
  }

  renderBuilds(builds) {
    return builds.map(build =>
      <li key={build.id}>{build.status}</li>,
    );
  }

  renderAllBuilds() {
    const { builds } = this.props.currentRepository;

    if (builds.length === 0) return false;

    return (
      <div className="builds-wrapper">
        {this.renderBuilds(builds)}
      </div>
    );
  }

  render() {
    const { currentRepository } = this.props;

    return (
      <div className="view-container repositories show">
        <section>
          <header className="view-header">
            <h3>{currentRepository.name}</h3>
          </header>
          {this.renderAllBuilds()}
        </section>
      </div>
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
