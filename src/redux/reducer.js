import allPosts from '../data/allPosts.json';
import comments  from '../data/comments.json';

const initialState = {
    allPosts, 
    comments
};  

const reducer = (state = initialState , action) => {
    switch(action.type){
        case 'ADD_POST':
            const date = new Date();
            const currentDate = date.toDateString();
            const currentTime = date.toLocaleTimeString();
            let newPost = { 
                id: action.payload.id, 
                username: action.payload.username, 
                title:action.payload.title, 
                body: action.payload.body, 
                timeCreated: currentTime,
                dateCreated: currentDate,
                status:action.payload.status }
            return{...state, allPosts: [...state.allPosts, newPost]};
        case 'DELETE_POST':
            return{
                ...state, allPosts: state.allPosts.filter(post => post.body !== action.payload.body) 
            };
        case 'LOGGED':
            let currentStatus = state.allPosts;
        for( let index = 0; index < currentStatus.length; index++ ){
            if(currentStatus[index].username === action.payload.username){
                currentStatus[index].status = 'Logged';
            }
        }
        return{...state, allPosts: [...currentStatus]};
        case 'ADD_ACC':
            let newAcc = { username: action.payload.username, password:action.payload.password, body:'' }
            return{...state, allPosts: [...state.allPosts, newAcc]};
        case 'ADD_COMMENT':
            let newComment = {username:action.payload.username, postId: action.payload.postId,  body: action.payload.body }
            return{...state, comments: [...state.comments, newComment]};
        case 'DELETE_COMMENT':
            return  { ...state, comments: state.comments.filter(com =>  com.body !== action.payload.body) }
        default:
            return state;
    }
}
export default reducer;