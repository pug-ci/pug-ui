import React                      from 'react';
import { connect }                from 'react-redux';
import { Segment, Header, Icon }  from 'semantic-ui-react';

import { setDocumentTitle } from '../../utils';
import Actions              from '../../actions/current_build';
import BuildDetails         from '../../components/builds/details';

class BuildsShow extends React.Component {
  componentDidMount() {
    const { dispatch, params } = this.props;

    setDocumentTitle('Build details');
    dispatch(Actions.fetchBuild(...params.id));
  }

  render() {
    const { currentBuild } = this.props;

    return (
      <Segment basic className="view-container builds show">
        <Header as="h2">
          <Icon name="cube" />
          <Header.Content>
            Build
            <Header.Subheader>
              Details
            </Header.Subheader>
          </Header.Content>
        </Header>
        <BuildDetails currentBuild={currentBuild} />
      </Segment>
    );
  }
}

BuildsShow.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  params: React.PropTypes.object.isRequired,
  currentBuild: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  currentBuild: state.currentBuild,
});

export default connect(mapStateToProps)(BuildsShow);
