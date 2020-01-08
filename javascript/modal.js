const toggleModal = (data) => {
  if (data == 'close') {
    document.querySelectorAll('.modal').forEach((th) => {
      th.classList.add('modal--hidden')
    });
    document.querySelector('.overlay')
    .classList.toggle('overlay--hidden');
    return false;
  }
  switch (data.target) {
    case 'comment-modal':
      document.getElementById('author').value = data.name;
      document.getElementById('comment').value = data.comment;
      document.getElementById('avatar').value = data.avatar;
      document.getElementById('id').value = data.commentId;

     break;
  }
  
  document.querySelector('#'+data.target)
    .classList.toggle('modal--hidden');
  document.querySelector('.overlay')
    .classList.toggle('overlay--hidden');
}
