import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import NewFeedItem from './NewFeedItem';
import './style.scss';
import { useEffect } from 'react';
import { useState } from 'react';

NewFeed.propTypes = {
    userInfo: PropTypes.object
};



function NewFeed(props) {

    const [posts, setPosts] = useState([]);
    const { userInfo } = props;

    useEffect(() => {
        let id;
        if (userInfo) {
            id = userInfo.id;
        }

        // get theo userid
        const url = process.env.REACT_APP_API_URL + `posts/by-userId/${id}`;
        axios.get(url)
            .then(res => {
                console.log('oke');
                const data = res.data.reverse();
                setPosts(data);
            })
    }, []);

    return (
        <div className="newfeeds">
            {
                posts.map((post, index) => {
                    return (
                        <NewFeedItem key={index} post={post} currentUserInfo={userInfo} />
                    )
                })
            }
        </div>
    );
}

export default NewFeed;