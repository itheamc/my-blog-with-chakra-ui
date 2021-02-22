import React, {useState, useEffect} from 'react'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [err, setErr] = useState(null);
    const url = "";
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setPosts(data);
        })
        .catch(error => {
            setErr(error);
        });
    }, []);
    
    if (err == null) {
        return (
            <div>
                
            </div>
        )
    } else {
        return (
            <div>
                <h1>Something went wrong due to {err}</h1>
            </div>
        )
    }
    
}

export default Posts
