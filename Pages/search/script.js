// Hàm tìm kiếm và hiển thị kết quả
function searchMovies(keyword) {
  const query = keyword.toLowerCase().trim();
  const resultContainer = document.getElementById("searchResults");
  resultContainer.innerHTML = "";

  if (query === "") return;

  const matched = movies.filter(movie =>
    movie.title.toLowerCase().startsWith(query)
  );

  if (matched.length === 0) {
    resultContainer.innerHTML = `<p class="col-span-5 text-center text-gray-400">Không tìm thấy phim nào.</p>`;
    return;
  }

  matched.forEach(movie => {
    const card = document.createElement("div");
    card.className ="bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200";
    card.innerHTML = `
      <img src="${movie.thumbnail}" alt="${movie.title}" class="w-full h-48 object-cover" />
      <div class="p-4 text-center">
        <h3 class="font-semibold text-lg">${movie.title}</h3>
      </div>
    `;
    card.addEventListener("click", () => {
      window.open(movie.video, "_blank");
    });
    resultContainer.appendChild(card);
  });
}

// Sự kiện sau khi DOM tải xong
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const button = document.getElementById("searchButton");

  button.addEventListener("click", () => {
    searchMovies(input.value);
  });

  input.addEventListener("keypress", e => {
    if (e.key === "Enter") searchMovies(input.value);
  });
});
