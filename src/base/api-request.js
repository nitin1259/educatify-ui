/* eslint-disable no-console */
import { toastr } from 'react-redux-toastr'
import {
  getUser,
  isAuthenticated,
  logout
} from './../auth/authorization.actions'
import { logger } from './../../logger/logger'

// const token = isAuthenticated()
export const commonHeaders = () => {
  const headers = new Headers()
  headers.append('Accept', 'application/json') // This one is enough for GET requests
  headers.append('Content-Type', 'application/json') // This one sends body
  headers.append('Accept-Encoding', 'application/gzip')
  headers.append('Accept-Encoding', 'application/json')
  return headers
}

const getHeaders = () => {
  const user = getUser()
  const origin = user && !user.onPrime ? 'include' : undefined
  const headers = commonHeaders()
  // if (user.onPrime) {
  headers.append('Authorization', `Bearer ${user && user.basicAuthToken}`) // This one is enough for GET requests
  // }
  return {
    headers,
    credentials: origin
  }
}

const headers = getHeaders()

export function errorHandler(err, url, payload, preventError) {
  if (err.status === 401) {
    console.log(`Error: Authentication failed + ${url}`, err, payload)
    logger('error', `Error: Authentication failed + ${url}`, err, payload)
    toastr.error(`${err.status}`, `${err.status}: ${err.statusText}`, err)
    return logout()
  }

  console.log(
    `${err.status ? err.status : 'Error fetching data'}: ${
      err.statusText
    } - ${url}`,
    err,
    payload
  )
  logger(
    'error',
    `${err.status ? err.status : 'Error fetching data'}: ${
      err.statusText
    } - ${url}`,
    err,
    payload
  )
  toastr.error(
    `${err.status ? err.status : 'Error fetching data'}`,
    `${err.statusText ? err.statusText : url}`
  )
  if (!preventError) {
    throw new Error(`${err.status}`, `${err.statusText}`)
  }
}

function handleResponse(res) {
  if (!res.ok) {
    return Promise.reject(res)
  }
  return res.json()
}

export const getRequest = async (url, ignoreAuth) => {
  if (ignoreAuth) {
    const data = await fetch(url)
      .then(res => {
        return handleResponse(res)
      })
      .catch(err => errorHandler(err, url))
    return data
  }
  const data = await fetch(url, {
    ...headers
  })
    .then(res => {
      return handleResponse(res)
    })
    .catch(err => errorHandler(err, url))
  return data
}

export const postRequest = async (url, payload) => {
  const data = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    ...headers
  })
    .then(res => {
      return handleResponse(res)
    })
    .catch(err => errorHandler(err, url, payload))
  return data
}

export const putRequest = async (url, payload) => {
  const data = await await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(payload),
    ...headers
  })
    .then(res => {
      return handleResponse(res)
    })
    .catch(err => errorHandler(err, url, payload))
  return data
}

export const deleteRequest = async (url, payload) => {
  const data = await await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(payload),
    ...headers
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res)
      }
      return res
    })
    .catch(err => errorHandler(err, url, payload))
  return data
}

export const fetchRequest = async (url, options) => {
  const data = await fetch(url, {
    ...options
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res)
      }
      return res
    })
    .catch(err => errorHandler(err, url))
  return data
}
export const fetchAPIRequest = async (url, method, body, headers) => {
  const data = await fetch(url, {
    method,
    body,
    headers
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res)
      }
      return res
    })
    .catch(err => errorHandler(err, url))
  return data
}

