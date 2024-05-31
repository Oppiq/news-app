const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

async function fetchNews() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      displayNews(data.articles);
      // TODO: Add a function call to display the news
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
  fetchNews();

  function displayNews(articles) {
    const newsContainer = document.querySelector('#newsContainer');
    const newsCard = document.querySelector('#newsCard');
    
    for(const article of articles){
      let tempNode = newsCard.cloneNode(true);
      newsContainer.appendChild(tempNode);
    }

    const cardImages = document.querySelectorAll('.card-img-top');
    const cardTitles = document.querySelectorAll('.card-title');
    const cardLinks = document.querySelectorAll('.btn')
    
    for(let i = 0; i < articles.length; i++){
      cardTitles[i].innerHTML = articles[i].title;
      cardLinks[i].href = articles[i].url;
      cardImages[i].src = articles[i].urlToImage;
    }  
  }
