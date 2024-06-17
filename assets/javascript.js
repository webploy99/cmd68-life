
function detail(id){
  location.href = `detail.html?id=${id}`;
}
function url(){
  location.href = ('https://www.hay88.one/?inviteCode=1885333');
}
$(document).ready(function(){
  // const FunVisible = () => {
  //   if (window.pageYOffset > 250) {
  //     $(".header2").addClass("is-sticky");
  //   } else {
  //     $(".header2").removeClass("is-sticky");
  //   }
  // };
  // window.addEventListener("scroll", FunVisible);
  const header = `
    <div class="header1 w-full bg-white">
          <div class="container mx-auto flex flex-col-reverse py-8  md:block lg:py-10">
            <div class="flex justify-center md:justify-end">
              <button onclick="url()" type="button" class="text-white bg-[#2a8fbd] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-2xl px-6 py-3 text-center me-2 mb-2">ĐĂNG NHẬP</button>
              <button onclick="url()" type="button" class="text-white bg-[#cc001b] focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-2xl px-6 py-3 text-center me-2 mb-2">ĐĂNG KÝ</button>
            </div>
            <div class="flex justify-center">
              <a href="index.html">
                <img  class="max-w-[20rem] lg:max-w-[30rem]"  src="./assets/images/1.png" alt="Logo"/>
              </a>
            </div>
          </div>
        </div>
        <div class="container mx-auto relative" id="header2">
          <div class="header2 bg-[#2a8fbd]">
            <!-- toggle mobile -->
            <div class="menu-icon md:hidden flex justify-end items-center gap-3 p-4">
              <label class="hamburger">
                <svg viewBox="0 0 32 32">
                  <path
                    class="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  ></path>
                  <path class="line" d="M7 16 27 16"></path>
                </svg>
              </label>
              <p class="text-3xl text-white font-medium menu-icon cursor-pointer">MENU</p>
            </div>
            <!-- end toggle mobile -->
            <ul  class="items-center text-white font-medium text-2xl uppercase flex-wrap *:leading-10 *:p-5 hidden md:flex *:transition-all *:duration-500">
              <li class="relative "><a href="index.html" class="tittle_navbar">TRANG CHỦ</a></li>
              <li class="group relative hover:bg-[#4e505b47]">
                <a href="dangkycmd68.html" class="flex items-center">
                  <div class="mr-1 tittle_navbar">Đăng ký CMD68</div>
                </a>
              </li>
              <li class="group relative hover:bg-[#4e505b47]">
                <a href="naptien.html" class="flex items-center">
                  <div class="mr-1 tittle_navbar">Nạp tiền</div>
                </a>
              </li>
              <li class="relative hover:bg-[#4e505b47]"><a href="thethao.html" class="tittle_navbar">Thể thao</a></li>
              <li class="relative hover:bg-[#4e505b47]"><a href="casino.html" class="tittle_navbar">Casino</a></li>
              <li class="relative hover:bg-[#4e505b47]"><a href="cachchoi.html" class="tittle_navbar">Cách Chơi</a></li>
              <li class="relative hover:bg-[#4e505b47]"><a href="meocuoc.html" class="tittle_navbar">Mẹo Cược</a></li>
              <li class="relative hover:bg-[#4e505b47]"><a href="lienhe.html" class="tittle_navbar">Liên hệ</a></li>
            </ul>
          </div>
        </div>
  `;
  $("#header").html(header);
    const footer = `
       <footer class="bg-[#3d566e] pb-10">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-white text-3xl font-semibold">GIỚI THIỆU</h1>
              <hr class="border-white border-t-[1px]">
              <p class="text-white">CMD68 Us là một website chính thức của CMD68 tại Việt Nam cũng như Châu Á. Chúng tôi sẽ cung cấp những đường link vào CMD68 chất lượng và mới nhất mang lại sự uy tín cho khách hàng và nhà cái. Link vào gồm rất nhiều các gifcode khuyến mãi 50K, 100K thưởng chào mừng khi tham gia</p>
              <hr class="border-white border-t-[1px]">
              <p  class="text-white text-[1.4rem]">Hastag: #cmd68#cmd68_us #nha_cai_cmd68 #nha_cai #link_vao_cmd68 #cmd68_us#link_vao_cmd68_moi_nhat #link_cmd68#cmd68_khong_bi_chan</p>
            </div>
            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-white text-3xl font-bold">CÁC SẢN PHẨM</h1>
              <hr class="border-white border-t-[1px]">
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="thethao.html">Thể Thao</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="casino.html">Casino</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="khuyenmai.html">Khuyến mãi</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="nhanmienphi100k.html">Nhận miễn phí 100k</a></p>
              <h1 class="text-white text-3xl font-bold">KẾT NỐI</h1>
              <hr class="border-white border-t-[1px]">
              <div class=" grid grid-cols-2">
                <button onclick="url()" type="button" class="text-white flex items-center gap-2 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><i class="ri-facebook-circle-line text-xl"></i>facebook</button>
                <button onclick="url()" type="button" class="text-white flex items-center gap-2 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><i class="ri-youtube-line text-xl"></i>youtube</button>
                <button onclick="url()" type="button" class="text-white flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"><i class="ri-pinterest-line text-xl"></i> Pinterest</button>
                <button onclick="url()" type="button" class="text-white flex items-center gap-2 bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"><i class="ri-instagram-line text-xl"></i> instagram</button>
              </div>
            </div>
            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-white text-3xl font-bold">HỖ TRỢ</h1>
              <hr class="border-white border-t-[1px]">
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="dangkycmd68.html">Đăng Ký CMD68</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="naptien.html">Nạp Tiền CMD68</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="ruttiencmd68.html">Rút Tiền CMD68</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="kuyenmai20trieubongdavip.html">Khuyến mãi</a></p>
              <h1 class="text-white text-3xl font-bold">BẢO VỆ BẢN QUYỀN</h1>
              <hr class="border-white border-t-[1px]">
              <img src="./assets/images/dmca_protected_25_120.png" alt="">
            </div>
            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-white text-3xl font-bold">LIÊN HỆ</h1>
              <hr class="border-white border-t-[1px]">
                <p class="text-white">Địa điểm : 5 P. Yên Lạc, Vĩnh Tuy, Hai Bà Trưng, Hà Nội 100000, Việt Nam</p>
                <p class="text-white">Số điện thoại: +84584518686<p>
                <p class="text-white">Post Code: 550000</p>
                <p class="text-white">Website : <a href="https://cmd368.us/">https://cmd68.life/</a></p>
                <p class="text-white">Tác Giả : <a href="https://cmd368.us/tac-gia/">Phạm Tuấn CMD68</a></p>
                <h1 class="text-white text-3xl font-bold">BẢN ĐỒ</h1>
                <hr class="border-white border-t-[1px]">
              <div class="w-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15229.67428207065!2d106.63062363812031!3d10.812503615298978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skh!4v1718092552842!5m2!1sen!2skh" width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div
            </div>
          </div>

      </div>
      </footer>
      <footer class="bg-slate-800">
        <div class="container mx-auto py-5 lg:py-7">
          <p class="text-center text-white">Bản quyền © 2024 CMD68.life – Bản quyền thuộc về công ty CMD68</p>
        </div>
      </footer>
    `;
    const sidebar = `<div class="side-menu-mobile fixed top-0 -translate-x-full z-[1000] overflow-y-hidden transition-transform duration-500 ">
      <ul class="w-[60vw] bg-slate-100 h-screen">
        <div class="logo bg-white p-4">
          <img class="max-w-[150px]" src="./assets/images/CMD368_VN.png" alt="">
        </div>
        <li>
          <a href="index.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200">
            <span class="ml-3">TRANG CHỦ</span>
          </a>
        </li>
        <li>
          <button type="button" class="flex items-center w-full px-5 py-5 text-2xl font-semibold text-gray-900  rounded-lg hover:bg-gray-200" >
            <a  href="dangkycmd68.htmlcasino.html"  class="flex-1 ml-3 text-left whitespace-nowrap">ĐĂNG KÝ CMD368</a>
            <svg
              class="w-10 h-10 icon-dropdown-side-menu-mobile transition-all duration-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <ul  class=" sub-menu-side-menu-mobile  py-2 space-y-2  *:px-14 *:py-4 *:flex *:items-center *:w-full *:text-2xl *:font-medium *:text-gray-800  *:rounded-lg">
            <li class="hover:bg-gray-200 "><a onclick="url()" class="cursor-pointer">Tặng miễn phí 100k</a></li>
            <li class=" hover:bg-gray-200"><a onclick="url()" class="cursor-pointer">Khuyến mãi</a></li>
          </ul>
        </li>
        <li>
          <button type="button" class="flex items-center w-full px-5 py-5 text-2xl font-semibold text-gray-900  rounded-lg hover:bg-gray-200" >
            <a  href="naptien.html.html"  class="flex-1 ml-3 text-left whitespace-nowrap">Nạp tiền</a>
            <svg
              class="w-10 h-10 icon-dropdown-side-menu-mobile transition-all duration-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <ul  class=" sub-menu-side-menu-mobile  py-2 space-y-2  *:px-14 *:py-4 *:flex *:items-center *:w-full *:text-2xl *:font-medium *:text-gray-800  *:rounded-lg">
            <li class="hover:bg-gray-200 "><a onclick="url()" class="cursor-pointer">Rút tiền</a></li>
          </ul>
        </li>
        <li>
          <a  href="./thethao.html"
            class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200"
          >
            <span class="ml-3">Thể thao</span>
          </a>
        </li>
        <li>
          <a
            href="casino.html"
            class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200"
          >
            <span class="ml-3">Casino</span>
          </a>
        </li>
        <li>
          <a  href="cachchoi.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200">
            <span class="ml-3">Cách Chơi</span>
          </a>
        </li>
        <li>
          <a  href="meocuoc.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200">
            <span class="ml-3">Mẹo Cược</span>
          </a>
        </li>
        <li>
          <a  href="lienhe.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200">
            <span class="ml-3">Liên hệ</span>
          </a>
        </li>
      </ul>
    </div>`;
    $("#side-bar").html(sidebar);
 
  $("#footer").html(footer);
  const content_right = `
  <div class="button">
                <button type="button" class="flex items-center justify-center text-white text-xl font-semibold gap-5 bg-[#2e78c7] hover:bg-[#2e78c7d1] py-1 px-4 w-full border-2 border-[#4db6f5] rounded-xl transition-all duration-300" >
                  <i class="ri-logout-box-r-line text-3xl "></i>  THÔNG TIN NHÀ CÁI CMD68
                </button>
              </div>
              <h4 class="text-red-600 text-lg font-bold">GIỚI THIỆU VỀ CMD68 US</h4>
              <p><b>Trụ sở:</b>  Philippines</p>
              <p><b>GIẤY CHỨNG NHẬN:</b> FIRST CAGAYAN LEISURE & RESORT CORPORATION</p>
              <h3 class="text-xl"> <b>TÀI TRỢ:</b> ĐỘI TUYỂN MANCHESTER CITY</h3>
              <h3 class="text-xl"> <b>KÈO BÓNG ĐÁ::</b> KÈO CHẤP, TÀI XỈU, 1X2...</h3>
              <h3 class="text-xl"> <b>CASINO::</b> BACCARAT, ROULETTE, BLACJACK, POKER...</h3>
              <h3 class="text-xl"> <b>KHUYẾN MÃI:</b> 160% TỚI 6,5TR VND | 100K MIỄN PHÍ</h3>
              <h3 class="text-xl"> <b>PHƯƠNG THỨC THANH TOÁN:</b> CHUYỂN KHOẢN NH, MOMO, THẺ CÀO ĐT, THẺ GAME, TIỀN ĐIỆN TỬ USDT</h3>
              <h3 class="text-xl"> <b>HỖ TRỢ:</b> LIVECHAT 24/7 | EMAIL: CMD68INFO@GMAIL.COM</h3>
              <div class="button">
                <button type="button" class="flex items-center justify-center text-white text-xl font-semibold gap-5 bg-[#2e78c7] hover:bg-[#2e78c7d1] py-1 px-4 w-full border-2 border-[#4db6f5] rounded-xl transition-all duration-300" >
                  <i class="ri-logout-box-r-line text-3xl "></i>   CÁCH CHƠI CMD68
                </button>
              </div>
              <div class="*:my-5">

                <div class="flex gap-5">
                  <div class="min-w-20">
                  <img onclick="detail(4)" class="cursor-pointer h-fit"  src="./assets/images/nap-tien-cmd368-nhan-vong-quay-mien-phi-60x60.jpg" alt=""></div>
                  <div>
                    <h4 onclick="detail(4)" class="hover:text-[#626262] cursor-pointer"><i class="ri-play-circle-line text-2xl mr-2"></i>Nạp Tiền CMD68 Nhận Vòng Quay Miễn Phí Hốt Iphone 15 Pro</h4>
                    <span class="text-[1rem]">Tháng Tư 13, 2024</span>
                  </div>
                </div>
                <div class="flex gap-5">
                  <div class="min-w-20">
                  <img onclick="detail(9)" class="cursor-pointer" src="./assets/images/hoan-cuoc-thua-cmd368-23-trieu-60x60.jpg" alt=""></div>
                  <div>
                    <h4 onclick="detail(9)" class="hover:text-[#626262] cursor-pointer"><i class="ri-play-circle-line text-2xl mr-2"></i>Hoàn Cược Thua CMD68 23 Triệu Dành Cho Mọi Đối Tượng</h4>
                    <span class="text-[1rem]">Tháng Tư 13, 2024</span>
                  </div>
                </div>
                <div class="flex gap-5">
                  <div class="min-w-20">
                  <img onclick="detail(10)" class="cursor-pointer" src="./assets/images/khuyen-mai-tai-nap-cmd368-60x60.jpg" alt=""></div>
                  <div>
                    <h4 onclick="detail(10)" class="hover:text-[#626262] cursor-pointer"><i class="ri-play-circle-line text-2xl mr-2"></i>Khuyến Mãi Tái Nạp CMD68 Hàng Ngày Tại Các Ví Game</h4>
                    <span class="text-[1rem]">Tháng Tư 13, 2024</span>
                  </div>
                </div>
                <div class="flex gap-5">
                  <div class="min-w-20">
                    <img onclick="detail(11)" class="cursor-pointer" src="./assets/images/khuyen-mai-20-trieu-bong-da-vip-60x60.jpg" alt="">
                  </div>
                  <div>
                    <h4 onclick="detail(11)" class="hover:text-[#626262] cursor-pointer"><i class="ri-play-circle-line text-2xl mr-2"></i>Lưu ý khi nhận tiền thưởng khuyến mãi 20 triệu bóng đá VIPKhuyến...</h4>
                    <span class="text-[1rem]">Tháng Tư 13, 2024</span>
                  </div>
                </div>
                <div class="flex gap-5">
                  <div class="min-w-20">
                    <img onclick="detail(12)" class="cursor-pointer" src="./assets/images/thuong-120-the-thao-cmd368-60x60.jpg" alt="">
                  </div>
                  <div>
                    <h4 onclick="detail(12)" class="hover:text-[#626262] cursor-pointer"><i class="ri-play-circle-line text-2xl mr-2"></i>Thưởng 120% Thể Thao CMD68 Lên Tới 6 Triệu Cực Khủng</h4>
                    <span class="text-[1rem]">Tháng Tư 13, 2024</span>
                  </div>
                </div>

              </div>
              <hr class="border-t-2 border-black">
  `;
  $("#content_right").html(content_right);
  const backtotop = `<button class="Btn-backtotop1">
          <svg class="Btn-backtotop1arrow h-7 w-7" viewBox="0 0 512 512">
            <path
              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            ></path>
          </svg>
          <p class="Btn-backtotop1text">Back to Top</p>
  </button>`;
  $("#backtotop").html(backtotop);
  var btn = $(".Btn-backtotop1");
  $(window).scroll(function () {
      if ($(window).scrollTop() > 250) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
  });
  btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "600");
  }); 
  

  $('.header2 > ul.items-center > li').each(function() {
    a = $(this).find(".tittle_navbar").text();
    if(active == a){
      $(this).addClass('bg-[#4e505b]');
    }
  });
  
  $(".menu-icon").on("click", function () {
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(".side-menu-mobile").addClass("-translate-x-full");
    }
    else{
        $(this).addClass("active");
        $(".side-menu-mobile").removeClass("-translate-x-full");
    }
  });
  $(document).on("click", function (event) {
      if (!$(event.target).closest(".side-menu-mobile").length && !$(event.target).closest(".menu-icon").length ) {
        $(".menu-icon").removeClass("active");
        $(".side-menu-mobile").addClass("-translate-x-full");
      }
    });
    $(".icon-dropdown-side-menu-mobile").on("click", function(){
        $(this).toggleClass("rotate-180");
        $(this).closest("li").find('ul').toggleClass('active');
    })











    $('#showloading').delay(500).queue(function(next) {
      $(this).addClass('hidden');
      next();
    });

});

