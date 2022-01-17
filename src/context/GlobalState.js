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
  const addToFavorites = (item) => {
    dispatch({type: "ADD_ITEM_TO_FAVORITES", payload: item})
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