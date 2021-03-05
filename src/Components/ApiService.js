import baseUrl from './config';

const ApiService = {
  getCat() {
    return fetch(`${baseUrl}/cats`)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => console.error(error));
  },

  adoptCat() {
    return fetch(`${baseUrl}/cats`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  getDog() {
    return fetch(`${baseUrl}/dogs`)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => console.error(error));
  },

  adoptDog() {
    return fetch(`${baseUrl}/dogs`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
  },

  getPeople() {
    return fetch(`${baseUrl}/people`)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => console.error(error));
  },

  addPerson(name) {
    return fetch(`${baseUrl}/people`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name }),
    });
  },
};

export default ApiService;
