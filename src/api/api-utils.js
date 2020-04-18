import { handleResponse, handleError } from "./handler-response";
const tagUrl = process.env.REACT_APP_API_URL + "/tags/";
const authorsUrl = process.env.REACT_APP_API_URL + "/authors/";

export function getTags() {
  return fetch(tagUrl).then(handleResponse).catch(handleError);
}

export function getAuthers() {
  return fetch(authorsUrl).then(handleResponse).catch(handleError);
}
