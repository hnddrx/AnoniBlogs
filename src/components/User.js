
//Components
import Users from './Users';
//Redux
import { useSelector } from "react-redux";

const User = () => {  
    const posts = useSelector(state => state.allPosts);
    return (
        <div>  
            {
                posts.filter(post => {return post.status === 'Logged'}).map((post,index) => {
                    return (index < 1 && <Users 
                    key={post.id}
                    username={post.username.replace(post.username.substring(1,12), '***')}
                    />)
                })
            }
        </div>
    )
}

export default User;