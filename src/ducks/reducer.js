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
    condosModalOpen: false,
    infoModalOpen: false,
    headerModalOpen:false,
    condoImg: '',
    condoSelected: {},
    adultGuests: 1,
    childGuests: 0,
    infantGuests: 0,
    totalGuests:1,
    arrivalDate: Date.now(),
    departureDate: Date.now() + 604800000,
    waiting: false,
    language: 'Foreign',
    yOffset: window.pageYOffset
}

const GET_USER_INFO = "GET_USER_INFO"
const GET_CONDOS = "GET_CONDOS"
const OPEN_CONDO_MODAL = 'OPEN_CONDO_MODAL'
const SEND_CONDO_CHANGES = 'SEND_CONDO_CHANGES'
const DELETE_CONDO = 'DELETE_CONDO'
const CREATE_CONDO = 'CREATE_CONDO'
const SELECT_CONDO = 'SELECT_CONDO'
const SAVE_PHOTO = 'SAVE_PHOTO'
const TRANSLATE = 'TRANSLATE'
const UPDATE_Y_OFFSET = 'UPDATE_Y_OFFSET'
const OPEN_INFO_MODAL = 'OPEN_INFO_MODAL'
const CLOSE_INFO_MODAL = 'CLOSE_INFO_MODAL'
const OPEN_HEADER_MODAL = 'OPEN_HEADER_MODAL'
const CLOSE_HEADER_MODAL = 'CLOSE_HEADER_MODAL'
const UPDATE_OCC_COUNT = 'UPDATE_OCC_COUNT'



export function getUser(){
    let userData = axios.get('/auth/me').then( res => {
        return res.data;
    })
    return{
        type: GET_USER_INFO,
        payload: userData
    }
}

export function closeHeaderModal(){
    console.log('WHAT IS HAPPENING')
    return{
        type:CLOSE_HEADER_MODAL,
        payload: false
    }
}

export function openHeaderModal(){
    return{
        type:OPEN_HEADER_MODAL,
        payload: true
    }
}
export function openInfoModal(value){
   return{
       type:OPEN_INFO_MODAL,
       payload: value

   }
}
export function closeInfoModal(value){
    return{
        type:CLOSE_INFO_MODAL,
        payload: value
    }
}

export function translate(curr){
    let translation = curr === 'Foreign' ? 'American' : 'Foreign'
    return{
        type: TRANSLATE,
        payload: translation
    }
}

export function updateYOffset(val){
    return{
        type: UPDATE_Y_OFFSET,
        payload: val
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

export function sendCondoChanges(id, name, price, currency, img){
    let condos = axios.put(`/api/condos/${id}`, { name, price, currency, img }).then(res => {
        return res.data
    })
    return{
        type: CREATE_CONDO,
        payload: condos
    }
}

export function savePhoto(obj){
    let photo = axios.post('/api/condos/addPhoto', { photo: obj }).then(res => {
        return res.data
    })
    return{
        type: SAVE_PHOTO,
        payload: photo
    }
}

export function createCondo(name, price, currency, img){
    let condos = axios.post('/api/condos', { name, price, currency, img }).then(res => {
        return res.data
    })
    return{
        type: CREATE_CONDO,
        payload: condos
    }
}

export function deleteCondo(id){
    let condos = axios.delete(`/api/condos/${id}`).then(res => {
        return res.data
    })
    return{
        type: DELETE_CONDO,
        payload: condos
    }
}

export function selectCondo(name, id){
    return{
        type: SELECT_CONDO,
        payload: {name, id}
    }
}

export function handleOccUpdate(adultGuests, childGuests, infantGuests, totalGuests){

    return{
        type:UPDATE_OCC_COUNT,
        payload: {adultGuests, childGuests, infantGuests, totalGuests}
    }
}

export default function(state = initialState, action){
    // console.log('reducer been hit yo', action)
    switch(action.type){
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign( {}, state, {user: action.payload})
        case TRANSLATE:
            return { ...state, language: action.payload }
        case UPDATE_Y_OFFSET:
            return { ...state, yOffset: action.payload }
        case GET_CONDOS + '_FULFILLED':
            return Object.assign( {}, state, {condos: [...action.payload]})
        case OPEN_CONDO_MODAL:
            return { ...state, condosModalOpen: action.payload }
        case SEND_CONDO_CHANGES + '_FULFILLED':
            return { ...state, condos: action.payload }
        case CREATE_CONDO + '_FULFILLED':
            return { ...state, condos: action.payload }
        case DELETE_CONDO + '_FULFILLED':
            return { ...state, condos: action.payload }
        case SELECT_CONDO:
            return { ...state, condoSelected: action.payload }
        case SAVE_PHOTO + '_PENDING':
            return { ...state, waiting: true }
        case SAVE_PHOTO + '_FULFILLED':
            return { ...state, condoImg: action.payload, waiting: false }
        case OPEN_HEADER_MODAL:
            return{ ...state, headerModalOpen:action.payload}
        case CLOSE_HEADER_MODAL:
            return{ ...state, headerModalOpen:action.payload}
        case OPEN_INFO_MODAL:
            return { ...state, infoModalOpen: true }
        case CLOSE_INFO_MODAL:
            return{ ...state, infoModalOpen:false}
        case UPDATE_OCC_COUNT:
            return{ ...state,
                adultGuests: action.payload.adultGuests,
                childGuests: action.payload.childGuests,
                infantGuests: action.payload.infantGuests,
                totalGuests: action.payload.totalGuests
            }
        default:
            return state
    }
}