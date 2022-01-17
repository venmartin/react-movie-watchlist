export default (state, action) => {
  switch(action.type) {
    case "ADD_ITEM_TO_FAVORITES":
      return {
        ...state,
        favorites: [action.payload, ...state.favorites]
      }
      case "REMOVE_ITEM_FROM_FAVORITES":
        return {
          ...state,
          favorites: state.favorites.filter(movie => movie.id !== action.payload)
        }
    default:
      return state;
  }
} 