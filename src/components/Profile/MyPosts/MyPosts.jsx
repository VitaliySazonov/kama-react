import React from "react"
import style from './MyPosts.module.css'

const MyPosts = () => {
  return(
    <div>
      My Posts
      <div>New Post</div>
      <div className={style.posts}>
        <div className={style.item}>Post 1</div>
        <div className={style.item}>Post 2</div>
      </div>
    </div>
  )
}

export default MyPosts
