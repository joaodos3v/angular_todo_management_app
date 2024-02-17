export const constants = {
  CURRENT_TOKEN: 'CURRENT_TOKEN',
};

const apiURL = 'http://localhost:3000';

export const apiEndpoint = {
  AuthEndpoint: {
    login: `${apiURL}/login`,
    logout: `${apiURL}/logout`,
    loggedUser: `${apiURL}/user`,
  },
  TodoEndpoint: {
    getAllTodos: `${apiURL}/todos`,
    addTodo: `${apiURL}/todo`,
    updateTodo: `${apiURL}/todo`,
  },
};
