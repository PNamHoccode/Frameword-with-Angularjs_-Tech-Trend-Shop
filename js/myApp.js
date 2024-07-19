var app  = angular.module("myApp",['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when("/home",{
   
        templateUrl : 'home.html',
        
    })
    .when("/giohang",{      
            templateUrl : 'giohang.html',
                  
    })
    .when("/Listproducts",{      
        templateUrl : 'Listproducts.html',
              
    })
    .when("/login",{      
        templateUrl : 'view/login.html',
              
    })
    .when('/chitietsanpham/:productId', {
        templateUrl: 'view/chitietsanpham.html',
        controller: 'ProductDetailController'
    })
    
    .otherwise( 
    {
        redirectTo:'/home'
    })
});



app.controller("PhoneController", function ($scope) {
    $scope.phoneProducts = [
        {
            id: 1,
           
            image: "/image/banner_1.webp"
        },
        {
            id: 2,
            name: "Iphone 15 128 GB",
            price: 22278000,
            comparePrice: 31790000,
            discount: 30,
            image: "/image/dienthoai2.webp"
        },
        {
            id: 3,
            name: "Iphone 15 128 GB Yellow",
            price: 22278000,
            comparePrice: 31790000,
            discount: 20,
            image: "/image/dienthoai3.webp"
        },
        {
            id: 4,
            name: "Samsung S23 Ultra",
            price: 3578000,
            comparePrice: 1790000,
            discount: 20,
            image: "/image/dienthoai1.webp"
        },
        {
            id: 5,           
            image: "/image/banner_2.webp"
        },
        {
            id: 6,
            name: "Iphone 14promax",
            price: 107800,
            comparePrice: 15900000,
            discount: 20,
            image: "/image/dienthoai4.webp"
        },
        {
            id: 7,
            name: "Samsung A53G ",
            price: 5578000,
            comparePrice: 7590000,
            discount: 20,
            image: "/image/dienthoai5.webp"
        },
        {
            id: 8,
            name: "Samsung S23 Ultra",
            price: 3578000,
            comparePrice: 1790000,
            discount: 20,
            image: "/image/dienthoai6.webp"
        },
        
        // Thêm các sản phẩm điện thoại khác
    ];

    $scope.toggleHeart = function (productId) {
        // Xử lý toggle trạng thái yêu thích của sản phẩm có productId (điện thoại)
    };

    $scope.addToCart = function (productName, productPrice, productImage) {
        // Xử lý thêm sản phẩm vào giỏ hàng (điện thoại)
    };
});

app.controller("ShoeController", function ($scope) {
    $scope.shoeProducts = [
        {
            id: 1,
            name: "Nike Air Max",
            price: 1200000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/sp1.webp"
        },
        {
                        id: 'sp2',
                        type: "shoe",
                        image: '/image/sp2.webp',
                        discount: 20,
                        name: 'Kappa giày thể thao Nam/Nữ 001',
                        price: 690000,
                        comparePrice: 1790000
                    },
                    {
                        id: 'sp3',
                        type: "shoe",
                        image: '/image/sp3.webp',
                        discount: 20,
                        name: 'Kappa giày thể thao Nam/Nữ 001',
                        price: 690000,
                        comparePrice: 1790000
                    },
                    {
                        id: 'sp4',
                        type: "shoe",
                        image: '/image/sp4.webp',
                        discount: 20,
                        name: 'Kappa giày thể thao Nam/Nữ 001',
                        price: 690000,
                        comparePrice: 1790000
                    },
                    {
                        id: 'sp5',
                        type: "shoe",
                        image: '/image/sp5.webp',
                        discount: 20,
                        name: 'Kappa giày thể thao Nam/Nữ 001',
                        price: 690000,
                        comparePrice: 1790000
                    },
                    {
                        id: 'sp6',
                        type: "shoe",
                        image: '/image/sp6.webp',
                        discount: 20,
                        name: 'Kappa giày thể thao Nam/Nữ 001',
                        price: 690000,
                        comparePrice: 1790000
                    },
                    {
                        id: 'sp7',
                        type: "shoe",
                        image: '/image/sp7.webp',
                        discount: 20,
                        name: 'Kappa giày thể thao Nam/Nữ 001',
                        price: 690000,
                        comparePrice: 1790000
                    },
                  
        // Thêm các sản phẩm giày dép khác
    ];

    $scope.toggleHeart = function (productId) {
        // Xử lý toggle trạng thái yêu thích của sản phẩm có productId (giày dép)
    };

    $scope.addToCart = function (productName, productPrice, productImage) {
        // Xử lý thêm sản phẩm vào giỏ hàng (giày dép)
    };
});

app.controller("GiadungCtrl", function ($scope) {
    $scope.GdProducts = [
 
        {
            id: 1,
            name: "Nồi cơm mini",
            price: 1200000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/giadung1.webp"
        },
        {
            id: 2,
            name: "Máy Xay",
            price: 1200000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/mayxay.webp"
        },
        {
            id: 3,
            name: "May Xay Chậm",
            price: 1200000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/mayxayandam.webp"
        },
        {
            id: 4,
            name: "Nồi cơm điện tử",
            price: 1200000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/noicomdientu.jpg"
        },
        {
            id: 5,
            name: "noi nau cham",
            price: 1200000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/noinaucham.webp"
        },
        {
            id: 6,
            name: "Nồi cơm điện tử hàn quốc",
            price: 1200000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/noicomdientuu.jpg"
        },{
            id: 7,
            name: "Ấm Nấu nước siêu tốc",
            price: 1200000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/dogiadung2.jpg"
        },
        
        // Thêm các sản phẩm giày dép khác
    ];

    $scope.toggleHeart = function (productId) {
        // Xử lý toggle trạng thái yêu thích của sản phẩm có productId (giày dép)
    };

    $scope.addToCart = function (productName, productPrice, productImage) {
        // Xử lý thêm sản phẩm vào giỏ hàng (giày dép)
    };
});


app.controller("myyCtrl", function ($scope, CartService,$rootScope) {
    $rootScope.Products = [
 
        {
            id: 1,
            name: "Nồi cơm mini",
            price: 1200000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/giadung1.webp",
            provider: "Nhà cung cấp Sun House",
            category: "Điện gia dụng",
            isNew: true,
            quantity: 7
        },
        {
            id: 2,
            name: "Máy Xay",
            price: 1300000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/mayxay.webp",
            provider: "Nhà cung cấp Sun House",
            category: "Điện gia dụng",
            isNew: true,
            quantity: 7
        },
        {
            id: 3,
            name: "Iphone 15",
            price: 1400000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/dienthoai3.webp",
            provider: "Nhà cung cấp Apple",
            category: "Thiết Bị di Động",
            isNew: true,
            quantity: 35
        },
        {
            id: 4,
            name: "Nồi cơm điện tử",
            price: 1500000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/noicomdientu.jpg",
            provider: "Nhà cung cấp Sun House",
            category: "Điện gia dụng",
            isNew: true,
            quantity: 7
        },
        {
            id: 5,
            name: "noi nau cham",
            price: 1600000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/noinaucham.webp",
            provider: "Nhà cung cấp Sun House",
            category: "Điện gia dụng",
            isNew: true,
            quantity: 7
        },
        {
            id: 6,
            name: "Nồi cơm điện tử hàn quốc",
            price: 1700000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/noicomdientuu.jpg"
        },{
            id: 7,
            name: "Ấm Nấu nước siêu tốc",
            price: 1200000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/dogiadung2.jpg"
        },
        {
            id: 8,
            name: "SamSung S23Ultra",
            price: 6200000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/dienthoai1.webp"
        },
        {
            id: 9,
            name: "Iphone 15 Pro",
            price: 45000000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/dienthoai2.webp"
        },
        {
            id: 10,
            name: "Iphone 14",
            price: 23000000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/dienthoai3.webp"
        },
        {
            id: 11,
            name: "Iphone 14 Pro",
            price: 35000000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/dienthoai4.webp"
        },
        {
            id: 12,
            name: "Hawei A45s",
            price: 35000000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/dienthoai5.webp"
        },
        {
            id: 13,
            name: "SamSung A53G",
            price: 80000000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/dienthoai6.webp"
        },

        {
            id: 14,
            name: "Giày Andrex",
            price: 1200000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/sp2.webp"
        },
        {
            id: 15,
            name: "Adidas",
            price: 1200000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/sp3.webp"
        },
        {
            id: 16,
            name: "Jodan1",
            price: 4500000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/sp4.webp"
        },
        {
            id: 17,
            name: "NikeAF1",
            price: 1800000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/sp1.webp"
        },
        {
            id: 18,
            name: "BitisHunter",
            price: 1900000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/sp5.webp"
        },
        {
            id: 19,
            name: "Bitis",
            price: 600000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/sp6.webp"
        },
        {
            id: 20,
            name: "Gucci Quảng",
            price: 300000,
            comparePrice: 1500000,
            discount: 10,
            image: "/image/sp7.webp"
        },
        
        // Thêm các sản phẩm giày dép khác
    ];
    $scope.relatedProducts = [
        { id: 2, image: "/image/mayxayandam.webp" },
        { id: 3, image: "/image/dogiadung2.jpg "},
        { id: 4, image: "image/mayxayandam.webp" },
        { id: 5, image: "image/noicomdientu.jpg" },
       
     
    ];
    
   
    //Phân trang
    $rootScope.itemsPerPage = 8; // Số sản phẩm trên mỗi trang
$rootScope.currentPage = 1; // Trang hiện tại

$rootScope.totalPages = Math.ceil($scope.Products.length / $scope.itemsPerPage);

$rootScope.range = function () {
  var rangeSize = 5; // Hiển thị 5 trang cùng một lúc
  var start = $rootScope.currentPage;

  if (start > $rootScope.totalPages - rangeSize) {
    start = $rootScope.totalPages - rangeSize + 1;
  }

  var ret = [];
  for (var i = start; i < start + rangeSize; i++) {
    ret.push(i);
  }
  return ret;
};

$rootScope.setPage = function (page) {
  if (page >= 1 && page <= $rootScope.totalPages) {
    $rootScope.currentPage = page;
  }
  window.scrollTo(0, 0);
};


    // Thêm hàm xử lý sự kiện sắp xếp
    $scope.setSortOrder = function (field, reverse) {
        if (field === 'name') {
            $scope.sortOrder = $scope.firstLetter;
          } else {
            $scope.sortOrder = field;
          }
          $scope.reverseSort = reverse;
        };
        
        // Hàm trích xuất chữ cái đầu từ tên sản phẩm
        $scope.firstLetter = function (product) {
          return product.name.charAt(0).toLowerCase();
        };
        $rootScope.addToCart = function(product) {
            CartService.addToCart(product);
        };
    
        $rootScope.getCartItems = function() {
            return CartService.getCartItems();
        };
    
        $rootScope.getTotalQuantity = function() {
            return CartService.getTotalQuantity();
        };
    
        $rootScope.getTotalPrice = function() {
            return CartService.getTotalPrice();
        };
        $rootScope.removeCartItem = function(itemId) {
            CartService.removeCartItem(itemId);
        };
    
        $rootScope.updateCartItem = function(itemId, newQuantity) {
            CartService.updateCartItem(itemId, newQuantity);
        };
        
        
    
    
})

app.controller('MyController', function ($scope) {
    $scope.categories = [
            { image: '/image/imgsl1.webp', name: 'Điện thoại - Máy Tính' },
            { image: '/image/imgsl2.webp', name: 'Điện thoại - Máy Tính' },
            { image: '/image/imgsl3.webp', name: 'Điện thoại - Máy Tính' },
            { image: '/image/imgsl4.webp', name: 'Điện thoại - Máy Tính' },
            { image: '/image/icon5.webp', name: 'Điện thoại - Máy Tính' },
            { image: '/image/icon6.webp', name: 'Điện thoại - Máy Tính' },
            { image: '/image/icon7.webp', name: 'Điện thoại - Máy Tính' },
            { image: '/image/icon8.webp', name: 'Điện thoại - Máy Tính' },
            { image: '/image/icon9s.webp', name: 'Điện thoại - Máy Tính' },
            // Add more categories as needed
        ];
    });

    app.service('CartService', function() {
        var service = this;
    
        service.cartItems = [];
    
        service.addToCart = function(product) {
            var existingItem = service.cartItems.find(function(item) {
                return item.id === product.id;
            });
    
            if (existingItem) {
                existingItem.quantity++;
            } else {
                service.cartItems.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
        };
        service.getCartItems = function() {
            return service.cartItems;
        };
    
        service.getTotalQuantity = function() {
            return service.cartItems.reduce(function(sum, item) {
                return sum + item.quantity;
            }, 0);
        };
    
        service.getTotalPrice = function() {
            return service.cartItems.reduce(function(sum, item) {
                return sum + (item.price * item.quantity);
            }, 0);
        };
        service.removeCartItem = function(itemId) {
            service.cartItems = service.cartItems.filter(function(item) {
                return item.id !== itemId;
            });
        };
    
        service.updateCartItem = function(itemId, newQuantity) {
            var itemToUpdate = service.cartItems.find(function(item) {
                return item.id === itemId;
            });
    
            if (itemToUpdate) {
                itemToUpdate.quantity = newQuantity;
            }
        };
        
    
    
        return service;
    });
    //dang nhap
    app.controller('AuthController', function($scope) {
        $scope.user = {};
    
        $scope.submitForm = function() {
            if ($scope.loginForm.$valid) {
                // Process your login logic here
                console.log('Form submitted successfully');
            } else {
                console.log('Form submission failed. Please check the fields.');
            }
        };
    });
    app.controller('ProductDetailController', function ($scope, $routeParams, $rootScope) {
        var productId = $routeParams.productId;
    
        // Hàm lấy thông tin sản phẩm từ danh sách sản phẩm (đã được định nghĩa trong $rootScope)
        function getProductById(id) {
            for (var i = 0; i < $rootScope.Products.length; i++) {
                if ($rootScope.Products[i].id == id) {
                    return $rootScope.Products[i];
                }
            }
            return null;
        }
    
        // Gán thông tin sản phẩm cho $scope.product
        $scope.product = getProductById(productId);
    
        // Hàm thêm sản phẩm vào giỏ hàng
        $scope.addToCart = function (product) {
            // Thêm logic thêm sản phẩm vào giỏ hàng ở đây
            console.log('Đã thêm sản phẩm vào giỏ hàng:', product);
        };
    });
    


