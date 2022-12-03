
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Button = styled.button`
border:none;
color:red;
padding:5px 10px;
background-color:transparent;
border-radius:5px;

display:flex;
&:hover{
  color:pink;
}
`
const Img = styled.img`
width:20px;
color:white;
`
const Out = styled.div`
align-self:center;
font-size:18px;
`

const LogOut = () => {
    const navigate = useNavigate();
    const onLogOutHandler = () => {  
      navigate('/');
      window.location.reload(false);
    }
  return (
    <form onSubmit={ onLogOutHandler } >
    <Button type='submit' >
        <Img src='https://cdn1.iconfinder.com/data/icons/security-pack-miano-io/24/door-1sign-in-256.png' alt='Icon' />
        <Out>Logout</Out>
    </Button>
</form>
  )
}

export default LogOut;