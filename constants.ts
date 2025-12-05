
import { Product, UserProfile, Order, Voucher } from "./types";

export const BRANDS = ["Dior", "Chanel", "Le Labo", "Tom Ford", "Byredo", "Jo Malone London", "Creed", "Giorgio Armani", "Yves Saint Laurent", "Gucci", "Versace"];
export const CATEGORIES = ["Hương Hoa Cỏ", "Hương Gỗ", "Hương Tươi Mát", "Hương Trái Cây", "Hương Phương Đông", "Hương Biển"];
export const GENDERS = ["Male", "Female", "Unisex"];

export const PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Sauvage",
        brand: "Dior",
        price: 2500000,
        rating: 4.8,
        reviews: 1288,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDShLVhinqwmj_OU0oQEWzNjD56P2-O7ZucPV_QQapatIebcfO-yuVTz9hvoHo0sKDNldeScjouNcWYe6nnjYmU-1I7LFDsxvuKXVvLITZaDSr2QXaWg8AnC1Gi7KIwUtJK_nFa8qwymLfEakadtBPVFbPJkucZj5eSoYLnVBgx2tOTSNvsfJUJHnSsm-6-BsnsoJoRk_fvp6bPY1uij-bEFp1T7zTMt8KOwHwR74QopEYVi3bXdFX-FDXKLcH9mJiv_KiPhl6DshY",
        category: "Hương Gỗ",
        concentration: "Eau de Parfum",
        gender: "Male",
        description: "Một sáng tạo lấy cảm hứng từ không gian mở rộng. Một bầu trời xanh bao trùm một cảnh quan đá, nóng rát dưới ánh mặt trời sa mạc.",
        notes: { top: "Cam Bergamot Reggio", middle: "Tiêu Tứ Xuyên", base: "Ambroxan" },
        isTrending: true
    },
    {
        id: "2",
        name: "Santal 33",
        brand: "Le Labo",
        price: 4100000,
        rating: 4.6,
        reviews: 850,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm4wb-7YLFR8EEnvBqgM9FbZb_gNx_aVHp0qHMFL9T9rerAEciSmiEoROlS1NYwbnWMmT2DIZCkWyFjF3hxOzARhQRkqoXGhmEY1-EY_j95H20c83PcL4b1PcJXzxVBQwxaLoq9e-7ZppH6KZjVzPAQogMDeGLfGSx9pLRaA-9phqgNwqV8RhLzOJHQU9GVNN9CZG6DJ3jTJegFFrNThZ2puVwCFQYjTxZ_6IGrSLk38tPW4OONk2Sbj-xvrI3dcziRqXZ2kMA2W0",
        category: "Hương Gỗ",
        concentration: "Eau de Parfum",
        gender: "Unisex",
        description: "Santal 33 là linh hồn của miền Tây nước Mỹ, khơi gợi hình ảnh ngọn lửa trại bập bùng và bầu trời đêm đầy sao.",
        notes: { top: "Bạch đậu khấu", middle: "Hoa violet, Hoa diên vĩ", base: "Gỗ đàn hương, Gỗ tuyết tùng" },
        isTrending: true
    },
    {
        id: "3",
        name: "No. 5",
        brand: "Chanel",
        price: 3800000,
        rating: 4.9,
        reviews: 3020,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlNoZar2VhlOQumBCx5jqUFJkDOCLzHIDSadHJKqoFIp6pl5OibNPIm4HmrYHNAQBLZAYyRtCd8jbcD9nGKB0eEybul0mIRh949AcvEexdGacP23zjq9BDhzYqWm7mLxiOLJBP9mhNfSGHEsxsDHOa8PhQohcnUSyTFu2vmQb_89HTtR_KzdO03KUyeAhDQ4vErXlvgsRXW-IyPdQ4A3hdqpNgRJVKF-9VIUo_odKFkL_qWAPoaoSkQqOml3RBlOTJhRZBhxbhyx4",
        category: "Hương Hoa Cỏ",
        concentration: "Parfum",
        gender: "Female",
        description: "Hương thơm huyền thoại, biểu tượng của sự nữ tính và quyến rũ vượt thời gian.",
        notes: { top: "Aldehydes, Ylang-Ylang", middle: "Hoa nhài, Hoa hồng", base: "Gỗ đàn hương, Vanilla" },
        isTrending: false
    },
    {
        id: "4",
        name: "Gypsy Water",
        brand: "Byredo",
        price: 3800000,
        rating: 4.5,
        reviews: 420,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeGA16NgAIEqLiVxOkScceTw6Qpv_2Pdf1tXh-R0oYEXrA7t-UMbVufmcCG4NTsOJm3UUgyIEtrDaqnwv9QR69pz6WCV6b5I8Tzf7Lo6HzgzhPYu60ZkIYNebHpDGr-SBB49Y86yZoltE25YGzxQ08C0a45aY2F_zgFoy97OpUr11SKdzaLBT4v1QqYdhjlCZqQHIrbbMT_K_gAca_09NcI7giuHDLTbASXCNgW58OJV6RBVcDdnRdLwOeEhS1CHCDwQIhQl_1vlo",
        category: "Hương Gỗ",
        concentration: "Eau de Parfum",
        gender: "Unisex",
        description: "Một bài thơ ca ngợi vẻ đẹp của văn hóa Romani, phong cách du mục, và những đêm trong rừng sâu.",
        notes: { top: "Bergamot, Chanh", middle: "Nhang, Lá thông", base: "Hổ phách, Vanilla" },
        isTrending: true
    },
    {
        id: "5",
        name: "Bleu de Chanel",
        brand: "Chanel",
        price: 3200000,
        rating: 4.7,
        reviews: 1500,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHip_Z_ms6ld1s8CHJivbxWxZgLczFtNDNJGTMPtUBDIq30U-bm3-Pc43SHmHuRY0RoY7qTpTeTUyMeeKd_dzqvAygbJ_BTwiyTYgKVUhNoLks1XMZj31xtpdufqT-S8U3qM2AijGE2guG9rCKqzsYm_iAFs3tGA_fvEAYO3zOIe3EkqQYnHcEh--eBKt77wFjkrttuABGZBSCyhmFH0nsS1pXlUZN_yDUtdYZCVq2P2OoQdJzgnODbDewQ-zz-OobEA1GfYs9jEI",
        category: "Hương Gỗ",
        concentration: "Eau de Parfum",
        gender: "Male",
        description: "Hương thơm gỗ thơm nồng nàn, thể hiện bản lĩnh đàn ông tự do và quyết đoán.",
        notes: { top: "Bưởi, Chanh", middle: "Gừng, Bạc hà", base: "Gỗ đàn hương, Tuyết tùng" },
        isTrending: false
    },
    {
        id: "6",
        name: "Acqua di Giò",
        brand: "Giorgio Armani",
        price: 2100000,
        rating: 4.6,
        reviews: 2100,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeGA16NgAIEqLiVxOkScceTw6Qpv_2Pdf1tXh-R0oYEXrA7t-UMbVufmcCG4NTsOJm3UUgyIEtrDaqnwv9QR69pz6WCV6b5I8Tzf7Lo6HzgzhPYu60ZkIYNebHpDGr-SBB49Y86yZoltE25YGzxQ08C0a45aY2F_zgFoy97OpUr11SKdzaLBT4v1QqYdhjlCZqQHIrbbMT_K_gAca_09NcI7giuHDLTbASXCNgW58OJV6RBVcDdnRdLwOeEhS1CHCDwQIhQl_1vlo",
        category: "Hương Biển",
        concentration: "Eau de Toilette",
        gender: "Male",
        description: "Một hương thơm của gió biển, mặt trời và sự tự do.",
        notes: { top: "Hương biển, Cam chanh", middle: "Hoa nhài, Hương thảo", base: "Gỗ, Xạ hương" },
        isTrending: false
    },
    {
        id: "7",
        name: "Black Orchid",
        brand: "Tom Ford",
        price: 3100000,
        rating: 4.4,
        reviews: 600,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHip_Z_ms6ld1s8CHJivbxWxZgLczFtNDNJGTMPtUBDIq30U-bm3-Pc43SHmHuRY0RoY7qTpTeTUyMeeKd_dzqvAygbJ_BTwiyTYgKVUhNoLks1XMZj31xtpdufqT-S8U3qM2AijGE2guG9rCKqzsYm_iAFs3tGA_fvEAYO3zOIe3EkqQYnHcEh--eBKt77wFjkrttuABGZBSCyhmFH0nsS1pXlUZN_yDUtdYZCVq2P2OoQdJzgnODbDewQ-zz-OobEA1GfYs9jEI",
        category: "Hương Phương Đông",
        concentration: "Eau de Parfum",
        gender: "Unisex",
        description: "Sang trọng, gợi cảm và bí ẩn. Một hương thơm hiện đại và trường tồn.",
        notes: { top: "Nấm truffle, Ylang-Ylang", middle: "Hoa lan đen", base: "Hoắc hương, Vanilla" },
        isTrending: false
    },
    {
        id: "8",
        name: "Aventus",
        brand: "Creed",
        price: 6500000,
        rating: 4.9,
        reviews: 990,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR4xQ6WR3ICLS6UhfNUXF8H4mCWXHvY0N0Aij5P1ezadYSxMGtP2ZvIRasBin45kRu08l2mSl42IhdudGR9noQvST3Gn60z0SHhpckBY3y0BrjYI0HvfaGrdkxDK4vi-_soMulEtEUVM8ZCTwxUdc8B3hrlTkuYyLOQ0d3R6S1bSqRrR7OdCj5h5VnRSl3cpKJCMsLOorznnebBhxoBbTRdIO1mT8kSfjZvpM4_tcYl472MvmAFM2wwhMIuDKwnrhU8Az_bGwXohE",
        category: "Hương Trái Cây",
        concentration: "Eau de Parfum",
        gender: "Male",
        description: "Lấy cảm hứng từ cuộc đời đầy kịch tính của một hoàng đế lịch sử, tôn vinh sức mạnh và thành công.",
        notes: { top: "Dứa, Nho đen", middle: "Bạch dương, Hoắc hương", base: "Rêu sồi, Vanilla" },
        isTrending: false
    },
    {
        id: "9",
        name: "English Pear & Freesia",
        brand: "Jo Malone London",
        price: 3600000,
        rating: 4.7,
        reviews: 800,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbtJaZCFWiyOgr5KIMHo1UMLL6wjIn-6hQL1hQ1xrVKLptnUkfhKOjRtA97_WNucktzWyFEGdndsUyfMNMnMrwKTPlsdkr7sSMHw3ZJboPP7TM9DiUS1uShlWHxJ4PmPkegYoDF26ubl_3x3PXrTWCLa-_U2dM4mQJ4iYq24EY2WemYZcxGmkkIFrnkXm2b-HMeYFRjdkzil0Q1vvFRN1Mfk6JU7Hp2HCNBUMg89Ezwgnb3JNi8aUH9BQjoHmGe3uAKP1Km6XgS3M",
        category: "Hương Hoa Cỏ",
        concentration: "Cologne",
        gender: "Female",
        description: "Sự tươi mát gợi cảm của những quả lê vừa chín tới được bao bọc trong bó hoa lan nam phi trắng.",
        notes: { top: "Lê William", middle: "Lan Nam Phi", base: "Hoắc hương" },
        isTrending: true
    },
    {
        id: "10",
        name: "Bloom",
        brand: "Gucci",
        price: 2900000,
        rating: 4.6,
        reviews: 1100,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrab4Id5Z1CbvxxSLdYZ-TbZ6jVtjejnn4PRqD6Wrnt-IXiQdiKAKQZSH0OgCZ88CB_GTDGSZ0MH9h03VcbsAS1G2KtkLqi2XfQXsQPDNPwsjkeWwo8kY6Y2EBCSuQXRnfux_cn-9t5ASD7N_dbBLwyy6QId3NYLdKqjpZSBZ4ciR-Vry_se_MXfk5qvKFhP7YjJ46MHMiSp9VZ0l1y3QIYKHIjfPgXdKqc8DGWxg73w-oBN4tmIO31XR-mX_CjP3JwPAi_j1HSMo",
        category: "Hương Hoa Cỏ",
        concentration: "Eau de Parfum",
        gender: "Female",
        description: "Một khu vườn đầy hoa và cây cối phong phú, tôn vinh vẻ đẹp chân thực của người phụ nữ.",
        notes: { top: "Hoa nhài", middle: "Hoa huệ", base: "Hoa sử quân tử" },
        isTrending: true
    }
];

export const MOCK_USER: UserProfile = {
    name: "Lê Nguyễn Hoài An",
    email: "an.le@example.com",
    phone: "090 xxx 8888",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQGXRI0Jk8YS0p9aTjsDVTWsqRSZrjtpyDOaJiDnBTnjQh5nEOZVYtLV-Yd2o-CLCS46TuE633nyXxzrkzNdZLcHziMOCtBUf8e3Mbicpk5LnfWZrco_LLGO9eSCBS1iFd47w3ialavKCaGHwegmEsHTRyTcuRwFbFNvDZtpLTdUj-wSck9nv51mlm5TiHJbVjGYGHwtC726KTe8loyTyNJDajif7mmwJWH40fapoNIgmiodTuwqEAAQIxA2JbuwsNCYl4EtE2X68",
    addresses: [
        {
            id: "1",
            name: "Lê Nguyễn",
            phone: "(+84) 987 654 321",
            details: "123 Đường Lê Lợi, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh",
            isDefault: true
        },
        {
            id: "2",
            name: "Văn phòng công ty",
            phone: "(+84) 123 456 789",
            details: "Tầng 10, Tòa nhà Bitexco, 2 Hải Triều, Phường Bến Nghé, Quận 1, TP.HCM",
            isDefault: false
        }
    ]
};

export const MOCK_ORDERS: Order[] = [
    {
        id: "ORD-9283",
        date: "20/10/2024",
        status: "delivered",
        total: 2500000,
        items: [
            {...PRODUCTS[0], quantity: 1}
        ]
    },
    {
        id: "ORD-8821",
        date: "15/10/2024",
        status: "shipping",
        total: 4100000,
        items: [
            {...PRODUCTS[1], quantity: 1}
        ]
    },
    {
        id: "ORD-7732",
        date: "01/10/2024",
        status: "cancelled",
        total: 3800000,
        items: [
            {...PRODUCTS[2], quantity: 1}
        ]
    }
];

export const MOCK_VOUCHERS: Voucher[] = [
    {
        id: "V1",
        code: "WELCOME20",
        description: "Giảm 20% cho đơn hàng đầu tiên",
        discountPercent: 20,
        minSpend: 0,
        expiryDate: "31/12/2024",
        type: "discount"
    },
    {
        id: "V2",
        code: "FREESHIP",
        description: "Miễn phí vận chuyển cho đơn từ 1 triệu",
        discountAmount: 25000,
        minSpend: 1000000,
        expiryDate: "30/11/2024",
        type: "shipping"
    },
    {
        id: "V3",
        code: "DIOR50K",
        description: "Giảm 50k khi mua nước hoa Dior",
        discountAmount: 50000,
        minSpend: 2000000,
        expiryDate: "15/11/2024",
        type: "discount"
    }
];
