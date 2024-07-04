import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    currentUser: null
}
/*Prefixing Action Types: The name field is used as a prefix for the generated action types. 
This helps to namespace your actions and avoid name collisions between actions from different 
slices. For example, if you have a slice named counter, the generated action types might look 
like counter/increment and counter/decrement.

Action Creators: The name field is used in the automatically generated action creators. 
The name is prepended to the action type, ensuring that each action creator is uniquely 
identifiable.
*/
const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action) => {
                state.currentUser = action.payload
        }
    }
})
export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;