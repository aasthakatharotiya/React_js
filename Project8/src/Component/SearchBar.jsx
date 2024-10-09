import React, { useState } from 'react';

export default function SearchBar() {
    const [name, setName] = useState('');
    const [activeButton, setActiveButton] = useState('food'); // Default to 'food'
    const [searchQuery, setSearchQuery] = useState(''); // State to store search input
    const [currentIndex, setCurrentIndex] = useState(0); // State for current slide index

    const food_arr = [
        { name: "Pizza", button: "Order Now !", msg: "BUY 1, GET 1 FREE", price: "$ 5.96", del: "$ 9.35", img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=" },
        { name: "Pasta", button: "Order Now !", msg: "20% OFF", price: "$ 1.19", del: "$ 1.43", img: "https://transform-cf1.nws.ai/https%3A//cdn.thenewsroom.io/platform/story_media/1288825470/s6-53.webp/w_1200,c_limit/" },
        { name: "Burger", button: "Order Now !", msg: "BUY 2, GET 1 FREE", price: "$ 2.36", del: "$ 3.54", img: "https://img.freepik.com/premium-photo/horizontal-burger-restaurant_198067-244011.jpg" },
        { name: "Pani - Puri", button: "Order Now !", msg: "Unlimited", price: "$ 1.19", del: "$ 2.38", img: "https://cf-img-a-in.tosshub.com/sites/visualstory/stories/2022_03/story_6143/assets/18.jpeg?time=1647838385" },
        { name: "Gujrati Thali", button: "Order Now !", msg: "Unlimited", price: "$ 4.75", del: "$ 5.95", img: "https://img.freepik.com/premium-photo/classic-gujarati-thali-featuring-khadi-rotla-vari_1177965-117824.jpg" },
        { name: "Panjabi Thali", button: "Order Now !", msg: "Unlimited", price: "$ 5.95", del: "$ 9.53", img: "https://t4.ftcdn.net/jpg/02/28/28/15/360_F_228281535_DbxC98AAXl0TOe2TcasxiUU53s7etqox.jpg" },
        { name: "Ice - Cream", button: "Order Now !", msg: "10% OFF", price: "$ 2.38", del: "$ 4.76", img: "https://t3.ftcdn.net/jpg/05/81/72/02/360_F_581720227_ClzwYRAPhKsFtM0MMa87Wzl4ZEQ2kZW0.jpg" },
        { name: "Chocolate", button: "Order Now !", msg: "50% OFF", price: "$ 1.19", del: "$ 2.38", img: "https://img.freepik.com/premium-photo/world-chocolate-day-box-chocolates_780838-3872.jpg?w=360" },
    ];

    const beauty_arr = [
        { name: "Perfumes", button: "Order Now !", msg: "50% OFF", price: "$ 11.91", del: "$ 17.87", img: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/wi/art/5c0e60ebdcbe2.jpeg" },
        { name: "Make-Up", button: "Order Now !", msg: "20% OFF", price: "$ 23.83", del: "$ 26.21", img: "https://img.freepik.com/premium-photo/collection-makeup-products-including-brand-makeup_1089151-66388.jpg" },
        { name: "Eye Product", button: "Order Now !", msg: "30% OFF", price: "$ 11.91", del: "$ 15.49", img: "https://m.media-amazon.com/images/I/41GQqmxD75L._AC_UF1000,1000_QL80_.jpg" },
        { name: "Face Product", button: "Order Now !", msg: "10% OFF", price: "$ 49.61", del: "$ 59.57", img: "https://t4.ftcdn.net/jpg/05/97/29/71/360_F_597297121_5ggzPOAWWpwCDmpLV76teGzb9ahHxvKY.jpg" },
        { name: "Lip stick", button: "Order Now !", msg: "50% OFF", price: "$ 5.96", del: "$ 11.91", img: "https://media.istockphoto.com/id/1206778026/it/vettoriale/rossetto-in-diversi-colori-naturali-concetto-di-make-up-illustrazione-orizzontale.jpg?s=612x612&w=0&k=20&c=7Y4xNzzLjNO7a1nqWhV4Eejhme08VQhvXQVC7K68uSE=" },
        { name: "Nail Product", button: "Order Now !", msg: "30% OFF", price: "$ 11.91", del: "$ 15.49", img: "https://www.thelist.com/img/gallery/the-real-difference-between-gel-and-acrylic-nails/intro-1581519320.jpg" },
        { name: "Hair Product", button: "Order Now !", msg: "20% OFF", price: "$ 15.49", del: "$ 17.87", img: "https://png.pngtree.com/thumb_back/fh260/background/20230816/pngtree-a-small-table-with-several-products-and-a-hair-brush-image_13021859.jpg" },
        { name: "Facial Product", button: "Order Now !", msg: "10% OFF", price: "$ 35.74", del: "$ 41.70", img: "https://us.123rf.com/450wm/serezniy/serezniy2312/serezniy231207640/222620310-facial-sheet-mask-with-different-cosmetic-products-on-blue-background.jpg?ver=6" },
    ];

    const cloth_arr = [
        { name: "Women Party Wear", button: "Add To Cart", msg: "30% OFF", price: "$ 35.73", del: "$ 47.64", img: "https://cdn.shopify.com/s/files/1/0616/7209/5961/files/UntitledSession83748_600x.jpg?v=1688119714" },
        // { name: "Women Lehenga", button: "Add To Cart", msg: "50% OFF", price: "$ 1.19", del: "$ 2.38", img: "https://static.india.com/wp-content/uploads/2023/11/Winter-Inspired-Wedding-Outfit-8.png?impolicy=Medium_Widthonly&w=400&h=800" },
        { name: "Men Party Wear", button: "Add To Cart", msg: "40% OFF", price: "$ 23.82", del: "$ 47.64", img: "https://www.kalkifashion.com/blogs/wp-content/uploads/2023/02/275064541_925471638154499_5063582770141409576_n-819x1024.jpg" },
        { name: "Traditional Wear Pair", button: "Add To Cart", msg: "20% OFF", price: "$ 95.29", del: "$ 119.11", img: "https://i.pinimg.com/736x/88/c4/87/88c48703eb25b9de611fcc749589a8b4.jpg" },
        { name: "Party Wear Pair", button: "Add To Cart", msg: "10% OFF", price: "$ 107.20", del: "$ 119.11", img: "https://img.mensxp.com/media/content/2023/Feb/Inside-image-2-243_63f5d4a098a6a.jpeg?w=900&h=1125&cc=1" },
        { name: "Women Suit", button: "Add To Cart", msg: "30% OFF", price: "$ 23.82", del: "$ 35.73", img: "https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/816/049/new_medium/Anamika.jpg?1555413704" },
        { name: "Men Suit", button: "Add To Cart", msg: "50% OFF", price: "$ 17.87", del: "$ 35.73", img: "https://feeds.abplive.com/onecms/images/uploaded-images/2023/04/24/6f2fb6452d4c1a033b1e41a41c989058da201.jpg" },
        { name: "Saree", button: "Add To Cart", msg: "10% OFF", price: "$ 35.73", del: "$ 47.64", img: "https://wallpapers.com/images/hd/kajol-in-red-saree-3kfr70qm2pd1dt3y.jpg" },
        // { name: "Saree", button: "Add To Cart", msg: "50% OFF", price: "$ 1.19", del: "$ 2.38", img: "https://i0.wp.com/wittyvows.com/wp-content/uploads/2018/12/IMG-4936-Copy.jpg" },
        { name: "Kurta", button: "Add To Cart", msg: "20% OFF", price: "$ 41.69", del: "$ 59.56", img: "https://i.pinimg.com/736x/eb/a2/ac/eba2ac1cc07e99ea6644c3bded7aab77.jpg" },
    ];

    const electric_arr = [
        { name: "Mobile", button: "Add To Cart", msg: "Buds FREE", price: "$ 35.73", del: "$ 47.64", img: "https://cdn.mos.cms.futurecdn.net/CtE3WTrL8UJiKT7GkaighQ-1200-80.jpg" },
        { name: "Refrigerator", button: "Add To Cart", msg: "FREE Delivery", price: "$ 23.82", del: "$ 47.64", img: "https://vcdn1-sohoa.vnecdn.net/2022/12/12/Untitled-2a2-2346-1670781124.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=LLtbtjniGaiSyHBK0HSnkg" },
        { name: "Smart Watch", button: "Add To Cart", msg: "Different Belt FREE", price: "$ 95.29", del: "$ 119.11", img: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/05/Best-Smartwatch.jpg" },
        { name: "Television", button: "Add To Cart", msg: "Scratch Card", price: "$ 107.20", del: "$ 119.11", img: "https://cdn.mos.cms.futurecdn.net/U9KtmMVu8NaGYv4vN2PUX3-1200-80.jpg" },
        { name: "Oven", button: "Add To Cart", msg: "50% OFF", pprice: "$ 23.82", del: "$ 35.73", img: "https://www.silviocicchi.com/pizzachef/wp-content/uploads/2021/02/Utilizzare-il-Forno-a-Microonde-in-Modo-Alternativo1.jpg" },
        { name: "Mixer", button: "Add To Cart", msg: "20% OFF", price: "$ 17.87", del: "$ 35.73", img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mixer-grinder-juicer/n/p/6/-original-imah22bpj6myfz2f.jpeg?q=90&crop=false" },
        { name: "Washing Machine", button: "Add To Cart", msg: "Life Time Service", price: "$ 35.73", del: "$ 47.64", img: "https://m.economictimes.com/thumb/msid-100198136,width-1600,height-900,resizemode-4,imgsize-32184/og_washing_machine.jpg" },
        { name: "Computer", button: "Add To Cart", msg: "Projector FREE", price: "$ 41.69", del: "$ 59.56", img: "https://images.pexels.com/photos/7899236/pexels-photo-7899236.jpeg" },
    ];

    const gift_arr = [
        { name: "Teddy", button: "Order Now !", msg: "50% OFF", price: "$ 11.91", del: "$ 17.87", img: "https://img.freepik.com/premium-photo/teddy-bear-with-santa-hat-sits-christmas-gift_913266-40669.jpg" },
        { name: "Show Piece", button: "Order Now !", msg: "20% OFF", price: "$ 23.83", del: "$ 26.21", img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/4938a636-4799-4e06-b6c4-fdf8192e0d1d.__CR0,0,970,600_PT0_SX970_V1___.jpg" },
        { name: "Night Lamp", button: "Order Now !", msg: "30% OFF", price: "$ 11.91", del: "$ 15.49", img: "https://i.etsystatic.com/41899255/r/il/a08047/4964715384/il_340x270.4964715384_otwj.jpg" },
        { name: "Photo Frame", button: "Order Now !", msg: "20% OFF", price: "$ 15.49", del: "$ 17.87", img: "https://m.media-amazon.com/images/I/91UsjaiFNvL._AC_UF894,1000_QL80_.jpg" },
        { name: "Toys", button: "Order Now !", msg: "30% OFF", price: "$ 11.91", del: "$ 15.49", img: "https://cdn.thewirecutter.com/wp-content/media/2023/10/kids-gifts-2048px-9244.jpg?auto=webp&quality=60&width=570" },
        { name: "Chocolate", button: "Order Now !", msg: "10% OFF", price: "$ 49.61", del: "$ 59.57", img: "https://static.vecteezy.com/system/resources/previews/035/824/062/non_2x/ai-generated-box-of-assorted-chocolates-on-wooden-table-closeup-view-a-box-of-assorted-valentine-s-day-chocolates-ai-generated-free-photo.jpg" },
        { name: "Men Combo", button: "Order Now !", msg: "50% OFF", price: "$ 5.96", del: "$ 11.91", img: "https://m.media-amazon.com/images/I/71QCEr+1BmL._AC_UF1000,1000_QL80_.jpg" },
        { name: "Books", button: "Order Now !", msg: "10% OFF", price: "$ 35.74", del: "$ 41.70", img: "https://thumbs.dreamstime.com/b/books-inside-gift-box-gift-concept-d-rendering-books-inside-gift-box-gift-concept-d-rendering-isolated-white-background-103965409.jpg" },
    ];

    const food_data = food_arr.filter((item) => item.name.includes(name.charAt(0).toUpperCase() + name.slice(1)));
    const beauty_data = beauty_arr.filter((item) => item.name.includes(name.charAt(0).toUpperCase() + name.slice(1)));
    const cloth_data = cloth_arr.filter((item) => item.name.includes(name.charAt(0).toUpperCase() + name.slice(1)));
    const electric_data = electric_arr.filter((item) => item.name.includes(name.charAt(0).toUpperCase() + name.slice(1)));
    const gift_data = gift_arr.filter((item) => item.name.includes(name.charAt(0).toUpperCase() + name.slice(1)));

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    // Combine all arrays into one to search across all categories
    const combinedItems = [...food_arr, ...beauty_arr, ...cloth_arr, ...electric_arr, ...gift_arr];

    // Filter items based on search input
    const filteredItems = combinedItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Function to go to the previous slide
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1));
    };

    // Function to go to the next slide
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div>
            <center>
                <div style={{ height: '100vh', overflow: 'hidden' }}>
                    <div className="slide_head">
                        <h1>Search Product</h1>
                        <div className="input_css">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value); // Update search query on input change
                                    setCurrentIndex(0); // Reset index when the search query changes
                                }}

                                className='search_bar'
                            />
                            <button>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>

                    {filteredItems.length > 0 && (
                        <div style={{ position: 'relative', width: '95%', height: '91%' }}>
                            <div className='bg_slide'
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${filteredItems[currentIndex].img})`,
                                }}
                            >
                                <div style={{ textAlign: 'center' }}>
                                    <h1 className='slide_name'>{filteredItems[currentIndex].name}</h1>
                                    <div className="slide_price">
                                        <h2>{filteredItems[currentIndex].price}</h2> <del>{filteredItems[currentIndex].del}</del>
                                    </div>
                                    <p className='slide_msg'>{filteredItems[currentIndex].msg}</p>
                                    <button
                                        className='slide_btn'
                                        onClick={() => {
                                            let storedItems = JSON.parse(localStorage.getItem('storedProducts')) || [];
                                            let newProduct = { name: e.name, price: e.price, msg: e.msg };
                                            storedItems.push(newProduct);
                                            localStorage.setItem('storedProducts', JSON.stringify(storedItems));
                                            alert('Product added to local storage');
                                        }}
                                    >
                                        {filteredItems[currentIndex].button}
                                    </button>
                                </div>
                            </div>
                            <button onClick={handlePrev} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', background: 'rgba(0, 0, 0, 0.5)', color: '#fff', border: 'none', cursor: 'pointer', padding: '10px', zIndex: 1000, fontSize: '30px' }}>
                                <i class="fa-solid fa-chevron-left"></i>
                            </button>
                            <button onClick={handleNext} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', background: 'rgba(0, 0, 0, 0.5)', color: '#fff', border: 'none', cursor: 'pointer', padding: '10px', zIndex: 1000, fontSize: '30px' }}>
                                <i class="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    )}
                </div>
            </center>
            <center style={{ marginTop: '-0px' }}>
                <div>
                    <div className="pr_head">
                        <h1>Our Product</h1>

                        <div className="pr_redirect">
                            <button id='food_btn' onClick={() => handleButtonClick('food')}
                                style={{
                                    backgroundColor: activeButton === 'food' ? 'rgb(255, 0, 119)' : 'transparent',
                                    border: activeButton === 'food' ? 'none' : '2px solid',
                                }}
                            >Food</button>
                            <button id='beauty_btn' onClick={() => handleButtonClick('beauty')}
                                style={{
                                    backgroundColor: activeButton === 'beauty' ? 'rgb(255, 0, 119)' : 'transparent',
                                    border: activeButton === 'beauty' ? 'none' : '2px solid',
                                }}
                            >Beauty</button>
                            <button id='cloth_btn' onClick={() => handleButtonClick('cloth')}
                                style={{
                                    backgroundColor: activeButton === 'cloth' ? 'rgb(255, 0, 119)' : 'transparent',
                                    border: activeButton === 'cloth' ? 'none' : '2px solid',
                                }}
                            >Cloth</button>
                            <button id='electric_btn' onClick={() => handleButtonClick('electric')}
                                style={{
                                    backgroundColor: activeButton === 'electric' ? 'rgb(255, 0, 119)' : 'transparent',
                                    border: activeButton === 'electric' ? 'none' : '2px solid',
                                }}
                            >Electric</button>
                            <button id='gift_btn' onClick={() => handleButtonClick('gift')}
                                style={{
                                    backgroundColor: activeButton === 'gift' ? 'rgb(255, 0, 119)' : 'transparent',
                                    border: activeButton === 'gift' ? 'none' : '2px solid',
                                }}
                            >Gift</button>
                        </div>
                    </div>

                    <div id='food_div' style={{ display: activeButton === 'food' ? 'block' : 'none' }}>
                        <div className="flex_pr">
                            {
                                food_data &&
                                food_data.map((e, i) => (
                                    <div className='pr_div' key={i}>
                                        <div className='img_div'>
                                            <img src={e.img} alt="" />
                                        </div>
                                        <h1 className='pr_name'>{e.name}</h1>
                                        <div className="flex_price">
                                            <h2>{e.price}</h2> <del>{e.del}</del>
                                        </div>
                                        <p className='pr_msg'>{e.msg}</p>
                                        <button
                                            className='pr_btn'
                                            onClick={() => {
                                                let storedItems = JSON.parse(localStorage.getItem('storedProducts')) || [];
                                                let newProduct = { name: e.name, price: e.price, msg: e.msg };
                                                storedItems.push(newProduct);
                                                localStorage.setItem('storedProducts', JSON.stringify(storedItems));
                                                alert('Product added to local storage');
                                            }}
                                        >
                                            {e.button}
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div id="beauty_div" style={{ display: activeButton === 'beauty' ? 'block' : 'none' }}>
                        <div className="flex_pr">
                            {
                                beauty_data &&
                                beauty_data.map((e, i) => (
                                    <div className='pr_div' key={i}>
                                        <div className='img_div'>
                                            <img src={e.img} alt="" />
                                        </div>
                                        <h1 className='pr_name'>{e.name}</h1>
                                        <div className="flex_price">
                                            <h2>{e.price}</h2> <del>{e.del}</del>
                                        </div>
                                        <p className='pr_msg'>{e.msg}</p>
                                        <button
                                            className='pr_btn'
                                            onClick={() => {
                                                let storedItems = JSON.parse(localStorage.getItem('storedProducts')) || [];
                                                let newProduct = { name: e.name, price: e.price, msg: e.msg };
                                                storedItems.push(newProduct);
                                                localStorage.setItem('storedProducts', JSON.stringify(storedItems));
                                                alert('Product added to local storage');
                                            }}
                                        >
                                            {e.button}
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div id="cloth_div" style={{ display: activeButton === 'cloth' ? 'block' : 'none' }}>
                        <div className="flex_pr">
                            {
                                cloth_data &&
                                cloth_data.map((e, i) => (
                                    <div className='pr_div' key={i}>
                                        <div className='cloth_height'>
                                            <img src={e.img} alt="" />
                                        </div>
                                        <h1 className='pr_name'>{e.name}</h1>
                                        <div className="flex_price">
                                            <h2>{e.price}</h2> <del>{e.del}</del>
                                        </div>
                                        <p className='pr_msg'>{e.msg}</p>
                                        <button
                                            className='pr_btn'
                                            onClick={() => {
                                                let storedItems = JSON.parse(localStorage.getItem('storedProducts')) || [];
                                                let newProduct = { name: e.name, price: e.price, msg: e.msg };
                                                storedItems.push(newProduct);
                                                localStorage.setItem('storedProducts', JSON.stringify(storedItems));
                                                alert('Product added to local storage');
                                            }}
                                        >
                                            {e.button}
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div id="electric_div" style={{ display: activeButton === 'electric' ? 'block' : 'none' }}>
                        <div className="flex_pr">
                            {
                                electric_data &&
                                electric_data.map((e, i) => (
                                    <div className='pr_div' key={i}>
                                        <div className='img_div'>
                                            <img src={e.img} alt="" />
                                        </div>
                                        <h1 className='pr_name'>{e.name}</h1>
                                        <div className="flex_price">
                                            <h2>{e.price}</h2> <del>{e.del}</del>
                                        </div>
                                        <p className='pr_msg'>{e.msg}</p>
                                        <button
                                            className='pr_btn'
                                            onClick={() => {
                                                let storedItems = JSON.parse(localStorage.getItem('storedProducts')) || [];
                                                let newProduct = { name: e.name, price: e.price, msg: e.msg };
                                                storedItems.push(newProduct);
                                                localStorage.setItem('storedProducts', JSON.stringify(storedItems));
                                                alert('Product added to local storage');
                                            }}
                                        >
                                            {e.button}
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div id="gift_div" style={{ display: activeButton === 'gift' ? 'block' : 'none' }}>
                        <div className="flex_pr">
                            {
                                gift_data &&
                                gift_data.map((e, i) => (
                                    <div className='pr_div' key={i}>
                                        <div className='img_div'>
                                            <img src={e.img} alt="" />
                                        </div>
                                        <h1 className='pr_name'>{e.name}</h1>
                                        <div className="flex_price">
                                            <h2>{e.price}</h2> <del>{e.del}</del>
                                        </div>
                                        <p className='pr_msg'>{e.msg}</p>
                                        <button
                                            className='pr_btn'
                                            onClick={() => {
                                                let storedItems = JSON.parse(localStorage.getItem('storedProducts')) || [];
                                                let newProduct = { name: e.name, price: e.price, msg: e.msg };
                                                storedItems.push(newProduct);
                                                localStorage.setItem('storedProducts', JSON.stringify(storedItems));
                                                alert('Product added to local storage');
                                            }}
                                        >
                                            {e.button}
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                </div>
            </center>
        </div>
    );
}
