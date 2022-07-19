import { ACCESS_KEY, API_URL } from "./const.js"

export const getUserData = () => {
  return fetch(`${API_URL}/me`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('Bearer')}`
    }
  })
    .then(res => res.json())
}