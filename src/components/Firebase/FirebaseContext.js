import  { createContext } from 'react'
import { useContext} from 'react'

export const FirebaseContext = createContext(null)
export const useFirebase = () => useContext(FirebaseContext)