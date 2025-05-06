// Add alt here
class Artcile {
    constructor(title, imgPath, description, text) {
        this.title = title;
        this.imgPath = imgPath;
        this.description = description;
        this.text = text;
    }
}

// Can be moved to miscellaneous
async function loadFromJson(path) {
    const response = await fetch(path);
    const data = await response.json();
    return data;
}

/**
 * @param {string} path - The path or URL to the JSON file containing the news data.
 * @returns {Promise<Article[]>} A promise that resolves to an array of Article instances.
*/
async function getNews(path) {
    const data = await loadFromJson(path);
    return data.news.map(article => new Artcile(article.title, article.imgPath, article.description, article.text));
}

function displayNews(news, newsList) {
    for (const article of news) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.setAttribute('src')
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const a = document.createElement('a');
        
        // li.textContent = 
        li.append(img, h2, p, a);
        newsList.appendChild(li);
    }
}

async function init(){
    const nav = document.querySelector('.nav-container');
    const sideMenu = document.querySelector('.side-menu-container');
    const footer = document.querySelector('.footer-container');

    const mainContent = document.querySelector('.main-container');
    const newsList = document.getElementById('news-list');

    // here import html and draw inside the containers

    try {
        const news = await getNews('./news.json');
        displayNews(news, newsList);
        
    } 
    catch (error) {
        console.error('Error loading json:', error);
    }

}

// Entry point
document.addEventListener('DOMContentLoaded', init); 