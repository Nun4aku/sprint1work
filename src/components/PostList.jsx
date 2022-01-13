import React from "react";
import PostItem from './PostItem';

const PostList = ( {posts, PostListTitle} ) => {

    return (
        <div>
            <h1>{PostListTitle}</h1>
            <div>
                {posts.map(post =>
                <PostItem post={post} key={post.id}/>
                )}
            </div>
        </div>
    )
}

export default PostList;