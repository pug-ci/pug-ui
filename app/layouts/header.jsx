import React            from 'react';
import { connect }      from 'react-redux';
import { Link }         from 'react-router';

import SessionActions   from '../actions/sessions';

class Header extends React.Component {
  constructor() {
    super();
    this.renderCurrentUser = this.renderCurrentUser.bind(this);
    this.renderSignOutLink = this.renderSignOutLink.bind(this);
    this.handleSignOutClick = this.handleSignOutClick.bind(this);
  }

  handleSignOutClick(e) {
    e.preventDefault();

    this.props.dispatch(SessionActions.signOut());
  }

  renderSignOutLink() {
    return (
      <button onClick={this.handleSignOutClick}>Sign out</button>
    );
  }

  renderCurrentUser() {
    const { currentUser } = this.props;

    return (
      <a className="current-user">
        {currentUser.name}
      </a>
    );
  }

  render() {
    return (
      <header className="main-header">
        <Link to="/">
          <span className="logo" />
        </Link>
        <nav className="right">
          <ul>
            <li>
              {this.renderCurrentUser()}
            </li>
            <li>
              {this.renderSignOutLink()}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  currentUser: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  header: state.header,
});

export default connect(mapStateToProps)(Header);
