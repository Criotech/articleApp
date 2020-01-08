

const toggleModal = (data) => {
  // console.log(data)
  if (data.type === 'comment') {

    // document.getElementById("modal__contents").innerHTML =
    //   `<div class="modal__close-bar">
    //             <span style="font-size: 20px; color: grey">X</span>
    //         </div>
    //         <p style="font-size: 20px; margin: 20px;">Fill the form below to upload your article</p>
    //          <form id="updateCommentForm" onsubmit="updateCommentData()>
    //                 <input type="text" id="author" placeholder="Name" value="${data.name}">
    //                 <input type="text" id="comment" placeholder="Comment" value="${data.comment}">
    //                 <input type="text" id="avatar" placeholder="Avatar" value="${data.avatar}">
    //                 <input type="text" id="id" value="${data.commentId}">

    //                 <button  type="submit" id="submit">Post Comment</button>
    //             </form>`
    
    document.getElementById('author').value = data.name;
    document.getElementById('comment').value = data.comment;
    document.getElementById('avatar').value = data.avatar;
    document.getElementById('id').value = data.commentId;

  }


  document.querySelector('.modal')
    .classList.toggle('modal--hidden');
  document.querySelector('.overlay')
    .classList.toggle('overlay--hidden');
}

document.querySelector('#show-modal')
  .addEventListener('click', toggleModal);

document.querySelector('.overlay')
  .addEventListener('click', toggleModal);


document.querySelector('.modal__close-bar span')
  .addEventListener('click', toggleModal);
document.querySelector('.overlay')
  .addEventListener('click', toggleModal);
