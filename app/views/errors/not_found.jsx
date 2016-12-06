import React                      from 'react';
import { Image }                  from 'semantic-ui-react';
import { setDocumentTitle }       from '../../utils';

export default class NotFound extends React.Component {
  componentDidMount() {
    setDocumentTitle('Not found');
  }

  render() {
    return (
      <div className="view-container not-found">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui teal image header">
              <Image src="/img/not_found.jpg" size="large" centered />
            </h2>
            <h1>Page you are looking for does not exist.</h1>
          </div>
        </div>
      </div>
    );
  }
}
