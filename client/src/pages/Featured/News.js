import newsDB from '../../assets/NewsReports/News.json'

export function GetPostDetails(id) {
  var news = newsDB.articles;

  for (let i = 0; i < news.length; i++) {
    let article = news[i]
    if (id === article["id"]) {
      return article;
    }
  }
}