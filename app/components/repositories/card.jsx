import React from 'react';

export default class RepositoryCard extends React.Component {
  render() {
    return (
      <div id={this.props.id} className="repository">
        <div className="inner">
          <h4>{this.props.name}</h4>
        </div>
      </div>
    );
  }
}

RepositoryCard.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
};
