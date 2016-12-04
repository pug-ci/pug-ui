import React                from 'react';
import { connect }          from 'react-redux';
import { setDocumentTitle } from '../../utils';
import RepositoryCard       from '../../components/repositories/card';
import Actions              from '../../actions/repositories';

class RepositoriesIndex extends React.Component {
  constructor() {
    super();
    this.renderRepositories = this.renderRepositories.bind(this);
    this.renderConnectedRepositories = this.renderConnectedRepositories.bind(this);
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

  renderConnectedRepositories() {
    const { connectedRepositories } = this.props;

    if (connectedRepositories.length === 0) return false;

    return (
      <section>
        <header className="view-header">
          <h3>Connected repositories</h3>
        </header>
        <div className="repositories-wrapper">
          {this.renderRepositories(connectedRepositories)}
        </div>
      </section>
    );
  }

  render() {
    return (
      <div className="view-container repositories index">
        {this.renderConnectedRepositories()}
      </div>
    );
  }
}

RepositoriesIndex.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  connectedRepositories: React.PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  connectedRepositories: state.repositories.connectedRepositories,
});

export default connect(mapStateToProps)(RepositoriesIndex);
