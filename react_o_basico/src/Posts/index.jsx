import React from 'react';
import { PostCard } from '../PostCard'
import './styles.css'
import PropTypes from 'prop-types'

export const Posts = ({ posts }) => (
  <div className="posts" >
    {posts.map(post => (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
      // post={post}
      />
    ))}
  </div>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
    })
  ).isRequired,
}
