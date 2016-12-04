import React                      from 'react';
import { connect }                from 'react-redux';
import { Segment, Header, Icon }  from 'semantic-ui-react';

import { setDocumentTitle } from '../../utils';
import Actions              from '../../actions/current_build';

class BuildsShow extends React.Component {
  componentDidMount() {
    const { dispatch, params } = this.props;

    setDocumentTitle('Build details');
    dispatch(Actions.fetchBuild(...params.id));
  }

  render() {
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
        {this.props.currentBuild.status}
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
