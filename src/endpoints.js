
const value = '';
const endpoints = {
  getWorld: `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.REACT_APP_API_KEY}`,
  getPolitics: `https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=${process.env.REACT_APP_API_KEY}`,
  getArt: `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${process.env.REACT_APP_API_KEY}`,
  getTech: `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${process.env.REACT_APP_API_KEY}`, 
  getClicked: `https://api.nytimes.com/svc/topstories/v2/${value}.json?api-key=${process.env.REACT_APP_API_KEY}`,
  getSome: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&api-key=${process.env.REACT_APP_API_KEY}`,
}

export default endpoints;