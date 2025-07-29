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
