import { db } from "firebase/firebase-cofing"

export const startRatingQuote = (quoteId, reaction) => {
  return async(dispatch, getState) => {

    const {uid} = getState().auth

    try {


      const quoteSnap = await db.collection(`${uid}/breakingbad/quotes`).where('idQuote', '==', quoteId).get()


      if (quoteSnap.empty){
      }

      quoteSnap.forEach(snapHijo => {
        console.log(snapHijo.data())
      });
      
    } catch (error) {
      console.log(error)
    }

  }
}