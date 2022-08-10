// reducer is a fuction that have two statement state and action we use in it the switch/case method cuz it's better than if/else 

// more documtation needed 
// state = [] because stories is an arr
const storyReducer = (state = [], action) =>{
    switch (action.type) {
        case 'FETCH_ALL_STORIES':
        case 'CREATE_STORY':
            return state
        default:
            return state
    }
}

export default storyReducer