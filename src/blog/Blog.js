import React, { Component } from 'react'
import { PostList } from './PostIndex.js'
import PostBlurb from './PostBlurb.js'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <h1>Blog</h1>
        {PostList.map((post, i) =>
          <PostBlurb key={i} id={post.id} title={post.title}/>
        )}
      </div>
    );
  }
}
