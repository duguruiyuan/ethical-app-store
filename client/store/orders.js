import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ORDERS = 'GET_ORDERS'

/**
 * INITIAL STATE
 */
const defaultOrders = []

/**
 * ACTION CREATORS
 */
const getOrders = orders => ({ type: GET_ORDERS, orders })

/**
 * THUNK CREATORS
 */
export const fetchOrders = () => dispatch =>
  axios
    .get('/api/orders/')
    .then(res => dispatch(getOrders(res.data || defaultOrders)))
    .catch(err => console.log(err))

export const changingStatus = (orderId, status) => () => {
  console.log('store-side', orderId, status)
  axios
    .put(`/api/orders/${orderId}`, status)
    .then()
    .catch(err => console.log(err))
}
/**
 * REDUCER
 */
export default function(state = defaultOrders, action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders
    default:
      return state
  }
}
