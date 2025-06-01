import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { getPostById } from "../data/posts";

const PostDetailsPage = () => {
    const [currPost, setCurrPost] = useState({});
    const { postId } = useParams();
    // const navigate = useNavigate();
    console.log(postId);
    const { title, content, imgUrl } = currPost;

    useEffect(() => {
        let ignore = false;
        (async () => {
            try {
                const postData = await getPostById(postId);
                if (!ignore) {
                    setCurrPost(postData);
                }
            } catch (error) {
                console.error(error);
            }
        })();

        return () => {
            ignore = true;
        };
    }, [postId]);

    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={imgUrl} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{content}</p>
                </div>
            </div>
        </div>
    );
};

export default PostDetailsPage;
