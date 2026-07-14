// เปิดรูปเมื่อคลิก
const images = document.querySelectorAll(".gallery img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");

images.forEach((img) => {
    img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
    });
});

// ปิดรูปเมื่อคลิกพื้นหลัง
popup.addEventListener("click", () => {
    popup.style.display = "none";
});

// เอฟเฟกต์เลื่อนหน้าจอ
const cards = document.querySelectorAll(".card, .gallery img");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.7s ease";
    observer.observe(card);
});
