export const getPagesCount = (totalCount, limit) => {

  return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
  const pageArray = []

  for (let i = 0; i < totalPages; i++) {
    pageArray.push(i + 1)
  }

  return pageArray
}