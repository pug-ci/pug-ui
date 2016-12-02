import React                from 'react';
import { connect }          from 'react-redux';
// import  { Link }             from 'react-router';
import { setDocumentTitle } from '../../utils';
import Actions              from '../../actions/sessions';

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
        <main>
          <button onClick={this.handleLoginWithGithubClick}>Login with github</button>
        </main>
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
