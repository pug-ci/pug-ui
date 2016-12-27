import React        from 'react';
import fetch        from 'isomorphic-fetch';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

function buildHeaders() {
  const authToken = localStorage.getItem('authToken');

  return { ...defaultHeaders, Authorization: authToken };
}

export function checkStatus(response) {
  let error = null;

  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function parseJSON(response) {
  return response.json();
}

export function httpGet(url) {
  return fetch(url, { method: 'get', headers: buildHeaders() })
  .then(checkStatus)
  .then(parseJSON);
}

export function httpPost(url, data) {
  const body = JSON.stringify(data);

  return fetch(url, {
    method: 'post',
    headers: buildHeaders(),
    body,
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function httpPut(url, data) {
  const body = JSON.stringify(data);

  return fetch(url, {
    method: 'put',
    headers: buildHeaders(),
    body,
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function httpDelete(url) {
  return fetch(url, {
    method: 'delete',
    headers: buildHeaders(),
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function setDocumentTitle(title) {
  document.title = `${title} | Pug CI`;
}

export function renderErrorsFor(errors, ref) {
  if (!errors) return false;

  return errors.map((error, i) => {
    if (error[ref]) {
      return (
        <div key={i} className="error">
          {error[ref]}
        </div>
      );
    }
    return null;
  });
}

export function buildColor(status) {
  switch (status) {
    case 'pending':
      return 'blue';
    case 'running':
      return 'yellow';
    case 'passed':
      return 'green';
    case 'failed':
      return 'red';
    case 'cancelled':
      return 'grey';
    default:
      return 'black';
  }
}
