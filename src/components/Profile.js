
//Links to
import { Link } from 'react-router-dom'
//Styles
import styled from 'styled-components';
const Button = styled.button`
border:none;
color:white;
padding:5px 10px;
background-color:#99C4C8;
border-radius:5px;
display:flex;
&:hover{
  background-color:#68A7AD;
}
`
const Img = styled.img`
width:20px;
color:white;
`
const Add = styled.div`
margin-left:5px;
align-self:center;
`
const Profile = () => {
  return (
    <div>
        <Link to='/add'>
          <Button>
            <Img src='https://cdn0.iconfinder.com/data/icons/mockups-1/64/lines_data_posts_mockup_wireframe_website-256.png' alt='Icon'/>
            <Add>
              My Posts
            </Add>
          </Button>
          </Link>
    </div>
  )
}

export default Profile;