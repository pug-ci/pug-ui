import React    from 'react';
import { push } from 'react-router-redux';

export default class RepositoryCard extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(push(`/repositories/${this.props.id}`));
  }

  render() {
    return (
      <div id={this.props.id} className="repository" onClick={this.handleClick}>
        <div className="inner">
          <h4>{this.props.name}</h4>
        </div>
      </div>
    );
  }
}

RepositoryCard.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
};
