
//redux
import { useSelector } from "react-redux";
//Components and Pages
import Feed from '../components/Feed';
import LogOut from '../components/LogOut';
import Profile from '../components/Profile';
//Styles
import styled from 'styled-components';

const Nav = styled.nav`
display:flex;
background-color:rgb(51, 51, 60);
justify-content:space-between;
padding:0px 20px;
`
const PostContainer = styled.div`
padding:30px;
`
const Logo = styled.div`
color:white;
cursor:pointer;
`
const ButtonContainer = styled.div`
display:flex;
align-self:center;
margin:10px;
`
const Img = styled.img`
width:25px;
`

const Fyp = () => {
const posts = useSelector(state => state.allPosts);
//Filter posts 
const myPosts = posts.filter(post =>{ 
 return post.body !== ''
}).map(post => {
  return <Feed 
  key={post.id}
  id={post.id}
  timeCreated = {post.timeCreated}
  dateCreated = {post.dateCreated}
  status={post.status}
  username={post.username.replace(post.username.substring(1,12), '***')}
  title={post.title}
  body={post.body}
  />
}).reverse();
console.log(posts);
  return (
    <>   
      <Nav>
        <Logo>
          <h1>
            <Img src="https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_A_red-512.png" alt="A"/>
            <span>nony</span>
            <Img src="https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_B_red-256.png" alt="B"/>
            <span>logs</span>
          </h1>
        </Logo>
    
        <ButtonContainer>
          {/* Add post */}
          <Profile />
          {/* Logout */}
          <LogOut />
        </ButtonContainer>
      </Nav>
      <PostContainer>
        {
          myPosts
        }
      </PostContainer>
    </>
  )
}

export default Fyp;