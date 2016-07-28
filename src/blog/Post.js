import React, { Component } from 'react'
import { PostMap } from './PostIndex'

export default class Post extends Component {
  state = {}

  render() {
    console.log(this.props.routeParams)
    console.log(PostMap)
    const post = PostMap[this.props.routeParams.id]
    console.log(post)
    return (
      <div>
        <h2>{post.title}</h2>
        <p>Written by: {post.author} on {post.date}</p>
        <div>
          {post.content}
        </div>
      </div>
    );
  }
}
