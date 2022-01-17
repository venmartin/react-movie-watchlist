import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from "./AppReducer"

// creating initial state
const initialState = {
  favorites: []
}

// creating context

export const GlobalContext = createContext(initialState)

// provider component

export const GlobalProvider = (props) => {
  const [ state, dispatch ] = useReducer(AppReducer, initialState)

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

  return (
    <GlobalContext.Provider
     value={{
        favorites: state.favorites,
        addToFavorites,
      }}>
      {props.children}
    </GlobalContext.Provider>
  )
}