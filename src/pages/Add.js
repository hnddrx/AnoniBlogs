import { Link } from 'react-router-dom';
//Components
import AddPost from '../components/AddPost';
//Redux
import { useSelector } from "react-redux";
//Styles
import styled from 'styled-components';
const Nav = styled.nav`
display:flex;
background-color:rgb(51, 51, 60);
justify-content:space-between;
padding:0px 20px;
color:white;
`
const Img = styled.img`
width:25px;
`
const Logo = styled.div`
color:white;
`
const Fyp = () => {  
    const posts = useSelector(state => state.allPosts);
    return (
        <div>  
            <Nav>
                <Link to='/feed'> <Logo>
        <h1>
          <Img src='https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_A_red-512.png' alt='A'/>
          <span>nony</span>
          <Img src='https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_B_red-256.png' alt='B'/>
          <span>logs</span>     
        </h1>
        </Logo></Link>
            </Nav> 
            {
                posts.filter(post => {return post.status === 'Logged'}).map((post,index) => {
                    return (index < 1 && <AddPost 
                    key={post.id}
                    username={post.username}
                    />)
                })
            }
        </div>
    )
}

export default Fyp;