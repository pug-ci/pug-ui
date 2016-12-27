import Constants from '../constants';

const initialState = {
  repositories: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.REPOSITORIES_RECEIVED:
      return { ...state, repositories: action.repositories };

    case Constants.REPOSITORIES_RESET:
      return initialState;

    case Constants.REPOSITORIES_REPOSITORY_UPDATED: {
      const { repositories } = state;
      const repositoryIndex = repositories.findIndex(element => element.id === action.repository.id);

      const updatedRepositories = [
        ...repositories.slice(0, repositoryIndex),
        action.repository,
        ...repositories.slice(repositoryIndex + 1),
      ];

      return { ...state, repositories: updatedRepositories };
    }

    default:
      return state;
  }
}
