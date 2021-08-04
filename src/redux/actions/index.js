export const GET_EMAIL = 'GET_EMAIL';
export const GET_NAME = 'GET_NAME';
export const GET_TOKEN = 'GET_TOKEN';

export const actionEmail = (email) => ({
  type: GET_EMAIL,
  payload: email,
});

export const actionName = (user) => ({
  type: GET_NAME,
  payload: user,
});

export const actionToken = (token) => ({
  type: GET_TOKEN,
  payload: token,
});
