import { blogArray } from "./data.js";


function getArticleFeedThreeTimes() {

    let count = 0
    let feedHtml = ``

    blogArray.forEach(function(blog){
        if (count < 3){
            feedHtml += `
            <div class="article-listing">
                <img class="blog-pic" src="${blog.image}" alt="${blog.alt}"/>
                <p>${blog.date}</p>
                <a href="${blog.link}" class="blog-link"><h2>${blog.title}</h2></a>
                <p>${blog.text}</p>
            </div>`
        count++
        }
    });

    return feedHtml
}


function renderArticlesThreeTimes() {
    document.getElementById("article-container-3").innerHTML = getArticleFeedThreeTimes()
}

renderArticlesThreeTimes()
