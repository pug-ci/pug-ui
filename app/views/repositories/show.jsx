import React                from 'react';
import { connect }          from 'react-redux';
import { setDocumentTitle } from '../../utils';
import Actions              from '../../actions/current_repository';

class RepositoriesShow extends React.Component {
  componentDidMount() {
    const { dispatch, params } = this.props;

    setDocumentTitle('Repository');
    dispatch(Actions.fetchRepository(params.id));
  }

  render() {
    const { currentRepository } = this.props;

    return (
      <div className="view-container repositories show">
        <section>
          <header className="view-header">
            <h3>{currentRepository.name}</h3>
          </header>
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
