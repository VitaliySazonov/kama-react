import React from "react"
import style from './Posts.module.css'

const Posts = () => {
  return(
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div>New Post</div>
      <div className={`${style.posts}`}>
        <div className={`${style.item} ${style.active}`}>Post 1</div>
        <div className={`${style.item}`}>Post 2</div>
      </div>
    </div>
  )
}

export default Posts
