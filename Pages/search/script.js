const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");
// Lấy từ khóa từ trang chủ
const urlParams = new URLSearchParams(window.location.search);
const keyword = urlParams.get("q")?.trim().toLowerCase();

// Hàm hiển thị kết quả tìm phim
function renderResults(movies) {
  searchResults.innerHTML = "";

  if (movies.length === 0) {
    searchResults.innerHTML = `<p class="col-span-full text-center">Không tìm thấy phim nào.</p>`;
    return;
  }

  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition cursor-pointer";
    card.innerHTML = `
      <img src="../../${movie.thumbnail}" alt="${movie.title}" class="w-full h-80 object-cover" />
      <div class="p-4 text-center">
        <h3 class="text-lg font-semibold">${movie.title}</h3>
      </div>
    `;

    // Khi nhấn vào ảnh chuyển sang trang xem phim
    card.onclick = () => {
      window.location.href = `../movie/index.html?id=${movie.id}`;
    };

    searchResults.appendChild(card);
  });
}

// Gán từ khóa từ trang chủ vào thanh tìm kiếm
if (keyword) {
  searchInput.value = keyword;
}

// Lọc phim dựa trên từ khóa vừa gán
function searchByKeyword(keyword) {
  if (!keyword) {
    searchResults.innerHTML = `<p class="col-span-full text-center">Vui lòng nhập tên phim.</p>`;
    return;
  }

  const filtered = kho_phim.filter(movie =>
    movie.title.toLowerCase().includes(keyword)
  );

  console.log("Kết quả tìm theo từ khóa:", filtered);
  renderResults(filtered);
}

searchByKeyword(keyword);

// Hàm lọc phim theo từ đầu tiên trong tiêu đề
function filterMovies(keyword) {
  const query = keyword.toLowerCase();

  return kho_phim.filter(movie => {
    const words = movie.title.toLowerCase().split(" ");
    return words.some(word => word.startsWith(query));
  });
}

// Bắt sự kiện khi người dùng bấm nút "Tìm"
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

// tạo Dropdown
let closeTimeout = {};
//Hàm bật tắt dropdown
function toggleDropdown(id) {
  const menu = document.getElementById(id);
  const isOpen = !menu.classList.contains('hidden');
  closeAllDropdowns();
  if (!isOpen) menu.classList.remove('hidden');
}
//Hàm đóng dropdown
function closeDropdown(id) {
  closeTimeout[id] = setTimeout(() => {
    document.getElementById(id).classList.add('hidden');
  }, 200);
}

function cancelClose(id) {
  clearTimeout(closeTimeout[id]);
}

function closeAllDropdowns() {
  ['genreMenu', 'nationMenu'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
}

// Ẩn dropdown nếu click ra ngoài
document.addEventListener('click', function (e) {
  const ids = ['dropdownGenre', 'dropdownNation'];
  if (!ids.some(id => document.getElementById(id)?.contains(e.target))) {
    closeAllDropdowns();
  }
});
