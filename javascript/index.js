let pageNo = 1;
let next = document.querySelector('#next');
let previous = document.querySelector('#previous')

window.addEventListener('load', getPaginatedData(pageNo).then(data => {
    document.getElementById("headlines").innerHTML = `<h2>Article Headlines</h2>
         ${[...data].reverse().map(articleTemplate).join("")} 
         `
    document.querySelector('footer').classList.add('static');
}))

next.addEventListener('click', inc);
previous.addEventListener('click', dec)

function inc() {
    pageNo++
    getPaginatedData(pageNo).then(data => {
        document.getElementById("headlines").innerHTML = `<h2>Article Headlines</h2>
         ${[...data].reverse().map(articleTemplate).join("")} 
         `
    })
}

function dec() {
    if (pageNo !== 1) {
        pageNo--
        getPaginatedData(pageNo).then(data => {
            document.getElementById("headlines").innerHTML = `<h2>Article Headlines</h2>
         ${[...data].reverse().map(articleTemplate).join("")} 
         `
        })
    }
}

let formatDate = function (timestamp) {
	let date = new Date(timestamp);
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
	return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
};

function articleTemplate(article) {
    return `
     <div class="headlines__list" id="headlines__list">
            <div class="headlines__list__h2">
                <span class="title"> <a href="article.html?id=${article.id}"> ${article.title} </a> </span> <br>
                <div class="headlines__list__h2__sub">
                    <div class="authorImage mr-1"> <img src='${article.avatar}' alt='' height='100%' width='100%' style="border-radius: 50%;" /> </div>
                    <span style="font-size: 1.4rem; letter-spacing: 0;"><i>${article.author ? article.author : 'anonymous' } </i></span>
                    <span class="calender"><i class="fa fa-calendar pl-1" aria-hidden="true" style="color: #777"></i> <i>${formatDate(article.createdAt)}</i> </span> &emsp;
                    <span class="editComment show-modal" onclick="toggleModal({target: 'create-modal', title: '${article.title}', avatar: '${article.avatar}', link: '${article.url}', author: '${article.author}', id: '${article.id}', modaltitle: 'Edit article' })" style="color: brown; padding-right: 15px"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</span>
                    </div>
            </div>
            
            </div>
        </div>
    `
}

//get article data from html
document.getElementById('uploadArticleForm').addEventListener('submit', postData);

function postData(event) {
    event.preventDefault();
    document.getElementsByClassName("submitt").innerHTML = `<i style="font-size: 20px" class="fa fa-spinner" aria-hidden="true"></i>`

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let url = document.getElementById('link').value
    let avatar = document.getElementById('avatar').value;

    let articleData = { title, author, url, avatar }
  
    postArticleData(articleData)
}

//update article data 
//get article data from html
document.getElementById('editArticleForm').addEventListener('submit', updateArticleData);

function updateArticleData(event) {
    event.preventDefault();
    document.getElementsByClassName("submitt").innerHTML = `<i style="font-size: 20px" class="fa fa-spinner" aria-hidden="true"></i>`

    let title = document.getElementById('title_ed').value;
    let author = document.getElementById('author_ed').value;
    let url = document.getElementById('link_ed').value
    let avatar = document.getElementById('avatar_ed').value;
    let id = document.getElementById('id').value;

    let articleData = { title, author, url, avatar, id }
  
    editArticleData(articleData)
}






