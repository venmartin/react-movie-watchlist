import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from "./AppReducer"

// creating initial state
const initialState = {
  favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
}

// creating context

export const GlobalContext = createContext(initialState)

// provider component

export const GlobalProvider = (props) => {
  const [ state, dispatch ] = useReducer(AppReducer, initialState)

  // Saves to localStorage on each time an item is added to favorites.
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
  }, [state])

  // actions
    const addToFavorites = ({
      id,
      poster,
      title,
      date,
      media_type,
      vote_average,
      language}) => {
    dispatch({type: "ADD_ITEM_TO_FAVORITES", payload: {
      id,
      poster,
      title,
      date,
      media_type,
      vote_average,
      language}})
  }

    const removeFromFavorites = (id) => {
      dispatch({type: "REMOVE_ITEM_FROM_FAVORITES", payload: id})
    }



  return (
    <GlobalContext.Provider
     value={{
        favorites: state.favorites,
        addToFavorites,
        removeFromFavorites
      }}>
      {props.children}
    </GlobalContext.Provider>
  )
}