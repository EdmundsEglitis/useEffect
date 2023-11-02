import { useEffect, useState } from "react";

function Comment(props) {
         const [comments, setComments] = useState({});
         const [loading, setLoading] = useState(true);

        useEffect(()=>{
            async function getComments(){
            const response = await fetch('https://jsonplaceholder.typicode.com/comments/5')
            const data = await response.json();
            setComments(data);
            }
        getComments();
        setLoading(false)
        }, []);

        console.log(Comment.postId);

    return(
        <>
        <p>{Comment.postId}</p>
        <p>{Comment.id}</p>
        <p>{Comment.name}</p>
        <p>{Comment.email}</p>
        <p>{Comment.body}</p>
        </>
    );
}
export default Comment;
