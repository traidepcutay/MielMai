const products = [
{
    id: 1,
    name: "Yves Saint Laurent Y EDP",
    brand: "Yves Saint Laurent",
    gender: "Nam",
    price: 3250000,
    oldPrice: 3650000,
    size: "100ml",
    scent: "Tươi mát · Gỗ",
    family: "Táo · Gừng · Xô thơm · Gỗ hổ phách",
    notes: "Táo, cam bergamot, gừng, xô thơm, phong lữ, đậu tonka và gỗ hổ phách",
    desc: "Hương thơm nam tính kết hợp sự tươi mát của táo, cam bergamot và gừng cùng nét thảo mộc thanh lịch, kết thúc bằng tầng hương gỗ ấm áp. Phù hợp với người đàn ông hiện đại, tự tin và năng động.",
    tag: "BÁN CHẠY",
    img: "img/ysl-y-edp.jpg",
    top: "Táo, cam bergamot, gừng",
    middle: "Xô thơm, bách xù, phong lữ",
    base: "Gỗ hổ phách, đậu tonka, tuyết tùng, cỏ hương bài, nhũ hương"
},

{
    id: 2,
    name: "Bleu de Chanel Parfum",
    brand: "Chanel",
    gender: "Nam",
    price: 3900000,
    oldPrice: 4300000,
    size: "100ml",
    scent: "Gỗ · Hổ phách · Thơm sạch",
    family: "Gỗ đàn hương · Gỗ tuyết tùng · Cam chanh",
    notes: "Cam chanh, oải hương, phong lữ, gỗ tuyết tùng, gỗ đàn hương và gỗ hổ phách",
    desc: "Mùi hương sâu lắng, tinh tế và đậm chất sang trọng. Mở đầu tươi sáng, chuyển dần sang tầng hương gỗ mượt mà, ấm áp, phù hợp với những quý ông yêu thích phong cách lịch lãm và cuốn hút.",
    tag: "CAO CẤP",
    img: "img/bleu-de-chanel-parfum.jpg",
    top: "Cam chanh, oải hương",
    middle: "Phong lữ, hương gỗ",
    base: "Gỗ đàn hương, gỗ tuyết tùng, gỗ hổ phách"
},

{
    id: 3,
    name: "Tom Ford Oud Wood",
    brand: "Tom Ford",
    gender: "Unisex",
    price: 6500000,
    oldPrice: 7200000,
    size: "100ml",
    scent: "Gỗ · Gia vị · Ấm áp",
    family: "Trầm hương · Gỗ đàn hương · Bạch đậu khấu · Vanilla",
    notes: "Bạch đậu khấu, tiêu Tứ Xuyên, gỗ hồng mộc, trầm hương, gỗ đàn hương, cỏ hương bài, đậu tonka, vanilla và hổ phách",
    desc: "Hương thơm sang trọng với sự kết hợp giữa trầm hương quý phái, gia vị cay nhẹ và những tầng gỗ ấm áp, mượt mà. Tổng thể tinh tế, bí ẩn và cuốn hút, phù hợp với người yêu thích phong cách thanh lịch, đẳng cấp và khác biệt.",
    tag: "CAO CẤP",
    img: "img/tom-ford-oud-wood.jpg",
    top: "Bạch đậu khấu, tiêu Tứ Xuyên, gỗ hồng mộc",
    middle: "Trầm hương, gỗ đàn hương, cỏ hương bài",
    base: "Đậu tonka, vanilla, hổ phách"
},

{
    id: 4,
    name: "Elysium Pour Homme",
    brand: "Roja Parfums",
    gender: "Nam",
    price: 7500000,
    oldPrice: 8200000,
    size: "100ml",
    scent: "Tươi mát · Cam chanh · Gỗ",
    family: "Cam chanh · Thảo mộc · Táo · Gỗ · Hổ phách",
    notes: "Chanh, cam bergamot, bưởi, chanh xanh, táo, lý chua đen, oải hương, húng quế, hoa nhài, cỏ hương bài, tuyết tùng, da thuộc và xạ hương",
    desc: "Hương thơm nam tính mang phong cách tươi mát, sang trọng với sự bùng nổ của cam chanh và trái cây mọng nước, kết hợp cùng thảo mộc thanh lịch và nền gỗ tinh tế. Phù hợp với quý ông hiện đại, tự tin, yêu thích sự sạch sẽ, cuốn hút và đẳng cấp.",
    tag: "CAO CẤP",
    img: "img/roja-elysium-pour-homme.jpg",
    top: "Chanh, cam bergamot, bưởi, chanh xanh, táo",
    middle: "Oải hương, húng quế, hoa nhài, lý chua đen",
    base: "Cỏ hương bài, tuyết tùng, da thuộc, xạ hương"
},

{
    id: 5,
    name: "Dior Sauvage Elixir",
    brand: "Dior",
    gender: "Nam",
    price: 4500000,
    oldPrice: 5000000,
    size: "60ml",
    scent: "Gia vị · Gỗ · Hổ phách",
    family: "Quế · Nhục đậu khấu · Oải hương · Gỗ đàn hương",
    notes: "Quế, nhục đậu khấu, bạch đậu khấu, bưởi, oải hương, cam thảo, gỗ đàn hương, hổ phách và hoắc hương",
    desc: "Hương thơm nam tính, mạnh mẽ với sự bùng nổ của gia vị cay ấm, kết hợp cùng oải hương thanh lịch và nền gỗ sâu lắng. Mùi hương đậm đà, cuốn hút, phù hợp với quý ông tự tin, trưởng thành và nổi bật trong những dịp đặc biệt.",
    tag: "BÁN CHẠY",
    img: "img/dior-sauvage-elixir.jpg",
    top: "Quế, nhục đậu khấu, bạch đậu khấu, bưởi",
    middle: "Oải hương",
    base: "Cam thảo, gỗ đàn hương, hổ phách, hoắc hương"
},

{
    id: 6,
    name: "Baccarat Rouge 540 EDP",
    brand: "Maison Francis Kurkdjian",
    gender: "Unisex",
    price: 7500000,
    oldPrice: 8200000,
    size: "70ml",
    scent: "Ngọt · Hổ phách · Gỗ",
    family: "Nghệ tây · Hổ phách · Hoa nhài · Gỗ tuyết tùng",
    notes: "Nghệ tây, hoa nhài, hổ phách khoáng, long diên hương và gỗ tuyết tùng",
    desc: "Hương thơm unisex nổi bật với sự hòa quyện giữa nghệ tây thanh lịch, hoa nhài mềm mại và sắc thái hổ phách ngọt ấm. Tầng hương gỗ tạo cảm giác tinh tế, sang trọng và lưu lại dấu ấn riêng. Phù hợp cho cả nam và nữ yêu thích phong cách hiện đại, cuốn hút.",
    tag: "CAO CẤP",
    img: "img/baccarat-rouge-540-edp.jpg",
    top: "Nghệ tây",
    middle: "Hoa nhài",
    base: "Hổ phách khoáng, long diên hương, gỗ tuyết tùng"
},
{
    id: 7,
    name: "Stronger With You Intensely",
    brand: "Emporio Armani",
    gender: "Nam",
    size: "100ml",
    scent: "Ngọt ấm · Gỗ",
    family: "Hạt dẻ · Vanilla · Hổ phách · Gỗ",
    notes: "Tiêu hồng, hạt dẻ, oải hương, vanilla và hổ phách",
    desc: "Hương thơm nam tính với vị ngọt ấm áp, hòa quyện cùng hạt dẻ, vanilla và những nốt gỗ sâu lắng. Phù hợp cho buổi tối, những buổi hẹn hò và thời tiết mát mẻ.",
    tag: "ĐƯỢC YÊU THÍCH",
    img: "img/stronger-with-you-intensely.jpg",
    top: "Tiêu hồng, violet",
    middle: "Oải hương, xô thơm, quế",
    base: "Vanilla, hổ phách, đậu tonka, gỗ"
},
{
    id: 8,
    name: "Le Male Le Parfum",
    brand: "Jean Paul Gaultier",
    gender: "Nam",
    size: "125ml",
    scent: "Ngọt ấm · Gia vị · Gỗ",
    family: "Bạch đậu khấu · Oải hương · Vanilla · Gỗ",
    notes: "Bạch đậu khấu, oải hương, diên vĩ, vanilla và hương gỗ",
    desc: "Hương thơm nam tính, cuốn hút với mở đầu cay ấm của bạch đậu khấu, kết hợp nét thanh lịch của oải hương và diên vĩ, khép lại bằng vanilla ngọt ấm. Phù hợp cho buổi tối, hẹn hò và những dịp đặc biệt.",
    tag: "CAO CẤP",
    img: "img/le-male-le-parfum.png",
    top: "Bạch đậu khấu",
    middle: "Oải hương, diên vĩ",
    base: "Vanilla, hương gỗ"
},
{
    id: 9,
    name: "MYSLF Eau de Parfum",
    brand: "Yves Saint Laurent",
    gender: "Nam",
    size: "100ml",
    scent: "Tươi mát · Hoa · Gỗ",
    family: "Cam bergamot · Hoa cam · Gỗ hoắc hương",
    notes: "Cam bergamot, hoa cam Tunisia, gỗ và hoắc hương",
    desc: "Hương thơm nam tính hiện đại, mở đầu bằng sự tươi mát của cam bergamot, kết hợp nét thanh lịch của hoa cam và chiều sâu ấm áp của gỗ. Phù hợp sử dụng hằng ngày, đi làm, gặp gỡ bạn bè hoặc hẹn hò.",
    tag: "HIỆN ĐẠI",
    img: "img/ysl-myslf-ed.png",
    top: "Cam bergamot",
    middle: "Hoa cam Tunisia",
    base: "Gỗ, hoắc hương"
},
{
    id: 10,
    name: "Explorer Eau de Parfum",
    brand: "Montblanc",
    gender: "Nam",
    size: "100ml",
    scent: "Tươi mát · Gỗ · Da thuộc",
    family: "Cam bergamot · Cỏ hương bài · Hoắc hương · Da thuộc",
    notes: "Cam bergamot, tiêu hồng, xô thơm, hoắc hương, cỏ hương bài và da thuộc",
    desc: "Hương thơm nam tính mang phong cách khám phá, mở đầu tươi mát với cam bergamot, hòa quyện cùng hoắc hương và cỏ hương bài, tạo nên chiều sâu gỗ ấm áp cùng nét da thuộc mạnh mẽ. Phù hợp đi làm, đi chơi và sử dụng hằng ngày.",
    tag: "BÁN CHẠY",
    img: "img/montblanc-explorer-edp.png",
    top: "Cam bergamot, tiêu hồng, xô thơm",
    middle: "Da thuộc, cỏ hương bài",
    base: "Hoắc hương, gỗ Akigala, cacao"
},
{
    id: 11,
    name: "Ombré Leather Eau de Parfum",
    brand: "Tom Ford",
    gender: "Unisex",
    size: "100ml",
    scent: "Da thuộc · Gỗ · Gia vị",
    family: "Bạch đậu khấu · Da thuộc · Hoa nhài · Hổ phách",
    notes: "Bạch đậu khấu, hoa nhài sambac, da thuộc, hoắc hương và hổ phách",
    desc: "Hương thơm cá tính với da thuộc đậm nét, hòa quyện cùng hoa nhài mềm mại và các nốt gỗ ấm áp. Mang phong cách sang trọng, bí ẩn và hiện đại, phù hợp cho buổi tối, sự kiện hoặc những dịp đặc biệt.",
    tag: "CAO CẤP",
    img: "img/tom-ford-ombre-leather-edp.png",
    top: "Bạch đậu khấu",
    middle: "Da thuộc, hoa nhài sambac",
    base: "Hoắc hương, hổ phách, rêu"
},
{
    id: 12,
    name: "Stronger With You Absolutely",
    brand: "Emporio Armani",
    gender: "Nam",
    size: "100ml",
    scent: "Ngọt ấm · Hổ phách · Rượu rum",
    family: "Rượu rum · Hạt dẻ · Vanilla · Gỗ",
    notes: "Rượu rum, elemi, cam bergamot, oải hương, davana, vanilla, hạt dẻ và gỗ tuyết tùng",
    desc: "Hương thơm nam tính, nồng nàn với nét rượu rum ấm áp, hòa quyện cùng vanilla ngọt ngào và hương gỗ sâu lắng. Mang phong cách trưởng thành, quyến rũ, phù hợp cho buổi tối, hẹn hò và thời tiết mát mẻ.",
    tag: "NỒNG NÀN",
    img: "img/stronger-with-you-absolutely.png",
    top: "Rượu rum, elemi",
    middle: "Oải hương, davana",
    base: "Vanilla, hạt dẻ, gỗ tuyết tùng"
},
{
    id: 13,
    name: "Mefisto Eau de Parfum",
    brand: "Xerjoff Casamorati",
    gender: "Nam",
    size: "100ml",
    scent: "Cam chanh · Hoa · Gỗ",
    family: "Cam bergamot · Hoa oải hương · Hoa hồng · Gỗ đàn hương",
    notes: "Bưởi, cam bergamot, chanh, oải hương, hoa hồng, diên vĩ, gỗ đàn hương và xạ hương",
    desc: "Hương thơm thanh lịch mang phong cách nước hoa Ý cổ điển, mở đầu tươi sáng với cam chanh, tiếp nối bằng tầng hương hoa mềm mại và kết thúc với gỗ đàn hương cùng xạ hương tinh tế. Phù hợp cho người yêu phong cách sang trọng, lịch lãm.",
    tag: "SANG TRỌNG",
    img: "img/xerjoff-casamorati-mefisto.png",
    top: "Bưởi, cam bergamot, chanh",
    middle: "Oải hương, hoa hồng, diên vĩ",
    base: "Gỗ đàn hương, xạ hương, hổ phách"
},
{
    id: 14,
    name: "Blue Talisman Eau de Parfum",
    brand: "Ex Nihilo",
    gender: "Unisex",
    size: "100ml",
    scent: "Tươi mát · Trái cây · Gỗ",
    family: "Lê · Cam bergamot · Hoa cam · Gỗ amber",
    notes: "Lê, cam bergamot, quýt, gừng, hoa cam, Georgywood và xạ hương",
    desc: "Hương thơm hiện đại kết hợp nét tươi sáng của trái cây và cam chanh với sự mềm mại của hoa cam, điểm xuyết gừng cay nhẹ và lớp nền gỗ ấm áp. Mang phong cách sang trọng, tinh tế, phù hợp cho cả ngày lẫn buổi tối.",
    tag: "NICHE CAO CẤP",
    img: "img/ex-nihilo-blue-talisman.png",
    top: "Lê, cam bergamot, quýt",
    middle: "Gừng, hoa cam",
    base: "Georgywood, xạ hương, amber"
},

{
    id: 15,
    name: "Spicebomb Extreme Eau de Parfum",
    brand: "Viktor & Rolf",
    gender: "Nam",
    size: "90ml",
    scent: "Gia vị · Ngọt ấm · Thuốc lá",
    family: "Tiêu đen · Quế · Thuốc lá · Vanilla",
    notes: "Tiêu đen, quế, nghệ tây, thuốc lá và vanilla",
    desc: "Hương thơm nam tính mạnh mẽ với sự bùng nổ của gia vị cay ấm, kết hợp nét ngọt ngào của vanilla và chiều sâu quyến rũ của thuốc lá. Phù hợp cho buổi tối, hẹn hò và thời tiết lạnh.",
    tag: "MẠNH MẼ",
    img: "img/viktor-rolf-spicebomb-extreme.png",
    top: "Tiêu đen, gia vị",
    middle: "Quế, nghệ tây, thì là đen",
    base: "Thuốc lá, vanilla"
},
{
    id: 16,
    name: "Libre Eau de Parfum",
    brand: "Yves Saint Laurent",
    gender: "Nữ",
    size: "90ml",
    scent: "Hoa · Cam chanh · Vanilla",
    family: "Oải hương · Hoa cam · Vanilla · Xạ hương",
    notes: "Oải hương Pháp, hoa cam Morocco, quýt, hoa nhài, vanilla Madagascar và xạ hương",
    desc: "Hương thơm nữ tính, hiện đại kết hợp nét thảo mộc thanh lịch của oải hương với sự quyến rũ của hoa cam và vanilla ấm áp. Mang phong cách tự tin, sang trọng, phù hợp đi làm, dự tiệc hoặc sử dụng hằng ngày.",
    tag: "NỮ TÍNH · QUYẾN RŨ",
    img: "img/ysl-libre-edp.png",
    top: "Quýt, oải hương, lý chua đen",
    middle: "Hoa cam Morocco, hoa nhài",
    base: "Vanilla Madagascar, xạ hương, gỗ tuyết tùng"
},
{
    id: 17,
    name: "Dylan Blue Pour Homme",
    brand: "Versace",
    gender: "Nam",
    size: "100ml",
    scent: "Tươi mát · Thủy sinh · Gỗ",
    family: "Cam bergamot · Hương thủy sinh · Tiêu đen · Xạ hương",
    notes: "Cam bergamot, bưởi, lá sung, hương thủy sinh, tiêu đen, hoắc hương, xạ hương và nhũ hương",
    desc: "Hương thơm nam tính hiện đại với sự tươi mát của cam chanh và hương thủy sinh, kết hợp nét cay nhẹ của tiêu đen cùng lớp nền gỗ trầm ấm. Phù hợp đi làm, đi chơi và sử dụng hằng ngày.",
    tag: "NAM TÍNH",
    img: "img/versace-dylan-blue.png",
    top: "Cam bergamot, bưởi, lá sung",
    middle: "Hương thủy sinh, tiêu đen, hoắc hương",
    base: "Xạ hương, nhũ hương, đậu tonka"
},
{
    id: 18,
    name: "White Tea Eau de Toilette",
    brand: "Elizabeth Arden",
    gender: "Nữ",
    size: "100ml",
    scent: "Trà trắng · Thanh mát · Gỗ",
    family: "Trà trắng · Hoa diên vĩ · Xạ hương · Gỗ",
    notes: "Trà trắng, xô thơm, hoa diên vĩ, gỗ mate và xạ hương",
    desc: "Hương thơm nhẹ nhàng, tinh tế với cảm giác thanh sạch của trà trắng, hòa quyện cùng nét mềm mại của hoa và sự ấm áp dịu dàng của gỗ. Phù hợp sử dụng hằng ngày, đi làm hoặc dành cho người yêu thích phong cách tối giản, thư thái.",
    tag: "THANH LỊCH",
    img: "img/elizabeth-arden-white-tea.png",
    top: "Trà trắng, xô thơm",
    middle: "Hoa diên vĩ, trà mate",
    base: "Xạ hương, gỗ"
},
{
    id: 19,
    name: "My Way Eau de Parfum",
    brand: "Giorgio Armani",
    gender: "Nữ",
    size: "90ml",
    scent: "Hoa trắng · Cam chanh · Vanilla",
    family: "Cam bergamot · Hoa cam · Hoa huệ · Vanilla",
    notes: "Cam bergamot, hoa cam Ai Cập, hoa huệ Ấn Độ, hoa nhài, vanilla Madagascar và xạ hương trắng",
    desc: "Hương thơm nữ tính, rạng rỡ với sự tươi sáng của cam bergamot và hoa cam, hòa quyện cùng hoa huệ và hoa nhài trắng tinh tế. Lớp nền vanilla ấm áp tạo cảm giác mềm mại, thanh lịch, phù hợp đi làm, dạo phố và những dịp đặc biệt.",
    tag: "NỮ TÍNH",
    img: "img/giorgio-armani-my-way-edp.png",
    top: "Cam bergamot, hoa cam Ai Cập",
    middle: "Hoa huệ Ấn Độ, hoa nhài",
    base: "Vanilla Madagascar, xạ hương trắng, gỗ tuyết tùng"
},
{
    id: 20,
    name: "Oud Wood Eau de Parfum",
    brand: "Tom Ford",
    gender: "Unisex",
    size: "100ml",
    scent: "Gỗ trầm · Gia vị · Gỗ ấm",
    family: "Gỗ trầm · Gỗ đàn hương · Bạch đậu khấu · Vanilla",
    notes: "Gỗ trầm, gỗ đàn hương, tiêu Tứ Xuyên, bạch đậu khấu, vanilla và hổ phách",
    desc: "Hương thơm sang trọng với gỗ trầm quý phái, hòa quyện cùng bạch đậu khấu và tiêu cay nhẹ. Lớp nền gỗ đàn hương, vanilla tạo cảm giác ấm áp, tinh tế và bí ẩn. Phù hợp cho những dịp đặc biệt hoặc người yêu phong cách nước hoa gỗ cao cấp.",
    tag: "NICHE-STYLE",
    img: "img/tom-ford-oud-wood.png",
    top: "Bạch đậu khấu, tiêu Tứ Xuyên",
    middle: "Gỗ trầm, gỗ đàn hương, cỏ hương bài",
    base: "Vanilla, đậu tonka, hổ phách"
},
{
    id: 21,
    name: "Costa Azzurra Eau de Parfum",
    brand: "Tom Ford",
    gender: "Unisex",
    size: "100ml",
    scent: "Biển · Gỗ · Thảo mộc",
    family: "Cam chanh · Cây bách · Gỗ · Hổ phách",
    notes: "Chanh, cây bách, gỗ sồi, thảo mộc và hổ phách",
    desc: "Hương thơm gợi cảm giác nghỉ dưỡng bên bờ Địa Trung Hải, kết hợp nét tươi mát của cam chanh và thảo mộc với chiều sâu khô ấm của gỗ. Mang phong cách phóng khoáng, sang trọng, phù hợp đi chơi, du lịch hoặc sử dụng hằng ngày.",
    tag: "SANG TRỌNG",
    img: "img/tom-ford-costa-azzurra-edp.png",
    top: "Chanh, thảo mộc",
    middle: "Cây bách, gỗ sồi",
    base: "Gỗ, hổ phách"
},
{
    id: 22,
    name: "Black Phantom Memento Mori",
    brand: "Kilian Paris",
    gender: "Unisex",
    size: "50ml",
    scent: "Ngọt đậm · Cà phê · Gỗ",
    family: "Cà phê · Chocolate · Rum · Caramel",
    notes: "Rum, cà phê, chocolate đen, caramel, hạnh nhân và gỗ đàn hương",
    desc: "Hương thơm đậm đà, bí ẩn với sự hòa quyện của cà phê rang, chocolate đen và nét ngọt ấm của caramel cùng rum. Mang phong cách sang trọng, quyến rũ, phù hợp cho buổi tối và những dịp đặc biệt.",
    tag: "NICHE CAO CẤP",
    img: "img/kilian-black-phantom.png",
    top: "Rum, caramel",
    middle: "Cà phê, chocolate đen, hạnh nhân",
    base: "Gỗ đàn hương, vanilla"
},
{
    id: 23,
    name: "Donna Born In Roma Eau de Parfum",
    brand: "Valentino",
    gender: "Nữ",
    size: "100ml",
    scent: "Hoa · Vanilla · Gỗ",
    family: "Hoa nhài · Vanilla Bourbon · Gỗ cashmeran",
    notes: "Lý chua đen, cam bergamot, hoa nhài, vanilla Bourbon và gỗ cashmeran",
    desc: "Hương thơm nữ tính, hiện đại kết hợp nét tươi sáng của trái cây với hoa nhài thanh lịch và vanilla ngọt ngào. Lớp nền gỗ ấm áp tạo cảm giác quyến rũ, cá tính, phù hợp đi làm, dạo phố hoặc hẹn hò.",
    tag: "NỔI BẬT",
    img: "img/valentino-donna-born-in-roma.png",
    top: "Lý chua đen, cam bergamot",
    middle: "Hoa nhài",
    base: "Vanilla Bourbon, gỗ cashmeran"
},
{
    id: 24,
    name: "Baccarat Rouge 540 Extrait de Parfum",
    brand: "Maison Francis Kurkdjian",
    gender: "Unisex",
    size: "70ml",
    scent: "Hổ phách · Hoa · Gỗ",
    family: "Hạnh nhân đắng · Nghệ tây · Hổ phách gỗ",
    notes: "Hạnh nhân đắng, nghệ tây, hoa nhài, gỗ tuyết tùng và xạ hương",
    desc: "Hương thơm sang trọng, nổi bật với nét ngọt ấm của hạnh nhân và nghệ tây, kết hợp cùng hoa nhài và tầng hương gỗ sâu lắng. Mang phong cách quyến rũ, tinh tế và có dấu ấn riêng, phù hợp cho những dịp đặc biệt hoặc buổi tối.",
    tag: "NICHE CAO CẤP",
    img: "img/baccarat-rouge-540-extrait.png",
    top: "Hạnh nhân đắng, nghệ tây",
    middle: "Hoa nhài, hương gỗ",
    base: "Gỗ tuyết tùng, hổ phách"
},
{
    id: 25,
    name: "La Vie Est Belle Eau de Parfum",
    brand: "Lancôme",
    gender: "Nữ",
    size: "100ml",
    scent: "Ngọt ngào · Hoa · Gourmand",
    family: "Lý chua đen · Hoa diên vĩ · Praline · Vanilla",
    notes: "Lý chua đen, lê, hoa diên vĩ, hoa nhài, praline, vanilla và hoắc hương",
    desc: "Hương thơm nữ tính, ngọt ngào với sự kết hợp giữa trái cây mọng nước, hoa diên vĩ thanh lịch và praline béo ngậy. Lớp nền vanilla cùng hoắc hương tạo chiều sâu ấm áp, quyến rũ. Phù hợp đi làm, hẹn hò hoặc dự tiệc.",
    tag: "ĐƯỢC YÊU THÍCH",
    img: "img/lancome-la-vie-est-belle-edp.png",
    top: "Lý chua đen, lê",
    middle: "Hoa diên vĩ, hoa nhài, hoa cam",
    base: "Praline, vanilla, hoắc hương, đậu tonka"
},
{
    id: 26,
    name: "Delina Eau de Parfum",
    brand: "Parfums de Marly",
    gender: "Nữ",
    size: "75ml",
    scent: "Hoa hồng · Trái cây · Xạ hương",
    family: "Vải thiều · Đại hoàng · Hoa hồng Thổ Nhĩ Kỳ · Vanilla",
    notes: "Vải thiều, đại hoàng, cam bergamot, hoa hồng Thổ Nhĩ Kỳ, mẫu đơn, vanilla, xạ hương và cashmeran",
    desc: "Hương thơm nữ tính, sang trọng với nét chua ngọt tươi sáng của vải thiều và đại hoàng, hòa quyện cùng hoa hồng Thổ Nhĩ Kỳ quyến rũ. Lớp nền vanilla và xạ hương tạo cảm giác mềm mại, tinh tế, phù hợp hẹn hò, dự tiệc hoặc những dịp đặc biệt.",
    tag: "NỮ TÍNH · SANG TRỌNG",
    img: "img/parfums-de-marly-delina.png",
    top: "Vải thiều, đại hoàng, cam bergamot",
    middle: "Hoa hồng Thổ Nhĩ Kỳ, mẫu đơn, vanilla",
    base: "Xạ hương, cashmeran, hương gỗ"
},
{
    id: 27,
    name: "Coco Mademoiselle Eau de Parfum",
    brand: "Chanel",
    gender: "Nữ",
    size: "100ml",
    scent: "Cam chanh · Hoa · Hoắc hương",
    family: "Cam bergamot · Hoa hồng · Hoa nhài · Hoắc hương",
    notes: "Cam bergamot, cam, hoa hồng Thổ Nhĩ Kỳ, hoa nhài, hoắc hương và vanilla",
    desc: "Hương thơm nữ tính, thanh lịch và hiện đại, mở đầu với cam chanh tươi sáng, tiếp nối bằng hoa hồng và hoa nhài mềm mại. Lớp nền hoắc hương ấm áp tạo chiều sâu quyến rũ, phù hợp đi làm, dạo phố, hẹn hò hoặc dự tiệc.",
    tag: "KINH ĐIỂN",
    img: "img/chanel-coco-mademoiselle-edp.png",
    top: "Cam bergamot, cam",
    middle: "Hoa hồng, hoa nhài",
    base: "Hoắc hương, vanilla, đậu tonka"
},
{
    id: 28,
    name: "Love Tuberose Eau de Parfum",
    brand: "Amouage",
    gender: "Nữ",
    size: "100ml",
    scent: "Hoa trắng · Ngọt ngào · Gourmand",
    family: "Hoa huệ · Hoa nhài · Vanilla · Whipped Cream",
    notes: "Hoa huệ, hoa nhài, hoa sơn chi, vanilla, whipped cream và gỗ đàn hương",
    desc: "Hương thơm nữ tính, mềm mại và sang trọng, kết hợp hoa huệ trắng cùng hoa nhài và hoa sơn chi, điểm xuyết nét ngọt ngào béo mịn của kem tươi và vanilla. Phù hợp cho những buổi hẹn hò, sự kiện hoặc người yêu thích hương hoa trắng ngọt ngào.",
    tag: "NICHE CAO CẤP",
    img: "img/amouage-love-tuberose.png",
    top: "Hoa sơn chi, whipped cream",
    middle: "Hoa huệ, hoa nhài",
    base: "Vanilla, gỗ đàn hương, gỗ tuyết tùng"
},
{
    id: 29,
    name: "Donna Born In Roma Yellow Dream Eau de Parfum",
    brand: "Valentino",
    gender: "Nữ",
    size: "100ml",
    scent: "Hoa · Cam chanh · Ngọt nhẹ",
    family: "Chanh · Hoa hồng · Hoa mẫu đơn · Xạ hương",
    notes: "Chanh Ý, hoa hồng, hoa mẫu đơn và xạ hương",
    desc: "Hương thơm nữ tính, rạng rỡ với nét tươi sáng của cam chanh kết hợp cùng hương hoa mềm mại. Mang phong cách trẻ trung, thanh lịch và hiện đại, phù hợp đi làm, dạo phố hoặc sử dụng hằng ngày.",
    tag: "RẠNG RỠ",
    img: "img/valentino-donna-born-in-roma-yellow-dream.png",
    top: "Chanh Ý",
    middle: "Hoa hồng, hoa mẫu đơn",
    base: "Xạ hương, hương gỗ"
},
{
    id: 30,
    name: "Donna Born In Roma Eau de Parfum",
    brand: "Valentino",
    gender: "Nữ",
    size: "100ml",
    scent: "Hoa · Vanilla · Gỗ",
    family: "Hoa nhài · Vanilla Bourbon · Gỗ cashmeran",
    notes: "Hoa nhài sambac, vanilla Bourbon và gỗ cashmeran",
    desc: "Hương thơm nữ tính, hiện đại với hoa nhài thanh lịch, vanilla ngọt ngào và lớp nền gỗ ấm áp. Mang phong cách trẻ trung, cá tính nhưng vẫn quyến rũ, phù hợp đi làm, dạo phố, hẹn hò hoặc dự tiệc.",
    tag: "BÁN CHẠY",
    img: "img/valentino-donna-born-in-roma-edp.png",
    top: "Lý chua đen, cam bergamot",
    middle: "Hoa nhài sambac",
    base: "Vanilla Bourbon, gỗ cashmeran"
},
];
const money = n => n.toLocaleString("vi-VN") + "₫";
let cart = [];
let selectedGenderFromNav = "";
const grid = document.getElementById("productGrid");
const modal = document.getElementById("productModal");

function renderProducts(){
  const genders = [...document.querySelectorAll('input[name="gender"]:checked')].map(x=>x.value);
  const scents = [...document.querySelectorAll('input[name="scent"]:checked')].map(x=>x.value);
  const price = document.querySelector('input[name="price"]:checked')?.value || "all";
  const brand = document.getElementById("brandFilter").value;
  const query = document.getElementById("searchInput").value.trim().toLocaleLowerCase("vi");
  let list = products.filter(p=>{
    if(genders.length && !genders.includes(p.gender)) return false;
    if(selectedGenderFromNav && p.gender !== selectedGenderFromNav) return false;

if (scents.length && !scents.some(s => p.scent.includes(s))) return false;

    if(brand!=="all" && p.brand!==brand) return false;
    if(query && !`${p.name} ${p.brand} ${p.family} ${p.gender}`.toLocaleLowerCase("vi").includes(query)) return false;
    if(price==="under500" && p.price>=500000) return false;
    if(price==="500to1000" && (p.price<500000 || p.price>1000000)) return false;
    if(price==="1000to2000" && (p.price<1000000 || p.price>2000000)) return false;
    if(price==="over2000" && p.price<=2000000) return false;
    return true;
  });
  const sort = document.getElementById("sortSelect").value;
  if(sort==="priceAsc") list.sort((a,b)=>a.price-b.price);
  if(sort==="priceDesc") list.sort((a,b)=>b.price-a.price);
  if(sort==="name") list.sort((a,b)=>a.name.localeCompare(b.name));
  document.getElementById("resultCount").textContent=list.length;
  document.getElementById("emptyState").hidden=!!list.length;
  grid.innerHTML=list.map(p=>`
    <article class="product-card">
      <div class="product-image" data-detail="${p.id}">
        ${p.tag?`<span class="tag">${p.tag}</span>`:""}
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-info">
        <p class="product-brand">${p.brand.toUpperCase()} · ${p.gender.toUpperCase()}</p>
        <h3 class="product-name" data-detail="${p.id}">${p.name}</h3>
        <p class="product-meta">${p.size} · ${p.scent}</p>
        <p class="product-notes">${p.family}</p>
         
        
        <div class="product-actions"><button class="add-cart" data-add="${p.id}">THÊM VÀO GIỎ</button><button class="quick-view" data-detail="${p.id}">CHI TIẾT</button></div>
      </div>
    </article>`).join("");
}


//<div class="price-line"><span class="price">${money(p.price)}</span>${p.oldPrice?`<span class="old-price">${money(p.oldPrice)}</span>`:""}</div>
function showDetail(id){
  const p=products.find(x=>x.id===Number(id)); if(!p)return;
  document.getElementById("modalBody").innerHTML=`
    <div class="modal-product">
      <img src="${p.img}" alt="${p.name}">
      <div><p class="eyebrow">${p.brand.toUpperCase()} · ${p.gender.toUpperCase()}</p>
      <h2>${p.name}</h2><p>${p.desc}</p>
      
      
      <p>Dung tích: <b>${p.size}</b></p><p>Nhóm hương: <b>${p.scent}</b></p>
      <div class="detail-notes"><p><b>Hương đầu:</b> ${p.top}</p><p><b>Hương giữa:</b> ${p.middle}</p><p><b>Hương cuối:</b> ${p.base}</p></div>
      <div class="modal-buy"><input type="number" id="modalQty" min="1" max="20" value="1" aria-label="Số lượng"><button class="button button-dark" data-add="${p.id}" id="modalAdd">THÊM VÀO GIỎ</button></div>
      </div></div>`;
  modal.classList.add("active");
}
// Hiển thị giá muốn hiện dán vào khoảng trống trên
//<div class="modal-price">${money(p.price)} ${p.oldPrice?`<small style="font-size:12px;color:#a49a92;text-decoration:line-through">${money(p.oldPrice)}</small>`:""}</div>
function addToCart(id, qty=1){
  const p=products.find(x=>x.id===Number(id));if(!p)return;
  const found=cart.find(x=>x.id===p.id);
  if(found)found.qty+=qty;else cart.push({...p,qty});
  renderCart();openCart();
}
function renderCart(){
  document.getElementById("cartCount").textContent=cart.reduce((s,p)=>s+p.qty,0);
  document.getElementById("cartItems").innerHTML=cart.length?cart.map(p=>`
    <div class="cart-row"><img src="${p.img}" alt="${p.name}"><div><h4>${p.name}</h4><p>${p.size} · ${money(p.price)}</p><div class="quantity"><button data-qty="-1" data-id="${p.id}">−</button><span>${p.qty}</span><button data-qty="1" data-id="${p.id}">+</button></div></div><button class="remove-item" data-remove="${p.id}">Xóa</button></div>`).join(""):'<p style="color:#87776d;padding:25px 0">Giỏ hàng đang trống. Hãy chọn mùi hương bạn yêu thích.</p>';
  document.getElementById("cartTotal").textContent=money(cart.reduce((s,p)=>s+p.price*p.qty,0));
}
const drawer=document.getElementById("cartDrawer"),overlay=document.getElementById("overlay");
function openCart(){drawer.classList.add("active");overlay.classList.add("active")}
function closeCart(){drawer.classList.remove("active");overlay.classList.remove("active")}
grid.addEventListener("click",e=>{
 const add=e.target.closest("[data-add]");const detail=e.target.closest("[data-detail]");
 if(add)addToCart(add.dataset.add);
 else if(detail)showDetail(detail.dataset.detail);
});
document.getElementById("modalBody").addEventListener("click",e=>{
 const b=e.target.closest("[data-add]");if(b){const qty=Math.max(1,Math.min(20,Number(document.getElementById("modalQty")?.value)||1));addToCart(b.dataset.add,qty);modal.classList.remove("active")}
});
document.getElementById("closeProduct").addEventListener("click",()=>modal.classList.remove("active"));
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("active")});
document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
overlay.addEventListener("click",closeCart);
document.getElementById("cartItems").addEventListener("click",e=>{
 const qty=e.target.closest("[data-qty]"),remove=e.target.closest("[data-remove]");
 if(qty){const item=cart.find(x=>x.id===Number(qty.dataset.id));if(item){item.qty+=Number(qty.dataset.qty);if(item.qty<=0)cart=cart.filter(x=>x.id!==item.id)}}
 if(remove)cart=cart.filter(x=>x.id!==Number(remove.dataset.remove));
 renderCart();
});
document.querySelectorAll('input[name="gender"],input[name="scent"],input[name="price"]').forEach(x=>x.addEventListener("change",()=>{selectedGenderFromNav="";renderProducts()}));
document.getElementById("brandFilter").addEventListener("change",renderProducts);
document.getElementById("searchInput").addEventListener("input",renderProducts);
document.getElementById("sortSelect").addEventListener("change",renderProducts);
document.getElementById("clearFilters").addEventListener("click",()=>{
 document.querySelectorAll('input[name="gender"],input[name="scent"]').forEach(x=>x.checked=false);
 document.querySelector('input[name="price"][value="all"]').checked=true;
 document.getElementById("brandFilter").value="all";
 document.getElementById("searchInput").value="";
 document.getElementById("sortSelect").value="featured";
 selectedGenderFromNav="";
 renderProducts();
});
document.querySelectorAll("[data-nav-gender]").forEach(a=>a.addEventListener("click",()=>{
 selectedGenderFromNav=a.dataset.navGender;
 document.querySelectorAll('input[name="gender"]').forEach(x=>x.checked=false);
 renderProducts();
}));
document.getElementById("searchToggle").addEventListener("click",()=>{
 document.getElementById("searchInput").focus();
 document.getElementById("shop").scrollIntoView({behavior:"smooth"});
});
document.getElementById("newsletterForm").addEventListener("submit",e=>{
 e.preventDefault();document.getElementById("newsletterMessage").textContent="Cảm ơn bạn! Đây là bản demo, chưa lưu email vào hệ thống.";
 e.target.reset();
});
document.getElementById("checkoutButton").addEventListener("click",()=>{
 alert("Đây là bản demo giao diện. Để nhận đơn hàng thật, cần kết nối backend hoặc dịch vụ thanh toán.");
});
renderProducts();renderCart();
