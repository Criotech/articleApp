 // Get input element
    let filterInput = document.getElementById('filterInput');
    // Add event listener
    filterInput.addEventListener('keyup', filterArticle);

    function filterArticle(){
      // Get value of input
      let filterValue = document.getElementById('filterInput').value.toUpperCase();

      // Get names ul
      let headlines = document.getElementById('headlines');
      // Get lis from ul
      let div = headlines.querySelectorAll('div.headlines__list');

      // Loop through collection-item lis
      for(let i = 0;i < div.length;i++){
        let title = div[i].getElementsByClassName('title')[0];
        // If matched
        if(title.innerHTML.toUpperCase().indexOf(filterValue) > -1){
          div[i].style.display = '';
        } else {
          div[i].style.display = 'none';
        }
      }

    }