//useState
import { useState } from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux';
//components
import Feed from '../components/Feed';
//styles
import styled from 'styled-components';
const Container = styled.div`
border:1px solid rgb(51, 51, 60);
background-color: rgb(51, 51, 60);
margin:20px auto;
color:#E9E4D4;
border-radius:10px;
width:70%;
`
const InputContainer = styled.div`
margin:20px 40px;
font-size:23px;
`
const InputTitle = styled.input`
border:none;
background-color:transparent;
color:white;
font-style:italic;
font-size:17px;
margin-bottom:10px;
`
const Textarea = styled.textarea`
resize:none;
width:100%;
height:90px;
`

const Small = styled.small`
color:red;
`
const Button = styled.button`
border:none;
color:black;
padding:5px 10px;
background-color:#99C4C8;
border-radius:5px;
display:flex;
&:hover{
    color:white;
  background-color:#68A7AD;
}
`
const AddPost = ({username}) => {
    const posts = useSelector(state => state.allPosts);
    const dispatch = useDispatch();

    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    //Alert Messages
    const [ hasError, setHasError ] = useState( false );
    const [ errorMessage, setErrorMessage ] = useState('');
    //Hide Alert
    const hideAlert = (timeOut) => {
        setTimeout(() => {
          setErrorMessage("");
    
        }, timeOut);
      };
    //Submit handlers
    const onSubmitHandler = ( event ) => {
        event.preventDefault();
        if( postBody.trim() === '' ){
            // This means that the input is EMPTY
            // Need to show the error message
            setHasError( true );
            setErrorMessage('Body cannot be empty!');
            hideAlert(2000);
        }
        else{
            // This is valid INPUT
            //addNewTaskFunctionProps( taskName ); // Triggering the props, running addNewTaskFunction in App.js
            dispatch({type: 'ADD_POST', payload:{id:posts.length + 1 ,username: username, title: postTitle, body: postBody, status: 'Logged'}}) // pass name into the reducer
            setHasError( false );   // Remove the error message
            setPostTitle('');  
            setPostBody('') ;   // Clear the content of the input
        }
    }
    //filter post by username 
    const myPosts =   posts.filter(post => {return post.username === username && post.body !== '' }).map((post) => {
        return(<Feed 
        key={post.id}
        id={post.id}
        timeCreated = {post.timeCreated}
        dateCreated = {post.dateCreated}
        status={post.status}
        username={post.username}
        title={post.title}
        body={post.body}
        />)
    }).reverse();

    return (
    <>
        <div>   
            <Container>
                <form onSubmit={ onSubmitHandler } >
                    {/* <label>Task Name</label> */}
                    <InputContainer>                      
                        {username.toUpperCase()} 
                        <br/>
                        <InputTitle 
                            type="text"
                            value={ postTitle }
                            placeholder='Title'
                            onChange={ e => setPostTitle(e.target.value) } 
                        />
                        <br/>
                        <Textarea 
                            type="text"
                            value={ postBody }
                            placeholder='Write Something...'
                            onChange={ e => setPostBody(e.target.value) } 
                        />
                        <br/>
                        {/* Conditional rendering for error */}
                        { hasError && <Small className='error'>{ errorMessage }</Small> }
                        <br/>
                        <Button type="submit">
                            Add
                        </Button>
                    </InputContainer>
                </form>
            </Container>
            {
                myPosts
            }
        </div>
    </>
)
}
export default AddPost;