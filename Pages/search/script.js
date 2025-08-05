const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");
// Lấy từ khóa từ trang chủ
const urlParams = new URLSearchParams(window.location.search);
const keyword = urlParams.get("q")?.trim().toLowerCase();
const genre = urlParams.get("genre")?.trim().toLowerCase();
const nation = urlParams.get("nation")?.trim().toLowerCase();

// Hàm hiển thị kết quả tìm phim
function renderResults(movies) {
  searchResults.innerHTML = "";

  if (movies.length === 0) {
    searchResults.innerHTML = `<p class="col-span-full text-center">Không tìm thấy phim nào.</p>`;
    return;
  }

  movies.forEach(movie => {
    const isFav = isFavorite(movie.id);

    const card = document.createElement("div");
    card.className = "relative bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition cursor-pointer";

    card.innerHTML = `
      <img src="../../${movie.thumbnail}" alt="${movie.title}" class="w-full h-80 object-cover" />
      <div class="p-4 text-center">
        <h3 class="text-lg font-semibold">${movie.title}</h3>
      </div>
      <button class="absolute top-2 right-2 text-xl favorite-btn" data-id="${movie.id}">
        ${isFav ? "❤️" : "🤍"}
      </button>
    `;

    card.querySelector("img").onclick = () => {
      window.location.href = `../movie/index.html?id=${movie.id}`;
    };

    card.querySelector(".favorite-btn").onclick = (e) => {
      e.stopPropagation();
      toggleFavorite(movie.id);
      e.currentTarget.textContent = isFavorite(movie.id) ? "❤️" : "🤍";
    };

    searchResults.appendChild(card);
  });
}

// Gán từ khóa từ trang chủ vào thanh tìm kiếm
if (keyword) {
  searchInput.value = keyword;
}

// Lọc phim dựa trên từ khóa vừa gán từ trang chủ
function searchByKeyword(keyword) {
  //nếu rỗng
  if (!keyword) {
    searchResults.innerHTML = `<p class="col-span-full text-center">Vui lòng nhập tên phim.</p>`;
    return;
  }
  //lọc phim theo tên phim
  const filtered = kho_phim.filter(movie =>
    movie.title.toLowerCase().includes(keyword)
  );
  
  renderResults(filtered);
}
//Thực hiện tìm kiếm theo từ nhập từ trang chủ
searchByKeyword(keyword);

// Hàm lọc phim theo tên phim ở trang tìm kiếm
function filterMovies(keyword) {
  const query = keyword.toLowerCase();

  return kho_phim.filter(movie => {
    const words = movie.title.toLowerCase().split(" ");
    return words.some(word => word.startsWith(query));
  });
}

// khi người dùng bấm nút "Tìm"
searchButton.addEventListener("click", () => {
  const keyword = searchInput.value.trim().toLowerCase();

  if (keyword.length === 0) {
    searchResults.innerHTML = `<p class="col-span-full text-center">Vui lòng nhập tên phim.</p>`;
    return;
  }

  const filtered = filterMovies(keyword);
  console.log("Kết quả lọc:", filtered);
  renderResults(filtered);
});

// Cho phép tìm bằng phím Enter
searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    searchButton.click();
  }
});

//Lọc phim theo thể loại và quốc gia từ trang chủ
if (genre) {
  const filtered = kho_phim.filter(movie =>
    movie.tyle?.toLowerCase().includes(genre)
  );
  renderResults(filtered);
} else if (nation) {
  const filtered = kho_phim.filter(movie =>
    movie.native?.toLowerCase() === nation
  );
  renderResults(filtered);
}

// Lọc theo thể loại (tyle)
document.querySelectorAll("[data-genre]").forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const genre = this.dataset.genre.toLowerCase();

    const filtered = kho_phim.filter(movie =>
      movie.tyle?.toLowerCase().includes(genre)
    );

    closeAllDropdowns();
    renderResults(filtered);
  });
});

// Lọc theo quốc gia (native)
document.querySelectorAll("[data-nation]").forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const nation = this.dataset.nation.toLowerCase();

    const filtered = kho_phim.filter(movie =>
      movie.native?.toLowerCase() === nation
    );

    closeAllDropdowns();
    renderResults(filtered);
  });
});


//tạo dropdown list
// Hàm bật/tắt dropdown
function toggleDropdown(id) {
    const menu = document.getElementById(id); // Lấy element của menu cần hiển thị
    const isOpen = !menu.classList.contains('hidden'); // Kiểm tra menu hiện tại có đang mở không
    closeAllDropdowns(); // Đóng tất cả dropdown khác
    if (!isOpen) menu.classList.remove('hidden'); // Nếu menu đang ẩn, thì hiển thị ra
}
// Đóng tất cả dropdown menu đang mở
function closeAllDropdowns() {
    ['genreMenu', 'nationMenu'].forEach(id => { // Lặp qua id của các menu
        document.getElementById(id).classList.add('hidden'); // Ẩn tất cả bằng cách thêm class 'hidden'
    });
}
