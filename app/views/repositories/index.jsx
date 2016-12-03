import React                from 'react';
import { connect }          from 'react-redux';
import { setDocumentTitle } from '../../utils';
import RepositoryCard       from '../../components/repositories/card';
import Actions              from '../../actions/repositories';

class RepositoriesIndex extends React.Component {
  constructor() {
    super();
    this.renderRepositories = this.renderRepositories.bind(this);
    this.renderIntegratedRepositories = this.renderIntegratedRepositories.bind(this);
  }

  componentDidMount() {
    setDocumentTitle('Repositories');
    this.props.dispatch(Actions.fetchRepositories());
  }

  renderRepositories(repositories) {
    return repositories.map(repository =>
      <RepositoryCard key={repository.id} dispatch={this.props.dispatch} {...repository} />,
    );
  }

  renderIntegratedRepositories() {
    const { integratedRepositories } = this.props;

    if (integratedRepositories.length === 0) return false;

    return (
      <section>
        <header className="view-header">
          <h3>Integrated repositories</h3>
        </header>
        <div className="repositories-wrapper">
          {this.renderRepositories(integratedRepositories)}
        </div>
      </section>
    );
  }

  render() {
    return (
      <div className="view-container repositories index">
        {this.renderIntegratedRepositories()}
      </div>
    );
  }
}

RepositoriesIndex.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  integratedRepositories: React.PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  integratedRepositories: state.repositories.integratedRepositories,
});

export default connect(mapStateToProps)(RepositoriesIndex);
