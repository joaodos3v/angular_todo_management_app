export const constants = {
  CURRENT_TOKEN: 'CURRENT_TOKEN',
};

const apiURL = 'http://localhost:3000';

export const apiEndpoint = {
  AuthEndpoint: {
    login: `${apiURL}/login`,
  },
  TodoEndpoint: {
    getAllTodos: `${apiURL}/todos`,
    addTodo: `${apiURL}/todos`,
    updateTodo: `${apiURL}/todos`,
  },
};
