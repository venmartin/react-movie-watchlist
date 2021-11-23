const useGenreID = (selectedGenres) => {
  if (selectedGenres.length < 1) return ''

  const GenreIds = selectedGenres.map((genres) => genres.id)
  return GenreIds.reduce((acc, curr) => `${acc},${curr}`)
}

export default useGenreID