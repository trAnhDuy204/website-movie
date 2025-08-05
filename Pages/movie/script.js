const params = new URLSearchParams(window.location.search);
const movieId = parseInt(params.get("id"));
const movie = kho_phim.find((m) => m.id === movieId);

if (movie) {
  document.getElementById("movie-title").textContent = movie.title;

  const videoPlayer = document.getElementById("video-player");
  const youtubePlayer = document.getElementById("youtube-player");

  videoPlayer.classList.add("hidden");
  videoPlayer.src = "";
  youtubePlayer.classList.add("hidden");
  youtubePlayer.src = "";

  // Nếu có file video
  if (movie.video) {
    videoPlayer.src = movie.video;
    videoPlayer.classList.remove("hidden");
  }
  // Nếu chỉ có trailer YouTube
  else if (movie.trailer) {
    youtubePlayer.src = movie.trailer;
    youtubePlayer.classList.remove("hidden");
  } else {
    document.body.innerHTML += `<p class="text-red-500 mt-4">Không có dữ liệu video hoặc trailer cho phim này.</p>`;
  }

} else {
  document.body.innerHTML = "<h2 class='text-center mt-10 text-xl text-red-500'>Phim không tồn tại!</h2>";
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
