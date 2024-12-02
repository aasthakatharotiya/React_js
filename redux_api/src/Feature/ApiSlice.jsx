// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';

// export const fetchApi = createAsyncThunk("fetchApi", async () => {
//     let response = await axios.get("https://fakestoreapi.com/products")
//     let res = response.data
//     return res
// })

// export const Api = createSlice({
//     name: "Api",
//     initialState: {data: [], loading: true},
//     reducers: {},

//     extraReducers: (builder => {
//         builder.addCase(fetchApi.pending, (state, action) => {
//             state.loading = true
//         }),
//         builder.addCase(fetchApi.fulfilled, (state, action) => {
//             state.loading = false
//             state.data = action.payload
//         })
//     })
// })

// export default Api.reducer












import { createSlice } from "@reduxjs/toolkit";

const hardcodedData = [    

    //Food
    {
        id: 9, title: "Pizza",
        price: "$ 5.96", del: "$ 9.35", category: "food",
        image: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU="
    },
    {
        id: 10, title: "Burger",
        price: "$ 2.36", del: "$ 3.54", category: "food",
        image: "https://img.freepik.com/premium-photo/horizontal-burger-restaurant_198067-244011.jpg"
    },
    {
        id: 11, title: "Pani - Puri",
        price: "$ 1.19", del: "$ 2.38", category: "food",
        image: "https://cf-img-a-in.tosshub.com/sites/visualstory/stories/2022_03/story_6143/assets/18.jpeg?time=1647838385"
    },
    {
        id: 12, title: "Ice - Cream",
        price: "$ 2.38", del: "$ 4.76", category: "food",
        image: "https://t3.ftcdn.net/jpg/05/81/72/02/360_F_581720227_ClzwYRAPhKsFtM0MMa87Wzl4ZEQ2kZW0.jpg"
    },

    //Beauty
    {
        id: 13, title: "Perfumes",
        price: "$ 11.91", del: "$ 17.87", category: "beauty",
        image: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/wi/art/5c0e60ebdcbe2.jpeg"
    },
    {
        id: 14, title: "Make-Up",
        price: "$ 23.83", del: "$ 26.21", category: "beauty",
        image: "https://img.freepik.com/premium-photo/collection-makeup-products-including-brand-makeup_1089151-66388.jpg"
    },
    {
        id: 15, title: "Face Product",
        price: "$ 49.61", del: "$ 59.57", category: "beauty",
        image: "https://t4.ftcdn.net/jpg/05/97/29/71/360_F_597297121_5ggzPOAWWpwCDmpLV76teGzb9ahHxvKY.jpg"
    },
    {
        id: 16, title: "Nail Product",
        price: "$ 11.91", del: "$ 15.49", category: "beauty",
        image: "https://www.thelist.com/img/gallery/the-real-difference-between-gel-and-acrylic-nails/intro-1581519320.jpg"
    },

    //Gift
    {
        id: 17, title: "Teddy",
        price: "$ 11.91", del: "$ 17.87", category: "gift",
        image: "https://img.freepik.com/premium-photo/teddy-bear-with-santa-hat-sits-christmas-gift_913266-40669.jpg"
    },
    {
        id: 18, title: "Show Piece",
        price: "$ 23.83", del: "$ 26.21", category: "gift",
        image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/4938a636-4799-4e06-b6c4-fdf8192e0d1d.__CR0,0,970,600_PT0_SX970_V1___.jpg"
    },
    {
        id: 19, title: "Chocolate",
        price: "$ 49.61", del: "$ 59.57", category: "gift",
        image: "https://static.vecteezy.com/system/resources/previews/035/824/062/non_2x/ai-generated-box-of-assorted-chocolates-on-wooden-table-closeup-view-a-box-of-assorted-valentine-s-day-chocolates-ai-generated-free-photo.jpg"
    },
    {
        id: 20, title: "Photo Frame",
        price: "$ 15.49", del: "$ 17.87", category: "gift",
        image: "https://m.media-amazon.com/images/I/91UsjaiFNvL._AC_UF894,1000_QL80_.jpg"
    },

    //Electronic
    {
        id: 21, title: "Mobile",
        price: "$ 35.73", del: "$ 47.64", category: "electronic",
        image: "https://cdn.mos.cms.futurecdn.net/CtE3WTrL8UJiKT7GkaighQ-1200-80.jpg"
    },
    {
        id: 22, title: "Refrigerator",
        price: "$ 23.82", del: "$ 47.64", category: "electronic",
        image: "https://vcdn1-sohoa.vnecdn.net/2022/12/12/Untitled-2a2-2346-1670781124.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=LLtbtjniGaiSyHBK0HSnkg"
    },
    {
        id: 23, title: "Smart Watch",
        price: "$ 95.29", del: "$ 119.11", category: "electronic",
        image: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/05/Best-Smartwatch.jpg"
    },
    {
        id: 24, title: "Television",
        price: "$ 107.20", del: "$ 119.11", category: "electronic",
        image: "https://cdn.mos.cms.futurecdn.net/U9KtmMVu8NaGYv4vN2PUX3-1200-80.jpg"
    },

    //Mens
    {
        id: 1, title: "Men's Party Wear",
        price: "$ 23.82", del: "$ 47.64", category: "men",
        image: "https://www.kalkifashion.com/blogs/wp-content/uploads/2023/02/275064541_925471638154499_5063582770141409576_n-819x1024.jpg"
    },
    {
        id: 2, title: "Men's Suit",
        price: "$ 17.87", del: "$ 35.73", category: "men",
        image: "https://feeds.abplive.com/onecms/images/uploaded-images/2023/04/24/6f2fb6452d4c1a033b1e41a41c989058da201.jpg"
    },
    {
        id: 3, title: "Men's Kurta",
        price: "$ 41.69", del: "$ 59.56", category: "men",
        image: "https://i.pinimg.com/736x/eb/a2/ac/eba2ac1cc07e99ea6644c3bded7aab77.jpg"
    },
    {
        id: 4, title: "Men's Full Sleeve Shirt",
        price: "$ 15.49", del: "$ 17.87", category: "men",
        image: "https://cdn.shopify.com/s/files/1/0795/4186/2686/files/131a572bd4e271c89e98dbdfe7f4f070_480x480.jpg?v=1718110419"
        // image: "https://cdn.shopify.com/s/files/1/0795/4186/2686/files/131a572bd4e271c89e98dbdfe7f4f070_480x480.jpg?v=1718110419"
    },

    //Womens
    {
        id: 5, title: "Women's Party Wear",
        price: "$ 35.73", del: "$ 47.64", category: "women",
        // image: "https://cdn.shopify.com/s/files/1/0616/7209/5961/files/UntitledSession83748_600x.jpg?v=1688119714"
        image: "https://static.india.com/wp-content/uploads/2023/11/Winter-Inspired-Wedding-Outfit-8.png?impolicy=Medium_Widthonly&w=400&h=800"
    },
    {
        id: 6, title: "Women's Suit",
        price: "$ 23.82", del: "$ 35.73", category: "women",
        image: "https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/816/049/new_medium/Anamika.jpg?1555413704"
    },
    {
        id: 7, title: "Women's Saree",
        price: "$ 35.73", del: "$ 47.64", category: "women",
        image: "https://www.zakarto.com/wp-content/uploads/2020/07/340333080.jpg"
        // image: "https://wallpapers.com/images/hd/kajol-in-red-saree-3kfr70qm2pd1dt3y.jpg"
    },
    {
        id: 8, title: "Women's Western Wear",
        price: "$ 23.82", del: "$ 47.64", category: "women",
        image: "https://i0.wp.com/www.wedress.in/wp-content/uploads/2023/08/VDM1982304.jpg?fit=640%2C906&ssl=1"
        // image: "https://media.vogue.in/wp-content/uploads/2022/08/289604549_544709033764089_8044135738214050980_n.jpg"
    },
];

export const Api = createSlice({
    name: "Api",
    initialState: { data: hardcodedData, loading: false }, // Directly use hardcoded data
    reducers: {},
});

export default Api.reducer;
