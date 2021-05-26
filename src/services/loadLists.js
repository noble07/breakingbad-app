import { db } from "firebase/firebase-cofing"


export const loadLists = async(uid) => {

  const listSnap = await db.collection(`${uid}/breakingbad/lists`).get()
  const lists = []

  listSnap.forEach(snapHijo => {
    lists.push({
      id:snapHijo.id,
      ...snapHijo.data()
    })
  })

  return lists

}