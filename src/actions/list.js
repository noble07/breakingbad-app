import { db } from "firebase/firebase-cofing"
import { loadLists } from "services/loadLists"
import { types } from "types/types"


export const startSavingQuote = ({idList, quoteId, quote}) => {
  return async(dispatch, getState) => {

    const {uid} = getState().auth
    const {lists} = getState().list

    try {

      const newQuote = {
        quoteId,
        quote
      }

       let quotes = null
       let keyList = null
       
       lists.forEach((list, key) => {

        if (list.id === idList ) {
          quotes = [...list.quotes, newQuote]
          keyList = key
        }
  
      })

      await db.doc(`${uid}/breakingbad/lists/${idList}`).update({quotes})

      dispatch(SaveQuote(keyList, quotes))
      
    } catch (error) {
      console.log(error)
    }

  }
}

export const SaveQuote = (keyList, quotes) => ({
  type: types.listAddQuote,
  payload: {
    keyList,
    quotes
  }
})

export const startNewList = ({name}) => {
  return async(dispatch, getState) => {

    const {uid} = getState().auth

    try {

      const newList = {
        name
      }
      
      const doc = await db.collection(`${uid}/breakingbad/lists`).add(newList)

      dispatch(addNewList(doc.id, newList))

    } catch (error) {
      console.log(error)
    }

  }
}

export const addNewList = (id, list) => ({
  type: types.listAddNew,
  payload: {
    id,
    ...list
  }
})

export const startLoadingList = uid => {
  return async(dispatch) => {

    const lists = await loadLists(uid)

    dispatch(setLists(lists))

  }
}

export const startDeletingList = id => {
  return async(dispatch, getState) => {

    const {uid} = getState().auth

    await db.doc(`${uid}/breakingbad/lists/${id}`).delete()

    dispatch(deleteList(id))

  }
}

export const deleteList = id => ({
  type: types.ListDelete,
  payload: id
})

export const setLists = lists => ({
  type: types.listLoad,
  payload: lists
})

export const listLogout = () => ({
  type: types.listLogout
})