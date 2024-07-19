
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav:false,
    responsiveClass: true,
    dots:false,
    responsive: {
      0: {
        items: 4,
       
      },
      600: {
        items: 6,
       
      },
      1000: {
        items: 8,
       
        loop: false,
        margin: 20
      }
    }
  })
})


var likedProducts = {};

function toggleHeart(imgContainer) {
var heartIcon = imgContainer.querySelector('.heart-icon');
var isLiked = heartIcon.classList.toggle("clicked");

// Lưu trạng thái thích của sản phẩm
likedProducts[imgContainer.dataset.productId] = isLiked;

if (isLiked) {
alert("Bạn đã thích sản phẩm này!");
} else {
alert("Bạn đã không thích sản phẩm này nữa.");
}

// Lưu trạng thái thích vào local storage
localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
}

// Kiểm tra nếu đã thích sản phẩm trước đó, thì đặt lại màu sắc trái tim
function checkLikedProducts() {
var storedLikedProducts = localStorage.getItem('likedProducts');

if (storedLikedProducts) {
likedProducts = JSON.parse(storedLikedProducts);

for (var productId in likedProducts) {
  if (likedProducts[productId]) {
    var imgContainer = document.querySelector('[data-product-id="' + productId + '"]');
    if (imgContainer) {
      imgContainer.querySelector('.heart-icon').classList.add('clicked');
    }
  }
}
}
}

// Kiểm tra nếu có sản phẩm được thích từ trước
checkLikedProducts();


// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
// Hide the loader after a delay (you can adjust the delay as needed)
setTimeout(function () {
    document.getElementById("page-loader").classList.add("hidden-loader");
}, 1000); // 1000 milliseconds = 1 second
});

window.addEventListener('scroll', function() {
  // Lấy chiều cao của trang web và vị trí cuộn
  var windowHeight = document.documentElement.scrollHeight - window.innerHeight;
  var scrollPosition = window.scrollY;

  // Tính toán giá trị của thanh tiến trình
  var progressValue = (scrollPosition / windowHeight) * 100;

  // Cập nhật thanh tiến trình
  var progressBar = document.querySelector('.progress-bar');
  progressBar.style.width = progressValue + '%';
  progressBar.setAttribute('aria-valuenow', progressValue);
});
// hien thi alter sau khi loading xonh
window.addEventListener('load', function () {
  // Ẩn loader
  document.getElementById('page-loader').style.display = 'none';

  // Hiển thị alert với hiệu ứng fade
  var successAlert = document.getElementById('successAlert');
  successAlert.classList.remove('d-none');
  successAlert.classList.add('show', 'fade');

  // Ẩn alert sau 5 giây
  setTimeout(function () {
      successAlert.classList.remove('show');
      successAlert.classList.add('fade', 'd-none');
  }, 5000);

  // Thiết lập vị trí cuộn về đầu trang sau khi load lại trang
  window.scrollTo(0, 0);
});
//toast-----------

// Định nghĩa biến cart và totalPrice nếu chưa có
let cart = [];
let totalPrice = 0;

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalPrice += price;

    // Cập nhật giỏ hàng
    updateCart();
}

// Hàm cập nhật nội dung giỏ hàng
function updateCart() {
    // Cập nhật giỏ hàng tại đây (ví dụ: cập nhật badge hiển thị tổng giá trị giỏ hàng)
    console.log("Cart updated:", cart);
}
function addToCartAndRedirect(productName, price) {
  addToCart(productName, price);
  window.location.href = "giohang.html"; // Chuyển hướng đến trang giỏ hàng
}
function addToCart(productName, price) {
  // Tạo đối tượng sản phẩm
  const product = {
    name: productName,
    price: price
  };

  // Kiểm tra xem giỏ hàng đã được lưu trong localStorage chưa
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Thêm sản phẩm vào giỏ hàng
  cart.push(product);

  // Lưu giỏ hàng vào localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Chuyển hướng tới trang giỏ hàng
  window.location.href = 'giohang.html';
}
