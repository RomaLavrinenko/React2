import PostItem from './PostItem'
import { useEffect, useState } from "react";

const PostComponent = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers();
    }, [])

  

    const getUsers = async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts')
            let data = await response.json()
            setUsers(data)
        } catch { }
    }

    const handleClick = (user) => {
        alert(user.body);
    };

    return (
        <>
            {users?.map(user => <PostItem key={user.id} user={user} handleClick = {handleClick} />)}
        </>
    );
};

export default PostComponent;