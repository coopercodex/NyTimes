const id = '';
const value = '';
const endpoints = {
  getWorld: `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=WkxVvDsCfCHKL7AtdFbdwDMGFAW0y4pe`,
  getPolitics: `https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=WkxVvDsCfCHKL7AtdFbdwDMGFAW0y4pe`,
  getArt: `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=WkxVvDsCfCHKL7AtdFbdwDMGFAW0y4pe`,
  getTech: `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=WkxVvDsCfCHKL7AtdFbdwDMGFAW0y4pe`, 
  getClicked: `https://api.nytimes.com/svc/topstories/v2/${value}.json?api-key=WkxVvDsCfCHKL7AtdFbdwDMGFAW0y4pe`,
  getSome: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&api-key=WkxVvDsCfCHKL7AtdFbdwDMGFAW0y4pe`,
}

export default endpoints;