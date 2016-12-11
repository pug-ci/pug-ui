import React                                  from 'react';
import { Segment, Label }                     from 'semantic-ui-react';
import JSONPretty                             from 'react-json-pretty';

export default class BuildConfig extends React.Component {
  render() {
    const { currentBuild } = this.props;
    if (!currentBuild.config) return false;

    return (
      <Segment inverted>
        <Label attached="top right">Build config</Label>
        <JSONPretty id="json-pretty" json={JSON.parse(currentBuild.config)} />
      </Segment>
    );
  }
}

BuildConfig.propTypes = {
  currentBuild: React.PropTypes.object.isRequired,
};
