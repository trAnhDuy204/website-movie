const favoriteList = document.getElementById("favoriteList");
const favorites = getFavorites();
const movies = kho_phim.filter(m => favorites.includes(m.id));

function createMovieCard(movie) {
    const card = document.createElement("div");
    card.className = "relative bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition";

    card.innerHTML = `
        <img src="../../${movie.thumbnail}" alt="${movie.title}" class="w-full h-80 object-cover cursor-pointer" />
        <div class="p-4 text-center">
          <h3 class="text-lg font-semibold">${movie.title}</h3>
        </div>
        <button class="absolute top-2 right-2 text-xl unfav-btn" data-id="${movie.id}">❤️</button>
    `;

    // Nhấn vào ảnh để xem phim
    card.querySelector("img").onclick = () => {
        window.location.href = `../movie/index.html?id=${movie.id}`;
    };

    // Nhấn để hủy yêu thích
    card.querySelector(".unfav-btn").onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(movie.id);
        location.reload(); // Refresh lại để cập nhật danh sách
    };

    return card;
}

// Hiển thị danh sách
if (movies.length === 0) {
      favoriteList.innerHTML = '<p class="text-center col-span-full text-gray-400">Chưa có phim nào được đánh dấu yêu thích.</p>';
} else {
    movies.forEach(movie => {
        favoriteList.appendChild(createMovieCard(movie));
    });
}

//tạo dropdown list
// Hàm bật/tắt dropdown
function toggleDropdown(id) {
    const menu = document.getElementById(id); // Lấy element của menu cần hiển thị
    const isOpen = !menu.classList.contains('hidden'); // Kiểm tra menu hiện tại có đang mở không (ẩn = có class 'hidden')
    closeAllDropdowns(); // Đóng tất cả dropdown khác
    if (!isOpen) menu.classList.remove('hidden'); // Nếu menu đang ẩn, thì hiển thị ra (bỏ class 'hidden')
}
// Đóng tất cả dropdown menu đang mở
function closeAllDropdowns() {
    ['genreMenu', 'nationMenu'].forEach(id => {
        document.getElementById(id).classList.add('hidden'); // Ẩn tất cả bằng cách thêm class 'hidden'
    });
}