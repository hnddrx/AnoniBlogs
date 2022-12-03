
import { useState } from 'react';
//redux
import { useSelector, useDispatch} from 'react-redux'
//Components
import Comment from './Comment';
//styles
import styled from 'styled-components';

const Textarea = styled.textarea`
resize: none;
width: 100%;
border: none;
font-size: 16px;
`
const Button = styled.button`
background-color:transparent;
border:none;
`
const Img = styled.img`
width: 30px
`
const Container = styled.div`
display: flex;
`

const Comments = ({postId, username}) => {

const comment = useSelector(state => state.comments);
const dispatch = useDispatch();

const [commentBody, setCommentBody] = useState('');
const onSubmitHandler = ( event ) => {
    event.preventDefault();  
    if( commentBody.trim() === '' ){
      setCommentBody('');
    }
    else{
        dispatch({type: 'ADD_COMMENT', payload:{ username: username, postId: postId ,body: commentBody.trim()}}) // pass name into the reducer
        setCommentBody('');
    }
  }
  const myComments = comment.filter(com => {return postId === com.postId }).map(com => {   
    return (
      <>
   
    <Comment 
    key={com.id}
    body={com.body}
    />
    </>
    )
  });
  return (
    <div>
      
        {
          myComments
        }
        
      <form onSubmit={ onSubmitHandler } >
            {/* <label>Task Name</label> */}
        <Container>
          <input type="hidden" value={username} readOnly />
          <Textarea 
          type="text"
          value={ commentBody }
          placeholder='Comment...'
          onChange={ e => setCommentBody(e.target.value) } 
          />
          <Button type="submit">
            <Img src="https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-59-256.png" alt="send"/>
          </Button>         
        </Container>
      </form>
    </div>
  )
}

export default Comments;