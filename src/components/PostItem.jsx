import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

    return (
        <div className="PostItem">
            <div className='posts'>
                <div className='title_id'>{props.post.id}</div>
                <div className='title_posts'>{props.post.title}</div>
                <div className='title_text'>{props.post.body}</div>
            </div>
            <MyButton>Создать</MyButton>
        </div>
    )
}

export default PostItem;