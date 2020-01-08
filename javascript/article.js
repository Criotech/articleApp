let url_string = window.location.href
let url = new URL(url_string);
let articleNo = url.searchParams.get("id");


function getDatas() {
    getImageData(articleNo).then(data => {
        console.log(data)
        document.getElementById("article-slider1").innerHTML = `
         ${[...data].reverse().map(imagesSliderTemplate).join("")} 
         `
    })         

    getCommentData(articleNo).then(data => {
        console.log(data)
        document.getElementById("commentSection").innerHTML = `
            <div class="commentSection__head">${data.length} Comments</div>
    
         ${[...data].reverse().map(commentTemplate).join("")} 
         `
    });
}

window.onload = getDatas;

function imagesSliderTemplate(image) {
    return `
            <div class="article-slide ${(image.id === "56") ? 'active' : ''}"><img src="${image.avatar}" height="100%" width="100%" /></div>      
            `
}

function commentTemplate(comment) {
    return `
    <div id="comments" class="comments">
                <div class="commentData">
                        <div class="commentAvatar">
                            <img src="${comment.avatar}" alt="" height="100%" width="100%" style="border-radius: 50%">
                        </div>
                        <div class="commentData__sub">
                            <div class="commentDate"><i>March 15, 2020</i></div>
                            <div class="commentAuthor">${comment.name}</div>
                            <div class="commentContent">
                                ${comment.comment}
                            </div>
                            <div class="commentActions">
                                <span class="editComment" onclick="toggleModal({ type: 'comment', name: '${comment.name}', avatar: '${comment.avatar}', commentId: '${comment.id}', comment: '${comment.comment}' })" style="color: brown; padding-right: 15px"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                                <span class="deleteComment" style="color: red"><i class="fa fa-trash-o" aria-hidden="true"></i></span>
                            </div>
                </div>
            </div>
            `
}

//post comment data 
document.getElementById('uploadCommentForm').addEventListener('submit', postCommentData);

function postCommentData(event) {
    event.preventDefault();
    console.log('hello')
    document.getElementsByClassName("submitt").innerHTML = `<i style="font-size: 20px" class="fa fa-spinner" aria-hidden="true"></i>`

    let comment = document.getElementById('comment').value;
    let name = document.getElementById('author').value
    let avatar = document.getElementById('avatar').value;

    let commentData = { name, comment, avatar, articleId: articleNo }

    postCommentDataToApi(commentData)
}


//post image data from html
document.getElementById('uploadImageForm').addEventListener('submit', postImageData);

function postImageData(event) {
    event.preventDefault();

    document.getElementById("submit").innerHTML = `<i style="font-size: 20px" class="fa fa-spinner" aria-hidden="true"></i>`

    let avatar = document.getElementById('articleImage').value;

    let imageData = { avatar, articleId: articleNo }

    postImageDataToApi(imageData)
}



// //update form data
document.getElementById('updateCommentForm').addEventListener('submit', updateCommentData);


function updateCommentData(event) {
    event.preventDefault();    
    console.log('djdjdjdjdjjjd');
    // document.getElementsByClassName("submitt").innerHTML = `<i style="font-size: 20px" class="fa fa-spinner" aria-hidden="true"></i>`

    // let comment = document.getElementById('comment').value;
    // let name = document.getElementById('author').value;
    // let avatar = document.getElementById('avatar').value;
    // let id = document.getElementById('id').value;    

    // let commentData = { name, comment, avatar, id, articleId: articleNo, id }

    // updateCommentDataToApi(commentData)
}






