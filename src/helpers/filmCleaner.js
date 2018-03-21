export const filmCleaner = (data) => {
  let cleanYear = (date) => {
    let releaseArray = date.split('-')
    let releaseYear = releaseArray[0] 
    return releaseYear
  }

  let openingCrawl = {
    text: data.opening_crawl,
    title: data.title,
    releaseYear: cleanYear(data.release_date)
  }

  return openingCrawl
}