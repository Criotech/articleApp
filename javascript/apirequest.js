//get All Article
async function getAllArticle(pageNo) {
  let allArticle = await fetch(`https://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article`)
  let data = await allArticle.json()
  return data.length
}

//get paginated article
async function getPaginatedData(pageNo) {
  const totalDataLength = await getAllArticle();

  //to get data in a desending order
  let pageNoReverse
  if (pageNo === 1) {
    pageNoReverse = totalDataLength / 10
  } else {
    let num = totalDataLength / 10
    pageNoReverse = num - (pageNo - 1)
  }
  //Fetch paginated data 
  let response = await fetch(`https://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/?page=${pageNoReverse}&limit=10`);
  let data = await response.json()
  return data;
}

//get single Article
async function getSingleArticleApi(articleId) {
  let Article = await fetch(`https://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${articleId}`)
  let data = await Article.json()
  return data
}

//post article data 
function postArticleData(data) {
  console.log('hello', data)
  fetch('https://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(result => {
    if (result) {
      location.reload()
    }
  })
}

//edit article data 
function editArticleData(data) {
  console.log('hello', data)
  fetch(`https://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(result => {
    if (result) {
      location.reload()
    }
  })
}

///post image data 
function postImageDataToApi(data) {
  fetch(`https://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${data.articleId}/images`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(result => {
    if (result) {
      window.location.replace(window.location.href)
    }
  })
}

//post comment data to api 
function postCommentDataToApi(data) {
  fetch(`https://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${data.articleId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(result => {
    if (result) {
      window.location.replace(window.location.href)
    }
  })
}

//update comment data to api 
function updateCommentDataToApi(data) {
  console.log(data)
  fetch(`https://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${data.articleId}/comments/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(result => {
    if (result) {
      window.location.replace(window.location.href)
    }
  })
}


//get Image Article
async function getImageData(articleId) {
  let allImages = await fetch(`https://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${articleId}/images`)
  let data = await allImages.json()
  return data
}

//get comments data
async function getCommentData(articleId) {
  let allComments = await fetch(`https://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${articleId}/comments`)
  let data = await allComments.json()
  return data
}

// delete comments data
async function deleteCommentData(data) {
  fetch(`https://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${data.articleId}/comments/${data.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(result => {
    if (result) {
      window.location.replace(window.location.href)
    }
  })
}


