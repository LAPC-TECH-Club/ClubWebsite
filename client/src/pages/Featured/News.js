import newsDB from '../../assets/NewsReports/News.json'

// TODO: Create a function that manages all priority articles
export function ActivePosts() {
  let postsID = ["WWA", "FIM", "TGK", "TFM"];
  // Main Post, SubMain Post, Sub Post #1, Sub Post #2

  let posts = []
  for (let i = 0; i < postsID.length; i++) {
    posts.push(GetPostDetails(postsID[i]));
  }
  return posts;
}

export function GetMainPost() {
  return ActivePosts()[0];
}

export function GetPostDetails(id) {
  var news = newsDB.articles;

  for (let i = 0; i < news.length; i++) {
    let article = news[i]
    if (id === article["id"]) {
      return article;
    }
  }
}