import styles from './styles.styl';

import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class SinglePost extends React.Component {
  static propTypes = {
    post: PropTypes.object
  }

  render() {
    const { post } = this.props;

    if (!post) return null;

    const { title, content, userId } = post;

    return (
      <div styleName="wrapper">
        <div styleName="title">{title}</div>
        <img src={post.featured_image.src} />
        <p dangerouslySetInnerHTML={{__html: content}}></p>
        <small>written by {post.authors[0].name}</small>
      </div>
    );
  }
}
