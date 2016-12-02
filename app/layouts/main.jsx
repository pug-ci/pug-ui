import React from 'react';

export default function MainLayout(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

MainLayout.propTypes = {
  children: React.PropTypes.node.isRequired,
};
