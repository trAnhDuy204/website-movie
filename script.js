const phimNoiBat = document.getElementById("phim_noi_bat");
const phimChieuRap = document.getElementById("phim_moi_chieu_rap");
const phimLe = document.getElementById("phim_le");
const phimAnime = document.getElementById("phim_anime");

// Hàm tạo khung hiển thị cho 1 bộ phim
function createMovieCard(movie) {
  // Kiểm tra xem phim hiện tại có trong danh sách yêu thích không
  const isFav = isFavorite(movie.id);

  // Tạo thẻ div chứa toàn bộ card phim
  const card = document.createElement("div");
  card.className = "relative bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition";

  // Gán nội dung HTML vào thẻ card
  card.innerHTML = `
    <img src="${movie.thumbnail}" alt="${movie.title}" class="w-full h-80 object-cover cursor-pointer" />
    <div class="p-4 text-center">
      <h3 class="text-lg font-semibold">${movie.title}</h3>
    </div>
    <button class="absolute top-2 right-2 text-xl favorite-btn" data-id="${movie.id}">
      ${isFav ? "❤️" : "🤍"}
    </button>
  `;

  // Gán sự kiện click cho ảnh phim – chuyển hướng sang trang xem phim
  card.querySelector("img").onclick = () => {
    window.location.href = `./Pages/movie/index.html?id=${movie.id}`;
  };

  // Gán sự kiện click cho nút yêu thích (trái tim)
  card.querySelector(".favorite-btn").onclick = (e) => {
    e.stopPropagation(); // Ngăn sự kiện click lan sang thẻ cha (ảnh)
    
    // Toggle (bật/tắt) trạng thái yêu thích cho phim
    toggleFavorite(movie.id);

    // Cập nhật lại biểu tượng trái tim sau khi toggle
    e.currentTarget.textContent = isFavorite(movie.id) ? "❤️" : "🤍";
  };

  return card;
}



// tạo danh sách phim nổi bật
phim_noi_bat.forEach(movie => {
  phimNoiBat.appendChild(createMovieCard(movie));
});
// tạo danh sách phim chiếu rạp
phim_chieu_rap.forEach(movie => {
  phimChieuRap.appendChild(createMovieCard(movie));
});
// tạo danh sách phim lẻ
phim_le.forEach(movie => {
  phimLe.appendChild(createMovieCard(movie));
});
// tạo danh sách phim Anime
phim_anime.forEach(movie => {
  phimAnime.appendChild(createMovieCard(movie));
});


//tạo dropdown list
// Hàm bật/tắt dropdown (hiện hoặc ẩn menu tương ứng với id được truyền vào)
function toggleDropdown(id) {
    const menu = document.getElementById(id); // Lấy element của menu cần hiển thị
    const isOpen = !menu.classList.contains('hidden'); // Kiểm tra menu hiện tại có đang mở không (ẩn = có class 'hidden')
    closeAllDropdowns(); // Đóng tất cả dropdown khác
    if (!isOpen) menu.classList.remove('hidden'); // Nếu menu đang ẩn, thì hiển thị ra (bỏ class 'hidden')
}
// Đóng tất cả dropdown menu đang mở
function closeAllDropdowns() {
    ['genreMenu', 'nationMenu'].forEach(id => { // Lặp qua id của các menu
        document.getElementById(id).classList.add('hidden'); // Ẩn tất cả bằng cách thêm class 'hidden'
    });
}




