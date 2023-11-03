import { useEffect, useState,  } from "react";

function Comment() {
         const [comments, setComments] = useState({});
         const [loading, setLoading] = useState(true);

        useEffect(()=>{
            async function getComments(){
            const response = await fetch('https://jsonplaceholder.typicode.com/comments/5')
            const data = await response.json();
            setComments(data);
            setLoading(false);
            };
        getComments();
        }, []);
        function returns(){
            if (loading == false){
                return <>
                    <p>{comments.postId}</p>
                    <p>{comments.id}</p>
                    <p>{comments.name}</p>
                    <p>{comments.email}</p>
                    <p>{comments.body}</p>
                    </>
            }
            else {
                return <p> loading</p>
            }
        }


    return(
        <>
            {returns()}
        </>
    );
}
export default Comment;
