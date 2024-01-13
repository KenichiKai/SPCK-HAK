const data = [
  {
    name: "Bitexco SkyDeck",
    type: "hotPlace",
    image: "./images/29.jpg",
    about:
      "Tầng quan sát mang đến tầm nhìn ngoạn mục 360 độ của Thành phố Hồ Chí Minh. Skydeck Sài Gòn mở cửa hàng ngày và giá vé khoảng $10 😜",
  },
  {
    name: "Công Viên Đầm Sen",
    type: "hotPlace",

    image: "./images/kk.png",
    about:
      "Công viên văn hóa Đầm Sen, một công viên giải trí đồ sộ ở Thành phố Hồ Chí Minh, Việt Nam, có hình dáng kết hợp rực rỡ giữa văn hóa Đông Tây và một chút vẻ đẹp La Mã 🤽.",
  },
  {
    name: "Phố đi bộ nguyễn Huệ",
    type: "hotPlace",

    image: "./images/nguyen-hue-street-2.jpg",
    about:
      "Một sự pha trộn quyến rũ giữa nét quyến rũ của thế giới cũ với các tòa nhà lịch sử và sự tương phản nổi bật của các tòa nhà chọc trời hiện đại nằm dọc hai bên🚶.",
  },
  {
    name: "Little Japan Saigon",
    type: "hotPlace",

    image: "./images/japan.png",
    about:
      "Một nơi ẩn náu yên tĩnh ở trung tâm thành phố, cách xa những con phố đông đúc và trung tâm mua sắm sang trọng. Nếu không có dòng địa chỉ bằng tiếng Việt, chắc chắn bạn sẽ tưởng mình đang đứng giữa một góc Tokyo 🎎.",
  },
  {
    name: "Cruise the Saigon River",
    type: "hotPlace",

    image: "./images/saigon-princess-outside.jpg",
    about:
      "Với nội thất hiện đại nhưng mang phong cách châu Âu cổ điển, du thuyền có 4 tầng và là nơi tận hưởng không gian yên tĩnh của sông Sài Gòn vào ban ngày, hay sàn nhảy, sân khấu âm nhạc hay thời trang vào ban đêm⛴",
  },
  {
    name: "Thảo Cầm Viên",
    type: "hotPlace",

    image: "./images/DI01170835240705PM.jpg",
    about:
      "Với nội thất hiện đại nhưng mang phong cách châu Âu cổ điển, du thuyền có 4 tầng và là nơi tận hưởng không gian yên tĩnh của sông Sài Gòn vào ban ngày, hay sàn nhảy, sân khấu âm nhạc hay thời trang vào ban đêm⛴",
  },
  {
    name: "Xe máy",
    type: "transport",
    image: "./images/transport1.png",
    about:
      "Thành phố Hồ Chí Minh nổi tiếng với các tour du lịch bằng xe máy, cho phép bạn tận hưởng vẻ đẹp và môi trường của Việt Nam trong khi cảm thấy sảng khoái 🛵 .",
  },
  {
    name: "Xe buýt Hop-on Hop off",
    type: "transport",

    image: "./images/transport2.jpg",
    about:
      "Một phương pháp nhanh chóng và đơn giản để tham quan tất cả các điểm tham quan chính của thành phố. Tận hưởng sự tự do của chuyến đi xe buýt trong ngày để khám phá các điểm tham quan của thành phố một cách thoải mái 🚌.",
  },
  {
    name: "Xe đạp",
    type: "transport",

    image: "./images/transport3.png",
    about:
      "Ngoài xe máy, Thành phố Hồ Chí Minh còn nổi tiếng với số lượng lớn xe đạp. Loại phương tiện giao thông này phổ biến trong tầng lớp lao động và trẻ em. Bạn có thể vừa tập thể dục vừa ngắm cảnh 🚲.",
  },
  {
    name: "Xe xích lô",
    type: "transport",

    image: "./images/transport4.png",
    about:
      "Bên cạnh tất cả các phương tiện di chuyển trên, một chuyến tham quan bằng xích lô là điều không thể bỏ qua bất cứ khi nào bạn đến thăm Việt Nam, dù ở Hà Nội hay Thành phố Hồ Chí Minh. Bạn có thể quan sát và chụp ảnh đường phố và con người dễ dàng hơn, đồng thời bạn có thể trải nghiệm văn hóa, môi trường của Việt Nam và thử những điều mới.",
  },
  {
    name: "Tho Nhi Ky food street",
    type: "food",
    image: "/images/food1.jpg",
    about:
      "Chợ vặt Hồ Thị Kỷ nổi tiếng với con phố đầy những món ăn thời thượng với giá rẻ bất ngờ. Tuy có nhiều người nhưng trải nghiệm lang thang tìm đồ ăn cũng khá hấp dẫn nên địa điểm này thu hút rất nhiều người 🤤🚶",
  },
  {
    name: "Pho",
    type: "food",

    image: "./images/food2.jpg",
    about:
      "Mọi người đều quen thuộc với món Phở, một món ăn truyền thống mang tính biểu tượng của Việt Nam. Trong số 40 món ăn nhất định phải thử trên thế giới, phở là món phở mềm kết hợp được gọi là “bánh phở” với thịt bò hoặc thịt gà, các loại rau thơm truyền thống và nước luộc thịt heo 🍜.   ",
  },
  {
    name: "Bánh mỳ",
    type: "food",

    image: "./images/food3.jpg",
    about:
      "Món bánh cuốn hoặc bánh sandwich đặc trưng của Việt Nam là sự kết hợp của các loại thịt và rau củ từ ẩm thực bản địa Việt Nam như chả lụa, ngò, dưa chuột, cà rốt ngâm, củ cải muối kết hợp với các gia vị từ ẩm thực Pháp như pate, cùng ớt đỏ. và mayonaise. nhiều loại nhân phổ biến cũng được sử dụng 🥖.",
  },
  {
    name: "Cơm tấm",
    type: "food",

    image: "./images/food4.jpg",
    about:
      "Cơm tấm được bày ra đĩa và người ăn phải dùng nĩa, thìa để nếm thử món ăn theo phong cách của người phương Tây, thêm thịt lợn hoặc sườn nướng kiểu Pháp, trứng ốp lết của người Hoa, da heo hoặc thịt thính của người miền Bắc và nước mắm đặc trưng của người miền Nam. Đó là sự kết hợp độc đáo và kỳ diệu nhất để tạo nên hương vị tuyệt vời nhất từ trước đến nay cho món ăn 🍚.",
  },
  {
    name: "Cà phê",
    type: "food",

    image: "./images/food5.jpg",
    about:
      "Theo truyền thống, cà phê Việt Nam được biết đến với độ rang đậm. Quá trình rang thường bao gồm các hương vị bổ sung như Sữa, mocha, rau diếp xoăn, vani, bơ hoặc thậm chí là rượu whisky ☕.",
  },
  {
    name: "Bún bò",
    type: "food",

    image: "./images/food7.jpg",
    about:
      "Thành phần chính của nó bao gồm bún thịt bò và thịt lợn và có hương vị chủ yếu của sả, một loại thảo mộc tự nhiên. Nước dùng được chế biến bằng cách ninh xương bò, bắp bò với sả.",
  },
  {
    name: "Nhà thờ Đức Bà",
    type: "city",
    image: "./images/atc1.jpg",
    about:
      "Nhà thờ Đức Bà Việt Nam được vinh danh là một trong 19 thánh đường hoành tráng nhất thế giới, đại diện duy nhất đến từ Đông Nam Á. Kiệt tác lâu đời này, được coi là biểu tượng kiến trúc của Thành phố Hồ Chí Minh, thu hút một lượng lớn khách du lịch mới mỗi ngày, những người tìm kiếm những điểm chụp ảnh hùng vĩ, linh thiêng và mê hoặc cổ kính.",
  },
  {
    name: "Bưu cục Trung tâm Sài Gòn",
    type: "city",

    image: "./images/atc2.jpg",
    about:
      "Nhà thờ Đức Bà Việt Nam được vinh danh là một trong 19 thánh đường hoành tráng nhất thế giới, đại diện duy nhất đến từ Đông Nam Á. Kiệt tác lâu đời này, được coi là biểu tượng kiến trúc của Thành phố Hồ Chí Minh, thu hút một lượng lớn khách du lịch mới mỗi ngày, những người tìm kiếm những điểm chụp ảnh hùng vĩ, linh thiêng và mê hoặc cổ kính.",
  },
  {
    name: "Dinh Độc Lập",
    type: "city",

    image: "./images/atc3.jpg",
    about:
      "Trong chiến tranh Việt Nam, Dinh Độc Lập từng là nơi ở và làm việc của Tổng thống miền Nam Việt Nam Nguyễn Văn Thiệu. Nó được chỉ định là di tích lịch sử vì đã chứng kiến những thay đổi đáng kể trong lịch sử Sài Gòn và lưu giữ tinh hoa của văn hóa phương Đông.",
  },
  {
    name: "Hội trường Thành phố Hồ Chí Minh",
    type: "city",

    image: "./images/atc4.jpg",
    about:
      "Tòa nhà Ủy ban nhân dân là điểm đến lý tưởng cho những ai yêu thích vẻ đẹp của những công trình kiến trúc cổ kính và di tích lịch sử. ",
  },
  {
    name: "Bảo tàng Lịch sử",
    type: "city",

    image: "./images/atc5.jpg",
    about:
      "Bảo tàng Lịch sử Thành phố Hồ Chí Minh được biết đến như một nơi lưu giữ các giá trị di sản văn hóa dân tộc kể từ thời vua Hùng cho đến nay, được đông đảo khách tham quan trong nước và quốc tế yêu thích. Không chỉ ngắm nhìn các hiện vật và hiểu thêm về lịch sử, địa điểm nổi tiếng ở Sài Gòn này còn hứa hẹn sẽ mang đến những phút giây chiêm nghiệm ý nghĩa.",
  },
  {
    name: "Hầm Củ Chi",
    type: "city",

    image: "./images/atc6.jpg",
    about:
      "Địa đạo Củ Chi Sài Gòn được vinh danh trong TOP 7 điểm đến mạo hiểm nhất Đông Nam Á và TOP 12 kỳ quan lòng đất hấp dẫn nhất thế giới. Quần thể đường hầm có tuổi đời hàng chục năm này giống như một mê cung ẩn giấu phức tạp, nơi du khách có thể nhìn thoáng qua lịch sử đầy biến động của Việt Nam như thể đang du hành trở lại thời chiến.",
  },
  {
    name: "Chợ Bến Thành",
    type: "city2",

    image: "./images/project.jpg",
    about:
      "Là một trong những khu chợ nổi tiếng nhất ở Việt Nam, chợ Bến Thành mang trong mình nền văn hóa phong phú và bầu không khí sôi động. Đọc tiếp để tìm tất cả thông tin bạn cần để tận dụng tối đa chuyến thăm của bạn đến điểm tham quan mang tính biểu tượng này ở Thành phố Hồ Chí Minh.",
  },
  {
    name: "Bảo tàng nghệ thuật 3D",
    type: "city2",

    image: "./images/atc7.jpg",
    about:
      "Bảo tàng độc đáo, thân thiện với gia đình có tác phẩm nghệ thuật 3D và tranh tường đầy màu sắc để chụp ảnh tương tác. Các tác phẩm trong Bảo tàng nghệ thuật 3D Artinus chủ yếu được làm bằng sơn mài, sơn trực tiếp lên tường. Chúng được bố trí ở độ cao hợp lý để đánh lừa thị giác của du khách. Dưới sự phản chiếu của ánh sáng, tranh 3D tạo hiệu ứng chuyển động, mang lại cảm giác chân thực rất sống động cho người xem",
  },
  {
    name: "Đường sách Nguyễn Văn Bình",
    type: "city2",

    image: "./images/atc8.jpg",
    about:
      "Nằm ngay trung tâm thành phố, phố sách TP.HCM trải dài 100m từ đường Hai Bà Trưng đến Nhà thờ Đức Bà, gây ấn tượng sâu sắc không chỉ với người yêu sách mà cả khách du lịch thường xuyên. Bên cạnh việc hòa mình vào thế giới sách, bạn có thể ngồi thưởng thức một ngụm đồ uống trong không gian tĩnh lặng. Nơi này cũng rất gần với một số điểm đến không thể bỏ qua ở Thành phố Hồ Chí Minh. ",
  },
  {
    name: "Bảo tàng Chứng tích Chiến tranh",
    type: "city2",

    image: "./images/atc9.jpg",
    about:
      "Bảo tàng Chứng tích Chiến tranh là bảo tàng được ghé thăm nhiều nhất trong nhiều năm tại Thành phố Hồ Chí Minh. Để tìm hiểu về Chiến tranh Việt Nam - cuộc chiến có ý nghĩa chính trị to lớn trong lịch sử thế giới hiện đại - nhiều du khách, đặc biệt là du khách phương Tây đã tìm đến bảo tàng để tìm hiểu xem Việt Nam có thể giành chiến thắng vang dội trước Mỹ và hậu quả sau đó như thế nào.",
  },
  {
    name: "Nhà hát Thành phố",
    type: "city2",

    image: "./images/atc10.jpg",
    about:
      "Được xây dựng vào năm 1898 theo phong cách “rực rỡ” của Cộng hòa thứ 3 của Pháp, Nhà hát Lớn Sài Gòn đã được chứng nhận Di tích Quốc gia & là một trong những điểm tham quan hàng đầu của Thành phố Hồ Chí Minh. ",
  },
  {
    name: "A Ố Show",
    type: "city2",

    image: "./images/atc11.jpg",
    about:
      "Cái tên 'A Ố' bắt nguồn từ 'Lang Pho', có nghĩa là 'làng và thành phố'. Chương trình khắc họa vẻ đẹp quyến rũ và sự phong phú về văn hóa của đời sống nông thôn người Việt Nam, đối lập với tốc độ đô thị hóa nhanh chóng của đất nước. Chương trình là sự kết hợp độc đáo giữa xiếc tre, nhào lộn, múa và nghệ thuật tạo hình sân khấu. Nhạc sống vang vọng những bài hát lao động miền Nam Việt Nam. Nhìn chung, sự pha trộn tuyệt vời giữa các thể loại này đã tạo nên một ngôn ngữ sân khấu độc đáo, nắm bắt được bản chất của nền văn hóa hấp dẫn của Việt Nam. ",
  },

  {
    name: "Chợ Bến Thành mua sắm",
    type: "market",

    image: "./images/shopping1.jpg",
    about:
      "Là khu chợ mang tính biểu tượng và nổi tiếng nhất trong thành phố, chợ Bến Thành là một trung tâm sôi động thể hiện bản chất mua sắm ở Thành phố Hồ Chí Minh. Đây là một kho báu dành cho những người mua sắm đang tìm kiếm nhiều loại hàng hóa, từ đồ lưu niệm bằng lụa Việt Nam đến những món quà lưu niệm đậm chất Việt Nam khác.",
  },
  {
    name: "Trung tâm thương mại Vincom",
    type: "market",

    image: "./images/shopping2.jpg",
    about:
      "Mang đến sự sang trọng, đa dạng và tiện lợi. Với kiến trúc hiện đại, bầu không khí sôi động và các dịch vụ đa dạng, Vincom Center mang đến trải nghiệm mua sắm thú vị cho du khách đang tìm kiếm các mặt hàng thời trang tinh tế, đồ điện tử, trang trí nhà cửa, v.v.",
  },
  {
    name: "Chợ Bình Tây",
    type: "market",

    image: "./images/shopping3.jpg",
    about:
      "Khu chợ sôi động này chuyên kinh doanh nhiều loại hàng hóa, bao gồm hàng dệt, vải, gia vị và sản phẩm địa phương. Ngoài ra, chợ Bình Tây là nơi tuyệt vời để nếm thử các món ăn đường phố địa phương, cung cấp nhiều món ăn truyền thống ngon lành của Việt Nam.",
  },
  {
    name: "Chợ Nga",
    type: "market",

    image: "./images/shopping4.jpg",
    about:
      "Ngoài ra, khu chợ này còn là kho báu dành cho những người yêu thích đồ thủ công, với nhiều loại đồ thủ công, đồ trang trí nhà cửa và phụ kiện đầy ấn tượng. Cho dù bạn đang săn lùng những món quà lưu niệm độc đáo, chợ An Đông là điểm đến không thể bỏ qua để có trải nghiệm mua sắm đáng nhớ tại Thành phố Hồ Chí Minh.",
  },
  {
    name: "Chợ An Đông",
    type: "market",
    image: "./images/shopping5.jpg",
    about:
      "Mặc dù có tên như vậy nhưng chợ này không cung cấp nhiều sản phẩm của Nga mà chủ yếu cung cấp nhiều lựa chọn quần áo mùa đông. Với ba tầng và được thành lập vào năm 2000, Chợ Nga thu hút cả người dân địa phương và khách du lịch đang tìm kiếm hàng may mặc thời trang và giá cả phải chăng.",
  },
];

const hotPlace = document.getElementById("hotPlace");
const transport = document.getElementById("transport");
const food = document.getElementById("food");
const city = document.getElementById("city");
const city2 = document.getElementById("city2");

const market = document.getElementById("market");

function renderData() {
  for (i in data) {
    console.log(data[i].type);
    if (data[i].type == "hotPlace") {
      hotPlace.insertAdjacentHTML(
        "beforeend",
        `
            <div onClick="renderModal(${i})" class="item-cake" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <img src="${data[i].image}" alt="">
                                <p style="font-size: 20px;">${data[i].name}</p>
                                
                            </div>
            `
      );
    } else if (data[i].type == "transport") {
      transport.insertAdjacentHTML(
        "beforeend",
        `
            <div onClick="renderModal(${i})" class="item-cake1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <img src="${data[i].image}" alt="">
                                <p style="font-size: 20px;">${data[i].name}</p>
                                
                            </div>
            `
      );
    } else if (data[i].type == "food") {
      food.insertAdjacentHTML(
        "beforeend",
        `
            <div onClick="renderModal(${i})" class="item-cake1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <img src="${data[i].image}" alt="">
                                <p style="font-size: 20px;">${data[i].name}</p>
                                
                            </div>
            `
      );
    } else if (data[i].type == "city") {
      city.insertAdjacentHTML(
        "beforeend",
        `
              <div onClick="renderModal(${i})" class="item-cake1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                  <img src="${data[i].image}" alt="">
                                  <p style="font-size: 20px;">${data[i].name}</p>
                                  
                              </div>
              `
      );
    }
    else if (data[i].type == "city2") {
        city2.insertAdjacentHTML(
          "beforeend",
          `
                <div onClick="renderModal(${i})" class="item-cake1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    <img src="${data[i].image}" alt="">
                                    <p style="font-size: 20px;">${data[i].name}</p>
                                    
                                </div>
                `
        );
      } else if (data[i].type == "market") {
      market.insertAdjacentHTML(
        "beforeend",
        `
              <div onClick="renderModal(${i})" class="item-cake1">
                                  <img src="${data[i].image}" alt="">
                                  <p style="font-size: 20px;">${data[i].name}</p>
                                  
                              </div>
              `
      );
    }
  }
}
function renderModal(index) {
    document.getElementById("modalImg").src = data[index].image;
    document.getElementById("modalName").innerHTML = data[index].name;
    document.getElementById("modalDes").innerHTML = data[index].about;
}
window.onload = renderData;
