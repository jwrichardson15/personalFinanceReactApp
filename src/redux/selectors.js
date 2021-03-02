export const getResearchCompanyState = store => store.researchCompany;

export const getPortfolioState = store => store.portfolio;

export const getWatchListState = store => store.watchList;

// export const getTodoById = (store, id) =>
//   getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

// export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
//     const allTodos = getTodos(store);
//     switch (visibilityFilter) {
//       case VISIBILITY_FILTERS.COMPLETED:
//         return allTodos.filter(todo => todo.completed);
//       case VISIBILITY_FILTERS.INCOMPLETE:
//         return allTodos.filter(todo => !todo.completed);
//       case VISIBILITY_FILTERS.ALL:
//       default:
//         return allTodos;
//     }
//   };