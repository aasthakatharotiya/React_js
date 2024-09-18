import React, { useState } from 'react'

export default function LoginForm() {

  const [firstname, setFirstName] = useState("")
  const [firstnameErr, setFirstNameErr] = useState("")

  const [lastname, setLastName] = useState("")
  const [lastnameErr, setLastNameErr] = useState("")

  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState("")

  const [phonecall, setPhoneCall] = useState("")
  const [phonecallErr, setPhoneCallErr] = useState("")

  const [grid, setGrId] = useState("")
  const [gridErr, setGrIdErr] = useState("")

  const [state, setState] = useState("")
  const [stateErr, setStateErr] = useState("")

  const [category, setCategory] = useState("")
  const [categoryErr, setCategoryErr] = useState("")

  const [pizza, setPizza] = useState("")
  const [pizzaErr, setPizzaErr] = useState("")
  
  const [burger, setBurger] = useState("")
  const [gujarati, setGujarati] = useState("")
  const [sweet, setSweet] = useState("")

  const [quantity, setQuantity] = useState("")
  const [quantityErr, setQuantityErr] = useState("")

  const [payment, setPayment] = useState("")

  // const [rate, setRate] = useState("")

  const handleStarClick = (e) => {
    e.target.className = e.target.className === 'fa-regular fa-star' 
      ? 'fa-solid fa-star' 
      : 'fa-regular fa-star'
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let valid = true

    // ----------------------- First Name -----------------------
    if (!firstname) {
      setFirstNameErr("First Name is Required...")
      valid = false
    }
    else if (!/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(firstname)) {
      setFirstNameErr("Please Enter Valid First Name like Aastha...")
      valid = false
    }
    else {
      setFirstNameErr("")
    }

    // ----------------------- Last Name -----------------------

    if (!lastname) {
      setLastNameErr("Last Name is Required...")
      valid = false
    }
    else if (!/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(lastname)) {
      setLastNameErr("Please Enter Valid First Name like Aastha...")
      valid = false
    }
    else {
      setLastNameErr("")
    }

    // ----------------------- Email -----------------------

    if (!email) {
      setEmailErr("Email is Required...")
      valid = false
    }
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailErr("Please Enter Valid Email Like aastha@gmail.com...")
      valid = false
    }
    else {
      setEmailErr("")
    }

    // ----------------------- Phone Number -----------------------

    if (!phonecall) {
      setPhoneCallErr("Phone Number is Required...")
      valid = false
    }
    else if (!/^[0-9]+$/.test(phonecall)) {
      setPhoneCallErr("Please Enter only 10 Digit Like 1234567890...")
      valid = false
    }
    else {
      setPhoneCallErr("")
    }

    // ----------------------- GR ID -----------------------

    if (!grid) {
      setGrIdErr("GR ID is Required...")
      valid = false
    }
    else if (!/^[0-9]+$/.test(grid)) {
      setGrIdErr("Please Enter only 4 Digit Like 7257...")
      valid = false
    }
    else {
      setGrIdErr("")
    }

    // ----------------------- State -----------------------

    if (!state) {
      setStateErr("State is Required...")
      valid = false
    }
    else {
      setStateErr("")
    }

    // ----------------------- Category -----------------------

    if (!category) {
      setCategoryErr("Category is Required...")
      valid = false
    }
    else {
      setCategoryErr("")
    }

    // ----------------------- Category Product -----------------------

    if(valid)
    {
      const Food_Main = document.getElementById("Food_Main")
      const electronic_Main = document.getElementById("electronic_Main")
      const clothes_Main = document.getElementById("clothes_Main")
      const gift_Main = document.getElementById("gift_Main")
      // const Plants_Main = document.getElementById("Plants_Main")

      Food_Main.style.display = "none"
      electronic_Main.style.display = "none"
      clothes_Main.style.display = "none"
      gift_Main.style.display = "none"
      // Plants_Main.style.display = "none"

      if (category === 'Food') {
        Food_Main.style.display = "block"
      }
      else if (category === 'Electronic') {
        electronic_Main.style.display = "block"
      }
      else if (category === 'Clothes') {
        clothes_Main.style.display = "block"
      }
      else if (category === 'Gifts') {
        gift_Main.style.display = "block"
      }
      // else if (category === 'Plants') {
      //   Plants_Main.style.display = "block"
      // }

      let obj = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phonecall: phonecall,
        grid: grid,
        state: state,
        category: category
      }
      console.log(obj)

      // ----------------------- Form CSS -----------------------

      const form_main = document.getElementById("form_main")

      const name_div = document.getElementById("name_div")
      const email_div = document.getElementById("email_div")
      const phone_num_div = document.getElementById("phone_num_div")
      const id_state_div = document.getElementById("id_state_div")

      form_main.style.height = "30vh"
      // form_main.style.paddingTop = "20px"

      name_div.style.display = "none"
      email_div.style.display = "none"
      phone_num_div.style.display = "none"
      id_state_div.style.display = "none"
    }

    // ----------------------- Pizza Menu -----------------------

    const pizza_btn = document.getElementById("pizza_btn")

    let pizza_menu = document.getElementById("pizza_menu")
    let Burger_menu = document.getElementById("Burger_menu")
    let Gujarati_menu = document.getElementById("Gujarati_menu")
    let Sweet_menu = document.getElementById("Sweet_menu")

    pizza_btn.addEventListener("click", function(){
      const btn_click = document.getElementById("btn_click")
      btn_click.style.display = "block"

      pizza_menu.style.display = "block"
      Burger_menu.style.display = "none"
      Gujarati_menu.style.display = "none"
      Sweet_menu.style.display = "none"

      const cancel = document.getElementById("cancel")
      cancel.addEventListener("click", function(){
        btn_click.style.display = "none"
      })
    })

    // ----------------------- Burger Menu -----------------------

    const burger_btn = document.getElementById("burger_btn")

    burger_btn.addEventListener("click", function(){
      const btn_click = document.getElementById("btn_click")
      btn_click.style.display = "block"

      pizza_menu.style.display = "none"
      Burger_menu.style.display = "block"
      Gujarati_menu.style.display = "none"
      Sweet_menu.style.display = "none"

      const cancel = document.getElementById("cancel")
      cancel.addEventListener("click", function(){
        btn_click.style.display = "none"
      })
    })

    // ----------------------- Gujarati Menu -----------------------

    const gujarati_btn = document.getElementById("gujarati_btn")

    gujarati_btn.addEventListener("click", function(){
      const btn_click = document.getElementById("btn_click")
      btn_click.style.display = "block"

      pizza_menu.style.display = "none"
      Burger_menu.style.display = "none"
      Gujarati_menu.style.display = "block"
      Sweet_menu.style.display = "none"

      const cancel = document.getElementById("cancel")
      cancel.addEventListener("click", function(){
        btn_click.style.display = "none"
      })
    })

    // ----------------------- Sweets Menu -----------------------

    const sweet_btn = document.getElementById("sweet_btn")

    sweet_btn.addEventListener("click", function(){
      const btn_click = document.getElementById("btn_click")
      btn_click.style.display = "block"

      pizza_menu.style.display = "none"
      Burger_menu.style.display = "none"
      Gujarati_menu.style.display = "none"
      Sweet_menu.style.display = "block"

      const cancel = document.getElementById("cancel")
      cancel.addEventListener("click", function(){
        btn_click.style.display = "none"
      })
    })

    const added = document.getElementById("added")
    added.addEventListener("click", function (event) {
      event.preventDefault() 

      let food_quantity = document.getElementById("food_quantity").value
      let food_pay = document.getElementById("food_pay").value

      // Corrected selectors to get the values from the <select> elements inside the divs
      let pizza_val = document.querySelector("#pizza_menu select").value
      let burger_val = document.querySelector("#Burger_menu select").value
      let gujarati_val = document.querySelector("#Gujarati_menu select").value
      let sweet_val = document.querySelector("#Sweet_menu select").value

      if ((pizza_val !== "" || burger_val !== "" || gujarati_val !== "" || sweet_val !== "") && food_quantity !== "" && food_pay !== "") {
        document.getElementById("btn_click").style.display = "none"

        let product = {
          pizza: pizza_val, // Use the corrected variable names
          burger: burger_val,
          gujarati: gujarati_val,
          sweet: sweet_val,
          quantity: food_quantity,
          payment: food_pay,
        }
        console.log(product)
      }
    })

    // ----------------------- Mobile -----------------------

    const mobile_btn = document.getElementById("mobile_btn")

    let mobile_menu = document.getElementById("mobile_menu")
    let tv_menu = document.getElementById("tv_menu")
    let watch_menu = document.getElementById("watch_menu")
    let freez_menu = document.getElementById("freez_menu")

    mobile_btn.addEventListener("click", function(){
      const btn_click_electronic = document.getElementById("btn_click_electronic")
      btn_click_electronic.style.display = "block"

      mobile_menu.style.display = "block"
      tv_menu.style.display = "none"
      watch_menu.style.display = "none"
      freez_menu.style.display = "none"

      const cancel_electronic = document.getElementById("cancel_electronic")
      cancel_electronic.addEventListener("click", function(){
        btn_click_electronic.style.display = "none"
      })
    })

    // ----------------------- TV -----------------------

    const tv_btn = document.getElementById("tv_btn")

    tv_btn.addEventListener("click", function(){
      const btn_click_electronic = document.getElementById("btn_click_electronic")
      btn_click_electronic.style.display = "block"

      mobile_menu.style.display = "none"
      tv_menu.style.display = "block"
      watch_menu.style.display = "none"
      freez_menu.style.display = "none"

      const cancel_electronic = document.getElementById("cancel_electronic")
      cancel_electronic.addEventListener("click", function(){
        btn_click_electronic.style.display = "none"
      })
    })

    // ----------------------- Watch -----------------------

    const watch_btn = document.getElementById("watch_btn")

    watch_btn.addEventListener("click", function(){
      const btn_click_electronic = document.getElementById("btn_click_electronic")
      btn_click_electronic.style.display = "block"

      mobile_menu.style.display = "none"
      tv_menu.style.display = "none"
      watch_menu.style.display = "block"
      freez_menu.style.display = "none"

      const cancel_electronic = document.getElementById("cancel_electronic")
      cancel_electronic.addEventListener("click", function(){
        btn_click_electronic.style.display = "none"
      })
    })

    // ----------------------- Freez -----------------------

    const freez_btn = document.getElementById("freez_btn")

    freez_btn.addEventListener("click", function(){
      const btn_click_electronic = document.getElementById("btn_click_electronic")
      btn_click_electronic.style.display = "block"

      mobile_menu.style.display = "none"
      tv_menu.style.display = "none"
      watch_menu.style.display = "none"
      freez_menu.style.display = "block"

      const cancel_electronic = document.getElementById("cancel_electronic")
      cancel_electronic.addEventListener("click", function(){
        btn_click_electronic.style.display = "none"
      })
    })

    const added_electronic = document.getElementById("added_electronic")
    added_electronic.addEventListener("click", function (event) {
      event.preventDefault() 

      let electronic_quantity = document.getElementById("electronic_quantity").value
      let electronic_pay = document.getElementById("electronic_pay").value

      // Corrected selectors to get the values from the <select> elements inside the divs
      let mobile_val = document.querySelector("#mobile_menu select").value
      let tv_val = document.querySelector("#tv_menu select").value
      let watch_val = document.querySelector("#watch_menu select").value
      let freez_val = document.querySelector("#freez_menu select").value

      if ((mobile_val !== "" || tv_val !== "" || watch_val !== "" || freez_val !== "") && electronic_quantity !== "" && electronic_pay !== "") {
        document.getElementById("btn_click_electronic").style.display = "none"

        let product_electronic = {
          Mobile: mobile_val, // Use the corrected variable names
          TV: tv_val,
          SmartWatch: watch_val,
          Refrigerator: freez_val,
          quantity: electronic_quantity,
          payment: electronic_pay,
        }
        console.log(product_electronic)
      }
    })

    // ----------------------- T-Shirt -----------------------

    const tshirt_btn = document.getElementById("tshirt_btn")

    let tshirt_menu = document.getElementById("tshirt_menu")
    let track_menu = document.getElementById("track_menu")
    let saree_menu = document.getElementById("saree_menu")
    let suit_menu = document.getElementById("suit_menu")

    tshirt_btn.addEventListener("click", function(){
      const btn_click_cloth = document.getElementById("btn_click_cloth")
      btn_click_cloth.style.display = "block"

      tshirt_menu.style.display = "block"
      track_menu.style.display = "none"
      saree_menu.style.display = "none"
      suit_menu.style.display = "none"

      const cancel_cloth = document.getElementById("cancel_cloth")
      cancel_cloth.addEventListener("click", function(){
        btn_click_cloth.style.display = "none"
      })
    })

    // ----------------------- Track -----------------------

    const track_btn = document.getElementById("track_btn")

    track_btn.addEventListener("click", function(){
      const btn_click_cloth = document.getElementById("btn_click_cloth")
      btn_click_cloth.style.display = "block"

      tshirt_menu.style.display = "none"
      track_menu.style.display = "block"
      saree_menu.style.display = "none"
      suit_menu.style.display = "none"

      const cancel_cloth = document.getElementById("cancel_cloth")
      cancel_cloth.addEventListener("click", function(){
        btn_click_cloth.style.display = "none"
      })
    })

    // ----------------------- Saree -----------------------

    const saree_btn = document.getElementById("saree_btn")

    saree_btn.addEventListener("click", function(){
      const btn_click_cloth = document.getElementById("btn_click_cloth")
      btn_click_cloth.style.display = "block"

      tshirt_menu.style.display = "none"
      track_menu.style.display = "none"
      saree_menu.style.display = "block"
      suit_menu.style.display = "none"

      const cancel_cloth = document.getElementById("cancel_cloth")
      cancel_cloth.addEventListener("click", function(){
        btn_click_cloth.style.display = "none"
      })
    })

    // ----------------------- Suit -----------------------

    const suit_btn = document.getElementById("suit_btn")

    suit_btn.addEventListener("click", function(){
      const btn_click_cloth = document.getElementById("btn_click_cloth")
      btn_click_cloth.style.display = "block"

      tshirt_menu.style.display = "none"
      track_menu.style.display = "none"
      saree_menu.style.display = "none"
      suit_menu.style.display = "block"

      const cancel_cloth = document.getElementById("cancel_cloth")
      cancel_cloth.addEventListener("click", function(){
        btn_click_cloth.style.display = "none"
      })
    })

    const added_cloth = document.getElementById("added_cloth")
    added_cloth.addEventListener("click", function (event) {
      event.preventDefault() 

      let cloth_quantity = document.getElementById("cloth_quantity").value
      let cloth_pay = document.getElementById("cloth_pay").value

      // Corrected selectors to get the values from the <select> elements inside the divs
      let tshirt_val = document.querySelector("#tshirt_menu select").value
      let track_val = document.querySelector("#track_menu select").value
      let saree_val = document.querySelector("#saree_menu select").value
      let suit_val = document.querySelector("#suit_menu select").value

      if ((tshirt_val !== "" || track_val !== "" || saree_val !== "" || suit_val !== "") && cloth_quantity !== "" && cloth_pay !== "") {
        document.getElementById("btn_click_cloth").style.display = "none"

        let product_cloth = {
          TShirt: tshirt_val, // Use the corrected variable names
          Track: track_val,
          Saree: saree_val,
          Suit: suit_val,
          quantity: cloth_quantity,
          payment: cloth_pay,
        }
        console.log(product_cloth)
      }
    })


    // ----------------------- Teddy -----------------------

    const teddy_btn = document.getElementById("teddy_btn")

    let teddy_menu = document.getElementById("teddy_menu")
    let combo_menu = document.getElementById("combo_menu")
    let show_menu = document.getElementById("show_menu")
    let toy_menu = document.getElementById("toy_menu")

    teddy_btn.addEventListener("click", function(){
      const btn_click_gift = document.getElementById("btn_click_gift")
      btn_click_gift.style.display = "block"

      teddy_menu.style.display = "block"
      combo_menu.style.display = "none"
      show_menu.style.display = "none"
      toy_menu.style.display = "none"

      const cancel_gift = document.getElementById("cancel_gift")
      cancel_gift.addEventListener("click", function(){
        btn_click_gift.style.display = "none"
      })
    })

    // ----------------------- Combo -----------------------

    const combo_btn = document.getElementById("combo_btn")

    combo_btn.addEventListener("click", function(){
      const btn_click_gift = document.getElementById("btn_click_gift")
      btn_click_gift.style.display = "block"

      teddy_menu.style.display = "none"
      combo_menu.style.display = "block"
      show_menu.style.display = "none"
      toy_menu.style.display = "none"

      const cancel_gift = document.getElementById("cancel_gift")
      cancel_gift.addEventListener("click", function(){
        btn_click_gift.style.display = "none"
      })
    })

    // ----------------------- Show Piece -----------------------

    const show_btn = document.getElementById("show_btn")

    show_btn.addEventListener("click", function(){
      const btn_click_gift = document.getElementById("btn_click_gift")
      btn_click_gift.style.display = "block"

      teddy_menu.style.display = "none"
      combo_menu.style.display = "none"
      show_menu.style.display = "block"
      toy_menu.style.display = "none"

      const cancel_gift = document.getElementById("cancel_gift")
      cancel_gift.addEventListener("click", function(){
        btn_click_gift.style.display = "none"
      })
    })

    // ----------------------- Toy -----------------------

    const toy_btn = document.getElementById("toy_btn")

    toy_btn.addEventListener("click", function(){
      const btn_click_gift = document.getElementById("btn_click_gift")
      btn_click_gift.style.display = "block"

      teddy_menu.style.display = "none"
      combo_menu.style.display = "none"
      show_menu.style.display = "none"
      toy_menu.style.display = "block"

      const cancel_gift = document.getElementById("cancel_gift")
      cancel_gift.addEventListener("click", function(){
        btn_click_gift.style.display = "none"
      })
    })

    const added_gift = document.getElementById("added_gift")
    added_gift.addEventListener("click", function (event) {
      event.preventDefault() 

      let gift_quantity = document.getElementById("gift_quantity").value
      let gift_pay = document.getElementById("gift_pay").value

      // Corrected selectors to get the values from the <select> elements inside the divs
      let teddy_val = document.querySelector("#teddy_menu select").value
      let combo_val = document.querySelector("#combo_menu select").value
      let show_val = document.querySelector("#show_menu select").value
      let toy_val = document.querySelector("#toy_menu select").value

      if ((teddy_val !== "" || combo_val !== "" || show_val !== "" || toy_val !== "") && gift_quantity !== "" && gift_pay !== "") {
        document.getElementById("btn_click_gift").style.display = "none"

        let product_gift = {
          Teddy: teddy_val, // Use the corrected variable names
          Combo: combo_val,
          ShowPiece: show_val,
          Toy: toy_val,
          quantity: gift_quantity,
          payment: gift_pay,
        }
        console.log(product_gift)
      }
    })



    // let star = document.getElementById("star")

    // star.addEventListener("click", function(){
    //   star.setAttribute("class", "fa-solid fa-star")
    // })
    
    if (!pizza) {
      setPizzaErr("Menu Selection is Required...")
    }
    else {
      setPizzaErr("")
    }

    if (!quantity) {
      setQuantityErr("Quantity is Required...")
    }
    else {
      setQuantityErr("")
    }
  }

  

  return (
    <div className='main_div'>

      <div className="form_main" id='form_main'>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div id='name_div' className="main">
            <h3>Name</h3>
            <div className="name_flex">
              <div className="first_name">
                <input type="text" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                <span>{firstnameErr}</span>
              </div>
              <div className="last_name">
                <input type="text" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                <span>{lastnameErr}</span>
              </div>
            </div>
          </div>

          <div id='email_div' className="main">
            <h3>Email</h3>
            <input type="text" placeholder='example@gmail.com' onChange={(e) => setEmail(e.target.value)} />
            <span>{emailErr}</span>
          </div>

          <div id='phone_num_div' className="main">
            <h3>Phone Number</h3>
            <div className="call">
              <div className="call_head">91+</div>
              <div className="call_num">
                <input type="text" maxLength={10} onChange={(e) => setPhoneCall(e.target.value)} placeholder="Enter 10-digit number" />
              </div>
            </div>
            <span>{phonecallErr}</span>
          </div>

          <div id='id_state_div' className="main">
            <div className="main_flex">

              <div className="GR_ID">
                <h3>GR ID</h3>
                <input type="text" maxLength={4} placeholder='Enetr GR ID' onChange={(e) => setGrId(e.target.value)} />
                <span>{gridErr}</span>
              </div>

              <div className="state">
                <h3>State</h3>
                <select name="" id="" onChange={(e) => setState(e.target.value)}>
                  <option value="">Select State</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                </select>
                <span>{stateErr}</span>
              </div>

            </div>
          </div>

          <div id='category' className="main">
            <h3>Category</h3>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select Appropriate Option</option>
              <option value="Food">Food</option>
              <option value="Electronic">Electronic</option>
              <option value="Clothes">Clothes</option>
              <option value="Gifts">Gifts</option>
              {/* <option value="Plants">Plants</option> */}
            </select>
            <span>{categoryErr}</span>

            {/* {category == "Mobile" && <h1>Mobile</h1>}
            {category == "Food" && <h1>Food</h1>}
            {category == "Plants" && <h1>Plants</h1>} */}

          </div>

          <div className="form_btn">
            <button type='submit' className='submit_btn'>Submit</button>
            <button type='reset' className='reset_btn'>Reset</button>
          </div>
        </form>
      </div>

      <center>

        <div id="Food_Main">
          <div id='food' className='container p-0'>
            <div className="row">
              
              <div className="food_col mt-5 mt-lg-0 col col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="pr_food_div">
                  <div className="food_img">
                    <img src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=" alt="" />
                    {/* <img src="https://content.jdmagicbox.com/v2/comp/delhi/k8/011pxx11.xx11.190318190909.y5k8/catalogue/royal-pizza-rohini-sector-16-delhi-pizza-outlets-2oursa5800.jpg" alt="" /> */}
                    {/* <img src="https://cdn.pixabay.com/photo/2024/05/18/21/59/pizza-8771130_1280.jpg" alt="" /> */}
                  </div>

                  <div className="food_text">
                    <h2>Pizza</h2>
                    <p><span>$3.58</span> <del>$5.38</del></p>
                    <span>BUY 1 GET 1 Free</span><br />
                    <button id='pizza_btn'>Order Now !</button>
                  </div>
                </div>
              </div>

              <div className="food_col mt-5 mt-lg-0 col col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="pr_food_div">
                  <div className="food_img">
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20240716/pngtree-a-mouthwatering-double-smash-burger-image_16008904.jpg" alt="" />
                  </div>

                  <div className="food_text">
                    <h2>Burger</h2>
                    <p><span>$5.58</span> <del>$8.38</del></p>
                    <span>BUY 2 GET 1 Free</span><br />
                    <button id='burger_btn'>Order Now !</button>
                  </div>
                </div>
              </div>

              <div className="food_col mt-5 mt-lg-0 col col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="pr_food_div">
                  <div className="food_img">
                    <img src="https://media.istockphoto.com/id/1152647233/photo/kathiyawadi-gujarati-thali-from-indian-cuisine.jpg?s=612x612&w=0&k=20&c=mhuJeyMQuzdpi4AZJoD4xoWReEw7TFvW772RBautKN4=" alt="" />
                  </div>

                  <div className="food_text">
                    <h2>Gujarati Full Thali</h2>
                    <p><span>$10.58</span> <del>$15.38</del></p>
                    <span>50% OFF</span><br />
                    <button id='gujarati_btn'>Order Now !</button>
                  </div>
                </div>
              </div>

              <div className="food_col mt-5 mt-lg-0 col col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="pr_food_div">
                  <div className="food_img">
                    <img src="https://pistahouse.in/cdn/shop/files/MixedSweets.jpg?v=1710075468" alt="" />
                  </div>

                  <div className="food_text">
                    <h2>Sweets Of India</h2>
                    <p><span>$7.58</span> <del>$10.38</del></p>
                    <span>20% OFF</span><br />
                    <button id='sweet_btn'>Order Now !</button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div id="electronic_Main">
          <div id='electronic' className='container p-0'>
            <div className="row">
              
              <div className="electronic_col mt-5 mt-lg-0 col col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="pr_electronic_div">
                  <div className="electronic_img">
                    <img style={{height: '120%'}} src="https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$" alt="" />
                  </div>

                  <div className="electronic_text">
                    <h2>Mobile</h2>
                    <p><span>$238.87</span> <del>$245.38</del></p>
                    <span>30% OFF</span><br />
                    <button id='mobile_btn'>Order Now !</button>
                  </div>
                </div>
              </div>

              <div className="electronic_col mt-5 mt-lg-0 col col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="pr_electronic_div">
                  <div className="electronic_img">
                    {/* <img src="https://i0.wp.com/www.upsinverter.com/wp-content/uploads/2022/06/3-4.jpg?fit=602%2C602&ssl=1" alt="" /> */}
                    <img style={{width: '155%'}} src="https://cdn.mos.cms.futurecdn.net/U9KtmMVu8NaGYv4vN2PUX3-1200-80.jpg" alt="" />
                  </div>

                  <div className="electronic_text">
                    <h2>T. V.</h2>
                    <p><span>$656.89</span> <del>$666.38</del></p>
                    <span>10% OFF</span><br />
                    <button id='tv_btn'>Order Now !</button>
                  </div>
                </div>
              </div>

              <div className="electronic_col mt-5 mt-lg-0 col col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="pr_electronic_div">
                  <div className="electronic_img">
                    {/* <img src="https://m.media-amazon.com/images/I/61GRy-zyB-L._AC_UF1000,1000_QL80_.jpg" alt="" /> */}
                    <img src="https://rukminim2.flixcart.com/image/850/1000/kza68i80/smartwatch/x/u/c/33-02-android-ios-y68-smart-watch-with-heart-rate-monitor-y2h-original-imagbc5hvrzewfzc.jpeg?q=20&crop=false" alt="" />
                  </div>

                  <div className="electronic_text">
                    <h2>Smart Watch</h2>
                    <p><span>$11.94</span> <del>$21.38</del></p>
                    <span>50% OFF</span><br />
                    <button id='watch_btn'>Order Now !</button>
                  </div>
                </div>
              </div>

              <div className="electronic_col mt-5 mt-lg-0 col col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="pr_electronic_div">
                  <div className="electronic_img">
                    <img src="https://images-cdn.ubuy.co.id/639c29f96de6cc31bd54c333-3-5cu-ft-compact-refrigerator-mini.jpg" alt="" />
                  </div>

                  <div className="electronic_text">
                    <h2>Refrigerator</h2>
                    <p><span>$179.15</span> <del>$195.15</del></p>
                    <span>15% OFF</span><br />
                    <button id='freez_btn'>Order Now !</button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div id="clothes_Main">
          <div id='cloth' className='container p-0'>
            <div className="row">
              
              <div className="cloth_col mt-5 mt-lg-0 col col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="pr_cloth_div">
                  <div className="cloth_img">
                    <img src="https://m.media-amazon.com/images/I/61IcCggDkeL._SX522_.jpg" alt="" />
                  </div>

                  <div className="cloth_text">
                    <h2>T-Shirt</h2>
                    <p><span>$23.87</span> <del>$24.38</del></p>
                    <span>30% OFF</span><br />
                    <button id='tshirt_btn'>Order Now !</button>
                  </div>
                </div>
              </div>

              <div className="cloth_col mt-5 mt-lg-0 col col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="pr_cloth_div">
                  <div className="cloth_img">
                    <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/track-pant/l/s/i/s-solid-men-track-pants-pack-of-2-foxter-original-imagzvpkgaayqxqv.jpeg?q=90&crop=false" alt="" />
                  </div>

                  <div className="cloth_text">
                    <h2>Track</h2>
                    <p><span>$9.89</span> <del>$10.38</del></p>
                    <span>10% OFF</span><br />
                    <button id='track_btn'>Order Now !</button>
                  </div>
                </div>
              </div>

              <div className="cloth_col mt-5 mt-lg-0 col col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="pr_cloth_div">
                  <div className="cloth_img">
                    <img src="https://static.wixstatic.com/media/faf1ba_9f03b81fd70c4ec0b3b675e5a770ed81~mv2.jpg/v1/fill/w_980,h_1225,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/faf1ba_9f03b81fd70c4ec0b3b675e5a770ed81~mv2.jpg" alt="" />
                  </div>

                  <div className="cloth_text">
                    <h2>Saree</h2>
                    <p><span>$11.94</span> <del>$21.38</del></p>
                    <span>50% OFF</span><br />
                    <button id='saree_btn'>Order Now !</button>
                  </div>
                </div>
              </div>

              <div className="cloth_col mt-5 mt-lg-0 col col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="pr_cloth_div">
                  <div className="cloth_img">
                    <img src="https://www.sareespalace.com/image/cache/data/floor-length-anarkali-suit-for-sangeet-271705-1000x1375.jpg" alt="" />
                    {/* <img src="https://images.meesho.com/images/products/115402607/fzu5c_512.webp" alt="" /> */}
                  </div>

                  <div className="cloth_text">
                    <h2>Suit</h2>
                    <p><span>$17.15</span> <del>$19.15</del></p>
                    <span>15% OFF</span><br />
                    <button id='suit_btn'>Order Now !</button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div id="gift_Main">
          <div id='cloth' className='container p-0'>
            <div className="row">
              
              <div className="gift_col mt-5 mt-lg-0 col col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="pr_gift_div">
                  <div className="gift_img">
                    <img src="https://assets.winni.in/product/primary/2023/1/81575.jpeg?dpr=1&w=1000" alt="" />
                  </div>

                  <div className="gift_text">
                    <h2>Teddy</h2>
                    <p><span>$23.87</span> <del>$24.38</del></p>
                    <span>30% OFF</span><br />
                    <button id='teddy_btn'>Order Now !</button>
                  </div>
                </div>
              </div>

              <div className="gift_col mt-5 mt-lg-0 col col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="pr_gift_div">
                  <div className="gift_img">
                    <img src="https://cdnjs.angroos.com/wp-content/uploads/2023/01/IMG_3670-scaled.jpg" alt="" />
                  </div>

                  <div className="gift_text">
                    <h2>Combo</h2>
                    <p><span>$9.89</span> <del>$10.38</del></p>
                    <span>10% OFF</span><br />
                    <button id='combo_btn'>Order Now !</button>
                  </div>
                </div>
              </div>

              <div className="gift_col mt-5 mt-lg-0 col col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="pr_gift_div">
                  <div className="gift_img">
                    <img src="https://m.media-amazon.com/images/I/61q2HohzbxL._AC_UF894,1000_QL80_.jpg" alt="" />
                  </div>

                  <div className="gift_text">
                    <h2>Show Piece</h2>
                    <p><span>$11.94</span> <del>$21.38</del></p>
                    <span>50% OFF</span><br />
                    <button id='show_btn'>Order Now !</button>
                  </div>
                </div>
              </div>

              <div className="gift_col mt-5 mt-lg-0 col col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="pr_gift_div">
                  <div className="gift_img">
                    <img src="https://t4.ftcdn.net/jpg/03/24/42/21/360_F_324422176_Lgn7NTeFyNaUKIDu0Ppls1u8zb8wsKS4.jpg" alt="" />
                  </div>

                  <div className="gift_text">
                    <h2>Toy</h2>
                    <p><span>$17.15</span> <del>$19.15</del></p>
                    <span>15% OFF</span><br />
                    <button id='toy_btn'>Order Now !</button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* <div id="Plants_Main">
          Plants
        </div> */}
      </center>

      <div id='btn_click' style={{display: 'none'}}>
        <div id='short_form'>
          <form action="" onSubmit={(event) => handleSubmit(event)}>

            <div style={{display: 'none'}} id="pizza_menu">
              <center>
                <h1>Pizza</h1>
              </center>

              <div className="main">
                <h3>Menu</h3>
                <select onChange={(e) => setPizza(e.target.value)}>
                  <option value="">Select Appropriate Option</option>
                  <option value="Margherita">Margherita Pizza</option>
                  <option value="Italian">Italian Pizza</option>
                  <option value="Sicilian">Sicilian Pizza</option>
                  <option value="Vegetarian">Vegetarian Pizza</option>
                  <option value="Cheese">Cheese Pizza</option>
                  <option value="Mushroom">Mushroom Pizza</option>
                </select>
                {/* <span>{pizzaErr}</span> */}
              </div>

            </div>

            <div style={{display: 'none'}} id="Burger_menu">
              <center>
                <h1>Burger</h1>
              </center>

              <div className="main">
                <h3>Menu</h3>
                <select onChange={(e) => setBurger(e.target.value)}>
                  <option value="">Select Appropriate Option</option>
                  <option value="Classic">Classic Burger</option>
                  <option value="Chicken">Chicken Burger</option>
                  <option value="Specialty">Specialty Burger</option>
                  <option value="Vegetarian">Vegetarian Burger</option>
                  <option value="Cheese">Cheese Burger</option>
                  <option value="Bacon">Bacon Burger</option>
                </select>
                {/* <span>{pizzaErr}</span> */}
              </div>

            </div>

            <div style={{display: 'none'}} id="Gujarati_menu">
              <center>
                <h1>Gujarati Full Thali</h1>
              </center>

              <div className="main">
                <h3>Menu</h3>
                <select onChange={(e) => setGujarati(e.target.value)}>
                  <option value="">Select Appropriate Option</option>
                  <option value="Thali">Gujarati Full Thali</option>
                  <option value="Jalebi">Jalebi Fafda</option>
                  <option value="Dhokla">Khaman Dhokla - Patra</option>
                  <option value="Undhiyu">Undhiyu</option>
                  <option value="Lapsi">Fada ni Lapsi</option>
                  <option value="Thepla">Thepla - Tea</option>
                </select>
                {/* <span>{pizzaErr}</span> */}
              </div>

            </div>

            <div style={{display: 'none'}} id="Sweet_menu">
              <center>
                <h1>Sweets Of India</h1>
              </center>

              <div className="main">
                <h3>Menu</h3>
                <select onChange={(e) => setSweet(e.target.value)}>
                  <option value="">Select Appropriate Option</option>
                  <option value="Ghevar">Ghevar: From Rajasthan</option>
                  <option value="Rasgulla">Rasgulla: From West Bengal</option>
                  <option value="Basundi">Basundi: From Gujarat</option>
                  <option value="Modak">Modak: From Maharashtra</option>
                  <option value="Pitha">Pitha: From Assam</option>
                  <option value="Jalebi">Doodh Jalebi: From Haryana</option>
                </select>
                {/* <span>{pizzaErr}</span> */}
              </div>

            </div>

            <div className="main">
              <h3>Quantity</h3>
              <input required id='food_quantity' type="number" maxLength={10} onChange={(e) => setQuantity(e)} />
              {/* <span>{quantityErr}</span> */}
            </div>

            <div className="main">
              <h3>Payment</h3>
              <select required id='food_pay' onChange={(e) => setPayment(e)}>
                <option value="">Select Appropriate Option</option>
                <option value="Cash On Delivery">Cash On Delivery</option>
                <option value="GPay">GPay</option>
                <option value="PhonePe">PhonePe</option>
              </select>
            </div>

            <center>
              <div className="main">
                <h3></h3>
                {/* <h3>Rate</h3> */}
                {/* <i class="fa-solid fa-star"></i> */}
                
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
              </div>
            </center>

            <div className="short_form_btn">
              <button id='added' type='submit'>Add to Cart</button>
              <button id='cancel'>Cancel</button>
            </div>
          </form>
        </div>
      </div>

      <div id='btn_click_electronic' style={{display: 'none'}}>
        <div id='short_form'>
          <form action="" onSubmit={(event) => handleSubmit(event)}>

            <div style={{display: 'none'}} id="mobile_menu">
              <center>
                <h1>Mobile</h1>
              </center>

              <div className="main">
                <h3>Model</h3>
                <select>
                  <option value="">Select Appropriate Option</option>
                  <option value="Vivo">Vivo</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Apple">Apple</option>
                  <option value="OnePlus">OnePlus</option>
                  <option value="Oppo">Oppo</option>
                </select>
                {/* <span>{pizzaErr}</span> */}
              </div>

            </div>

            <div style={{display: 'none'}} id="tv_menu">
              <center>
                <h1>T. V.</h1>
              </center>

              <div className="main">
                <h3>Model</h3>
                <select>
                  <option value="">Select Appropriate Option</option>
                  <option value="LG">LG</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Sony">Sony</option>
                  <option value="Toshiba">Toshiba</option>
                  <option value="OnePlus">OnePlus</option>
                </select>
                {/* <span>{pizzaErr}</span> */}
              </div>

            </div>

            <div style={{display: 'none'}} id="watch_menu">
              <center>
                <h1>Smart Watch</h1>
              </center>

              <div className="main">
                <h3>Model</h3>
                <select>
                  <option value="">Select Appropriate Option</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Apple">Apple</option>
                  <option value="Fire Boltt">Fire Boltt</option>
                  <option value="Fastrack">Fastrack</option>
                  <option value="Realme">Realme</option>
                </select>
                {/* <span>{pizzaErr}</span> */}
              </div>

            </div>

            <div style={{display: 'none'}} id="freez_menu">
              <center>
                <h1>Refrigerator</h1>
              </center>

              <div className="main">
                <h3>Model</h3>
                <select>
                  <option value="">Select Appropriate Option</option>
                  <option value="LG">LG</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Whirlpool">Whirlpool</option>
                  <option value="Haier">Haier</option>
                  <option value="Panasonic">Panasonic</option>
                </select>
                {/* <span>{pizzaErr}</span> */}
              </div>

            </div>

            <div className="main">
              <h3>Quantity</h3>
              <input required id='electronic_quantity' type="number" maxLength={10} onChange={(e) => setQuantity(e)} />
              {/* <span>{quantityErr}</span> */}
            </div>

            <div className="main">
              <h3>Payment</h3>
              <select required id='electronic_pay' onChange={(e) => setPayment(e)}>
                <option value="">Select Appropriate Option</option>
                <option value="Cash On Delivery">Cash On Delivery</option>
                <option value="GPay">GPay</option>
                <option value="PhonePe">PhonePe</option>
              </select>
            </div>

            <center>
              <div className="main">
                <h3></h3>
                {/* <h3>Rate</h3> */}
                {/* <i class="fa-solid fa-star"></i> */}
                
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
              </div>
            </center>

            <div className="short_form_btn">
              <button id='added_electronic' type='submit'>Add to Cart</button>
              <button id='cancel_electronic'>Cancel</button>
            </div>
          </form>
        </div>
      </div>

      <div id='btn_click_cloth' style={{display: 'none'}}>
        <div id='short_form'>
          <form action="" onSubmit={(event) => handleSubmit(event)}>

            <div style={{display: 'none'}} id="tshirt_menu">
              <center>
                <h1>T-Shirt</h1>
              </center>

              <div className="main">
                <h3>Brand</h3>
                <select>
                  <option value="">Select Appropriate Option</option>
                  <option value="Nike">Nike</option>
                  <option value="Levi's">Levi's</option>
                  <option value="Mufti">Mufti</option>
                  <option value="Adidas">Adidas</option>
                  <option value="Blackberrys">Blackberrys</option>
                </select>
                {/* <span>{pizzaErr}</span> */}
              </div>

            </div>

            <div style={{display: 'none'}} id="track_menu">
              <center>
                <h1>Track</h1>
              </center>

              <div className="main">
                <h3>Brand</h3>
                <select>
                  <option value="">Select Appropriate Option</option>
                  <option value="PUMA">PUMA</option>
                  <option value="Nike">Nike</option>
                  <option value="Adidas">Adidas</option>
                  <option value="Fila">Fila</option>
                  <option value="ASICS">ASICS</option>
                </select>
                {/* <span>{pizzaErr}</span> */}
              </div>

            </div>

            <div style={{display: 'none'}} id="saree_menu">
              <center>
                <h1>Saree</h1>
              </center>

              <div className="main">
                <h3>Brand</h3>
                <select>
                  <option value="">Select Appropriate Option</option>
                  <option value="Kanjivaram Silk Saree">Kanjivaram Silk Saree</option>
                  <option value="Banarasi Saree">Banarasi Saree</option>
                  <option value="Bandhani Saree">Bandhani Saree</option>
                  <option value="Paithani Saree">Paithani Saree</option>
                  <option value="Chanderi Saree">Chanderi Saree</option>
                </select>
                {/* <span>{pizzaErr}</span> */}
              </div>

            </div>

            <div style={{display: 'none'}} id="suit_menu">
              <center>
                <h1>Suit</h1>
              </center>

              <div className="main">
                <h3>Brand</h3>
                <select>
                  <option value="">Select Appropriate Option</option>
                  <option value="Anarkali Suit">Anarkali Suit</option>
                  <option value="Palazzo salwar Suit">Palazzo salwar Suit</option>
                  <option value="Afghani Style Suit">Afghani Style Suit</option>
                  <option value="Punjabi salwar Suit">Punjabi salwar Suit</option>
                  <option value="Salwar Kameez">Salwar Kameez</option>
                </select>
                {/* <span>{pizzaErr}</span> */}
              </div>

            </div>

            <div className="main">
              <h3>Quantity</h3>
              <input required id='cloth_quantity' type="number" maxLength={10} onChange={(e) => setQuantity(e)} />
              {/* <span>{quantityErr}</span> */}
            </div>

            <div className="main">
              <h3>Payment</h3>
              <select required id='cloth_pay' onChange={(e) => setPayment(e)}>
                <option value="">Select Appropriate Option</option>
                <option value="Cash On Delivery">Cash On Delivery</option>
                <option value="GPay">GPay</option>
                <option value="PhonePe">PhonePe</option>
              </select>
            </div>

            <center>
              <div className="main">
                <h3></h3>
                {/* <h3>Rate</h3> */}
                {/* <i class="fa-solid fa-star"></i> */}
                
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
              </div>
            </center>

            <div className="short_form_btn">
              <button id='added_cloth' type='submit'>Add to Cart</button>
              <button id='cancel_cloth'>Cancel</button>
            </div>
          </form>
        </div>
      </div>

      <div id='btn_click_gift' style={{display: 'none'}}>
        <div id='short_form'>
          <form action="" onSubmit={(event) => handleSubmit(event)}>

            <div style={{display: 'none'}} id="teddy_menu">
              <center>
                <h1>Teddy</h1>
              </center>

              <div className="main">
                <h3>Color</h3>
                <select>
                  <option value="">Select Appropriate Option</option>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                  <option value="Pink">Pink</option>
                  <option value="Yellow">Yellow</option>
                </select>
                {/* <span>{pizzaErr}</span> */}
              </div>

            </div>

            <div style={{display: 'none'}} id="combo_menu">
              <center>
                <h1>Combo</h1>
              </center>

              <div className="main">
                <h3>Type</h3>
                <select>
                  <option value="">Select Appropriate Option</option>
                  <option value="Jewellery">Jewellery</option>
                  <option value="Make-Up">Make-Up</option>
                  <option value="T-Shirt">T-Shirt</option>
                  <option value="Perfume">Perfume</option>
                  <option value="Face Product">Face Product</option>
                </select>
                {/* <span>{pizzaErr}</span> */}
              </div>

            </div>

            <div style={{display: 'none'}} id="show_menu">
              <center>
                <h1>Show Piece</h1>
              </center>

              <div className="main">
                <h3>Type</h3>
                <select>
                  <option value="">Select Appropriate Option</option>
                  <option value="Plants">Plants</option>
                  <option value="Statue of God">Statue of God</option>
                  <option value="Painting">Painting</option>
                  <option value="Lights and Lamps">Lights and Lamps</option>
                  <option value="Hour Glass">Hour Glass</option>
                </select>
                {/* <span>{pizzaErr}</span> */}
              </div>

            </div>

            <div style={{display: 'none'}} id="toy_menu">
              <center>
                <h1>Toy</h1>
              </center>

              <div className="main">
                <h3>Type</h3>
                <select>
                  <option value="">Select Appropriate Option</option>
                  <option value="Bicycle">Bicycle</option>
                  <option value="Airplane">Airplane</option>
                  <option value="Doll">Doll</option>
                  <option value="Train">Train</option>
                  <option value="Ball">Ball</option>
                </select>
                {/* <span>{pizzaErr}</span> */}
              </div>

            </div>

            <div className="main">
              <h3>Quantity</h3>
              <input required id='gift_quantity' type="number" maxLength={10} onChange={(e) => setQuantity(e)} />
              {/* <span>{quantityErr}</span> */}
            </div>

            <div className="main">
              <h3>Payment</h3>
              <select required id='gift_pay' onChange={(e) => setPayment(e)}>
                <option value="">Select Appropriate Option</option>
                <option value="Cash On Delivery">Cash On Delivery</option>
                <option value="GPay">GPay</option>
                <option value="PhonePe">PhonePe</option>
              </select>
            </div>

            <center>
              <div className="main">
                <h3></h3>
                {/* <h3>Rate</h3> */}
                {/* <i class="fa-solid fa-star"></i> */}
                
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
                <i id='star' className="fa-regular fa-star" onClick={handleStarClick}></i>
              </div>
            </center>

            <div className="short_form_btn">
              <button id='added_gift' type='submit'>Add to Cart</button>
              <button id='cancel_gift'>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
