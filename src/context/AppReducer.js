export default (state, action) => {
  switch(action.type) {
    case "ADD_ITEM_TO_FAVORITES":
      return {
        ...state,
        favorites: [action.payload, ...state.favorites]
      }
    default:
      return state;
  }
} 