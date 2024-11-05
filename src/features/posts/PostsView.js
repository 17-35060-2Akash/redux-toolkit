import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostsView = () => {
    const { isLoading, posts, error } = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <div>
            <h2>Posts View</h2>
            {
                isLoading && <h3>Loading . . .</h3>
            }
            {
                error && <h3>{error}</h3>
            }
            {
                posts && posts?.map((post, idx) => <article key={idx}>
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                </article>)
            }
        </div>
    );
};

export default PostsView;