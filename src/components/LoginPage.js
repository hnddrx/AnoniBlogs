import React from 'react'
//useState
import { useState } from 'react';
//Navigate
import { useNavigate } from 'react-router';
//Redux
import { useSelector, useDispatch } from 'react-redux';
//import
import styled from 'styled-components';

//styling
const Container = styled.div`
background-color: #F9F9F9;
border-right: 1px solid black;
border-radius:7% 0 0 7%;
padding: 20px 40px 50px 40px;

justify-content: center;
`
const Button = styled.button`
border:none;
background-color:#354259;
width:220px;
height:30px;
color:white;
border-radius:3px;
padding:5px;
&:hover{
    background-color:#2b3649;
}
`
const Input = styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`
const Small = styled.small`
color:red;
font-size: 14px;
`
const LoginPage = () => {

const posts = useSelector(state => state.allPosts);
const dispatch = useDispatch();
const navigate =useNavigate();
//State
const [postUserName, setPostUserName] = useState('');
const [postPassword, setPostPassword] = useState('');
//Alert Messages
const [ hasError, setHasError ] = useState( false );
const [ errorMessage, setErrorMessage ] = useState('');
//Hide Alert
const hideAlert = (timeOut) => {
    setTimeout(() => {
      setErrorMessage("");

    }, timeOut);
  };
  const navigatePage = (timeOut) => {
    setTimeout(() => {
        navigate('/feed');

    }, timeOut);
  };
const onLoginHandler = (event) => {
    event.preventDefault();
    if( posts.some( post => post.username.trim().toLowerCase() === postUserName.trim().toLowerCase() &&  post.password.trim().toLowerCase() === postPassword.trim().toLowerCase()  )){
       dispatch( { type:'LOGGED', payload:{username: postUserName.trim().toLowerCase()}});
       navigatePage(1500);
       
    }
    else{
        // This is valid INPUT
        //addNewTaskFunctionProps( taskName ); // Triggering the props, running addNewTaskFunction in App.js
        setHasError( true );
        setErrorMessage(`Username and Password is not valid`);
        setPostUserName('');  
        setPostPassword('');  
        hideAlert(2000);
        // Clear the content of the input
}
}
  return (
    <Container>
        <h2>Login</h2>
        <form onSubmit={ onLoginHandler } >
                <label htmlFor="price">Username</label>
                <br/>
                <Input  
                    type='text'
                    min ='0'
                    name='username'
                    value={ postUserName }
                    onChange={ e => setPostUserName(e.target.value) } 
                />
                    <br/>
                <label htmlFor="image">Password</label>
                <br/>
                <Input  
                    type='password'
                    name='password'
                    value={ postPassword }
                    onChange={ e => setPostPassword(e.target.value) } 
                />
                <br/>
                {/* Conditional rendering for error */}
                { hasError && <Small className='error'>{ errorMessage }</Small> }
                <br/>
                <Button
                    type='submit'    
                >
                    Login
                </Button>
            </form>
    </Container>
    )
}

export default LoginPage;