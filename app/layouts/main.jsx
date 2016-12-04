import React from 'react';

export default function MainLayout(props) {
  return (
    <span>
      {props.children}
    </span>
  );
}

MainLayout.propTypes = {
  children: React.PropTypes.node.isRequired,
};
