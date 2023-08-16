
"<-----MENU HAMBURGUESA------->"
const menuIcon = document.getElementById('menu-icon');
const menu = document.querySelector('.menu');
const movies = document.querySelector('.movies');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});

/*<-------MENU HAMBURGUESA CONVERTIDO EN FILTRO DE BUSQUEDA POR CATEGORIA--------->*/

document.addEventListener('DOMContentLoaded', () => {
  const filterLinks = document.querySelectorAll('.menu a[data-filter]');
  
  filterLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const filter = event.target.getAttribute('data-filter');
      filterMovies(filter);
    });
  });
});

function filterMovies(filter) {
  const allMovies = movies.querySelectorAll('.posters');
  
  allMovies.forEach(movie => {
    movie.style.display = 'none';
  });
  
  const filteredMovies = movies.querySelectorAll(`.${filter}`);
  
  filteredMovies.forEach(movie => {
    movie.style.display = 'block';
  });
}


/* BUSCADOR*/

// ... Código anterior ...

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  filterMoviesBySearch(searchTerm);
});

function filterMoviesBySearch(searchTerm) {
  const allMovies = document.querySelectorAll('.posters');

  allMovies.forEach(movie => {
    const movieTitle = movie.querySelector('h2').textContent.toLowerCase();

    if (movieTitle.includes(searchTerm)) {
      movie.style.display = 'block';
    } else {
      movie.style.display = 'none';
    }
  });
}



//MODAL

const openModalButtons = document.querySelectorAll('.open-modal-button');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const movie = button.getAttribute('data-movie');
            const modal = document.getElementById('modal' + movie.replace(/\s+/g, ''));
            modal.style.display = 'block';

            const closeButton = modal.querySelector('.close-modal-button');
            closeButton.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        });
    });



