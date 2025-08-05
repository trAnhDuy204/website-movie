// Hàm lấy danh sách phim yêu thích từ localStorage
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
}

// Hàm lưu danh sách phim yêu thích vào localStorage
function saveFavorites(favs) {
  // Dùng JSON.stringify để chuyển mảng thành chuỗi và lưu vào localStorage
  localStorage.setItem("favorites", JSON.stringify(favs));
}

// Hàm kiểm tra một bộ phim có nằm trong danh sách yêu thích hay không
function isFavorite(id) {
  // Kiểm tra xem id có nằm trong mảng 'favorites' hay không
  return getFavorites().includes(id);
}

// Hàm bật / tắt trạng thái yêu thích của một bộ phim
function toggleFavorite(id) {
  // Lấy danh sách phim yêu thích hiện tại
  const favs = getFavorites();

  // Tìm vị trí của id trong mảng favorites
  const idx = favs.indexOf(id);

  if (idx === -1) {
    // Nếu chưa có trong danh sách, thêm id vào (=> đánh dấu yêu thích)
    favs.push(id);
  } else {
    // Nếu đã có rồi, xóa khỏi mảng (=> bỏ yêu thích)
    favs.splice(idx, 1);
  }

  // Lưu danh sách mới vào localStorage
  saveFavorites(favs);
}
