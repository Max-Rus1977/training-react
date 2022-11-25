import { useState } from "react"

export const useFetching = (callback) => {

  const [isLoader, setIsLoader] = useState(false)
  const [isError, setIsError] = useState('')

  const fetching = async () => {
    try {
      setIsLoader(true)
      await callback()
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
