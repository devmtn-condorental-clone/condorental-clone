// import gardenImg from '../style/images/garden_secret_avatar.jpg'
// import ortensiaImg from '../style/images/ortensia_love_avatar.jpg'
// import preciousImg from '../style/images/precious_moments_avatar.jpg'
// import jasminImg from '../style/images/jasmin_lush_avatar.jpg'
// import lavendarImg from '../style/images/lavendar_touch_avatar.jpg'
// import infinityImg from '../style/images/touch_of_infinity_avatar.jpg'
import axios from 'axios'

const initialState = {
    user: {},
    condos: [],
    condosModalOpen: false
}

const GET_USER_INFO = "GET_USER_INFO"
const GET_CONDOS = "GET_CONDOS"
const OPEN_CONDO_MODAL = 'OPEN_CONDO_MODAL'

export function getUser(){
    let userData = axios.get('/auth/me').then( res => {
        return res.data;
    })
    return{
        type: GET_USER_INFO,
        payload: userData
    }
}

export function getCondos(){
    let condos = axios.get('/api/condos').then( res => {
        return res.data;
    })
    return{
        type: GET_CONDOS,
        payload: condos
    }
}

export function toggleCondoModal(bool){
    console.log('reducer hit', bool)
    return{
        type: OPEN_CONDO_MODAL,
        payload: !bool
    }
}

export default function(state = initialState, action){
    console.log('reducer been hit yo', action)
    switch(action.type){
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign( {}, state, {user: action.payload})
        case GET_CONDOS + '_FULFILLED':
            return Object.assign( {}, state, {condos: [...action.payload]})
        case OPEN_CONDO_MODAL:
            return { ...state, condosModalOpen: action.payload }
        default:
            return state
    }
}