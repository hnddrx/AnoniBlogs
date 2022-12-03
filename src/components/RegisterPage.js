import React from 'react'
//State
import { useState } from 'react';
//Redux
import { useSelector, useDispatch } from 'react-redux';
//Styles
import styled from 'styled-components';

//styling
const Container = styled.div`
background-color: #F9F9F9;
width: 200px;
border-radius:0 7% 7% 0;
padding: 20px 60px 30px 50px;
justify-content: center;
`
const Button = styled.button`
border:none;
background-color:#6D8B74;
color:white;
width:220px;
height:30px;
border-radius:3px;
padding:5px;
&:hover{
    background-color:#506d57;
}
`
const Small = styled.small`
color:red;
`
const Success = styled.small`
color:green;
`
const Input = styled.input`
width: 110%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`
const RegisterPage = () => {
const posts = useSelector(state => state.allPosts);
 const dispatch = useDispatch();
const [postUserName, setPostUserName] = useState('');
const [postPassword, setPostPassword] = useState('');
//Alert Messages
//error
const [ hasError, setHasError ] = useState( false );
const [ errorMessage, setErrorMessage ] = useState('');
//Existing
const [ exist, setExist ] = useState( false );
const [ existMessage, setExistMessage ] = useState('');
//Success
const [ success, setSuccess ] = useState( false );
const [ successMessage, setSuccessMessage ] = useState('');

//hide alert
const hideAlert = (timeOut) => {
    setTimeout(() => {
      setErrorMessage('');
      setExistMessage('');
      setSuccessMessage('');
    }, timeOut);
  };

const onRegisterHandler = (event) => {
    event.preventDefault();
    if( postUserName.trim() === '' || postPassword.trim() === ''){
       setHasError( true );
       setErrorMessage(`Username and Password is invalid`);
       hideAlert(2000);
    }
    else if( posts.some( post => post.username.trim().toLowerCase() === postUserName.toLowerCase() ||  post.password.toLowerCase() === postPassword.toLowerCase()  )){
        setExist( true );
        setExistMessage(`Username or Password already exists`);
        hideAlert(2000);
     }
    else{
        // This is valid INPUT
        //addNewTaskFunctionProps( taskName ); // Triggering the props, running addNewTaskFunction in App.js
        dispatch({type: 'ADD_ACC', payload:{username: postUserName.trim().toLowerCase(), password: postPassword.trim().toLowerCase(), body: ''}})
        setSuccess( true );
        setSuccessMessage(`Account Added Successfully`);
        hideAlert(2000);
        setPostUserName('');  
        setPostPassword('');  
        // Clear the content of the input
}
}
  return (
    <Container>
        <h2>Create Account</h2>
         <form onSubmit={ onRegisterHandler } >
                <label htmlFor="price">Username</label>
                <br/>
                <Input  
                    type='text'
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
                    { exist && <Small className='error'>{ existMessage }</Small> }
                    { success && <Success className='error'>{ successMessage }</Success> }
                    
                <br/>
                <Button type='submit'>
                    Create Account
                </Button>
            </form>
    </Container>
  )
}

export default RegisterPage;