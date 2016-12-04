import React                      from 'react';
import { connect }                from 'react-redux';
import { Button, Icon, Image }    from 'semantic-ui-react';
import { setDocumentTitle }       from '../../utils';
import Actions                    from '../../actions/sessions';

class SessionsNew extends React.Component {
  constructor() {
    super();
    this.handleLoginWithGithubClick = this.handleLoginWithGithubClick.bind(this);
  }

  componentDidMount() {
    setDocumentTitle('Sign in');
  }

  handleLoginWithGithubClick(e) {
    e.preventDefault();

    const { dispatch } = this.props;

    dispatch(Actions.signInWithGithub());
  }

  render() {
    return (
      <div className="view-container sessions new">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui teal image header">
              <Image src="img/logo.png" size="medium" centered />
            </h2>
            <div className="ui stacked">
              <Button basic size="big" onClick={this.handleLoginWithGithubClick}>
                <Icon name="github" /> Login with github
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SessionsNew.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  state.session
);

export default connect(mapStateToProps)(SessionsNew);
