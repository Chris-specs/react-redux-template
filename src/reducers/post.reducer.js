import {
    GET_POST,
    GET_POST_SUCCESS,
    GET_POST_ERROR,
} from '../actions/post.action';

const initialState = {
    post: {},
    loading: false,
    error: false,
};

const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: payload,
                loading: false,
                error: false,
            };
        case GET_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};
export default postReducer