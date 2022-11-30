import { useState } from "react"

export const useFetching = (callback) => {

  const [isLoader, setIsLoader] = useState(false)
  const [isError, setIsError] = useState('')

  const fetching = async (...args) => {
    try {
      setIsLoader(true)
      await callback(...args)
    }
    catch (error) {
      setIsError(error.message)
    }
    finally {
      setIsLoader(false)
    }
  }
  return [fetching, isLoader, isError]

}
