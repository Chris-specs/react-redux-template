import { apiInstance } from '../api/instances'

export const GET_POST = 'GET_POST'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_ERROR = 'GET_POST_ERROR'

/**
 * GET POST
 */
export const getPostAction = () => {
    return async (dispatch) => {
        dispatch(getPost())
        try {
            const response = await apiInstance.get('/posts/1')
            dispatch(getPostSuccess(response.data))
        } catch (error) {
            dispatch(getPostError(true))
        }
    }
}

const getPost = () => ({
    type: GET_POST
})

const getPostSuccess = (payload) => ({
    type: GET_POST_SUCCESS,
    payload: payload
})

const getPostError = (payload) => ({
    type: GET_POST_ERROR,
    payload: payload
})
