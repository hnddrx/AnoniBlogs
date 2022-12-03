import { useDispatch } from 'react-redux';
import Comments from './Comments';
//Styles
import styled from 'styled-components';
const FeedContainer = styled.div`
border:1px solid rgb(51, 51, 60);
background-color: rgb(51, 51, 60);
margin:20px auto;
color:#E9E4D4;
border-radius:10px;
width:70%;
`;
const Contents = styled.div`
margin:20px 50px 40px 50px;
text-align: justify;

`
const Separator = styled.div`
display: flex;
justify-content: space-between;
`
const Button = styled.button`
height:30px;
border:none;
background-color:transparent;
margin:auto 10px;
`
const Img = styled.img`
width:25px;
`
const H3 = styled.h3`
font-size:25px;
cursor:pointer;
text-transform:uppercase;
`
const H5 = styled.h5`
font-size:15px;
cursor:pointer;
text-transform:uppercase;
`
const Feed = ({id, username, title, body, status,timeCreated, dateCreated}) => {
    const dispatch = useDispatch();

  return (
    <>
         
        <FeedContainer>
            <Contents>
                <Separator>
                <H3>
                    {username}
                </H3>
                {
                    status === 'Logged' &&
                    <Button onClick={ () => dispatch( { type:'DELETE_POST', payload:{ body: body} } ) } >
                        <Img src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627249-delete3-256.png" alt="Trash can image"/>
                    </Button>
                }
                </Separator>
                <small>
                    <i>
                    {dateCreated} {timeCreated} 
                    </i>
                </small>
                <h4>
                    {title}
                </h4> 
                <p>
                    {body}
                </p>  
                <hr/>
                <H5>Comments</H5>
                <Comments 
                postId = {id}
                username = {username}
                />
            </Contents>     
    </FeedContainer>
    </>
    )
}

export default Feed;