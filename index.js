import { blogArray } from "./data.js";


function getArticleFeed() {

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
        } else {
            feedHtml += `
        <div class="article-listing hidden" id="hidden">
            <img class="blog-pic" src="${blog.image}" alt="${blog.alt}"/>
            <p>${blog.date}</p>
            <a href="${blog.link}" ><h2>${blog.title}</h2></a>
            <p>${blog.text}</p>
        </div>`
        count++
        }
    });

    return feedHtml

}


function renderArticles() {
    document.getElementById("article-container").innerHTML = getArticleFeed()
}

renderArticles()


document.getElementById("view-more").addEventListener("click", function(){
    document.getElementById("hidden").classList.toggle("hidden")
});