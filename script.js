const movieList = document.getElementById("movie-list");
// tạo danh sách phim
movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition cursor-pointer";
  card.innerHTML = `
    <img src="${movie.thumbnail}" alt="${movie.title}"
         class="movie"/>

    <div class="p-4 flex flex-col items-center">
      <h3 class="movie_title">${movie.title}</h3>
    </div>
  `;
  card.onclick = () => {
    window.location.href = `movie.html?id=${movie.id}`;
  };
  movieList.appendChild(card);
});

//tạo dropdown list
let closeTimeout = {};

function toggleDropdown(id) {
    const menu = document.getElementById(id);
    const isOpen = !menu.classList.contains('hidden');
    closeAllDropdowns();
    if (!isOpen) menu.classList.remove('hidden');
}

function closeDropdown(id) {
    loseTimeout[id] = setTimeout(() => {
        document.getElementById(id).classList.add('hidden');
    }, 200);
}

function cancelClose(id) {
    clearTimeout(closeTimeout[id]);
}

function closeAllDropdowns() {
    ['genreMenu', 'nationMenu'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
}

    // Ẩn menu nếu click ra ngoài
document.addEventListener('click', function (e) {
    const ids = ['dropdownGenre', 'dropdownNation'];
    if (!ids.some(id => document.getElementById(id).contains(e.target))) {
        closeAllDropdowns();
    }
});
