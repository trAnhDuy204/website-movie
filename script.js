// tạo danh sách phim nổi bật
const phimNoiBat = document.getElementById("phim_noi_bat");

phim_noi_bat.forEach(movie => {
  const card = document.createElement("div");
  card.className = "bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition cursor-pointer";
  card.innerHTML = `
    <img src="${movie.thumbnail}" alt="${movie.title}"
         class="movie w-full h-80 object-cover"/>

    <div class="p-4 text-center">
      <h3 class="movie_title text-lg font-semibold">${movie.title}</h3>
    </div>
  `;

  //nhấn chuyển sang trang xem phim
  card.onclick = () => {
    window.location.href = `./Pages/movie/index.html?id=${movie.id}`;
  };
  phimNoiBat.appendChild(card);
});

// tạo danh sách phim chiếu rạp
const phimChieuRap = document.getElementById("phim_moi_chieu_rap");

phim_chieu_rap.forEach(movie => {
  const card = document.createElement("div");
  card.className = "bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition cursor-pointer";
  card.innerHTML = `
    <img src="${movie.thumbnail}" alt="${movie.title}"
         class="movie w-full h-80 object-cover"/>

    <div class="p-4 text-center">
      <h3 class="movie_title text-lg font-semibold">${movie.title}</h3>
    </div>
  `;

  //nhấn chuyển sang trang xem phim
  card.onclick = () => {
    window.location.href = `./Pages/movie/index.html?id=${movie.id}`;
  };
  phimChieuRap.appendChild(card);
});

// tạo danh sách phim lẻ
const phimLe = document.getElementById("phim_le");

phim_le.forEach(movie => {
  const card = document.createElement("div");
  card.className = "bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition cursor-pointer";
  card.innerHTML = `
    <img src="${movie.thumbnail}" alt="${movie.title}"
         class="movie w-full h-80 object-cover"/>

    <div class="p-4 text-center">
      <h3 class="movie_title text-lg font-semibold">${movie.title}</h3>
    </div>
  `;

  //nhấn chuyển sang trang xem phim
  card.onclick = () => {
    window.location.href = `./Pages/movie/index.html?id=${movie.id}`;
  };
  phimLe.appendChild(card);
});

// tạo danh sách phim Anime
const phimAnime = document.getElementById("phim_anime");

phim_anime.forEach(movie => {
  const card = document.createElement("div");
  card.className = "bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition cursor-pointer";
  card.innerHTML = `
    <img src="${movie.thumbnail}" alt="${movie.title}"
         class="movie w-full h-80 object-cover"/>

    <div class="p-4 text-center">
      <h3 class="movie_title text-lg font-semibold">${movie.title}</h3>
    </div>
  `;

  //nhấn chuyển sang trang xem phim
  card.onclick = () => {
    window.location.href = `./Pages/movie/index.html?id=${movie.id}`;
  };
  phimAnime.appendChild(card);
});

//tạo dropdown list
let closeTimeout = {};

function toggleDropdown(id) {
    //bật tắt dropdown
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



