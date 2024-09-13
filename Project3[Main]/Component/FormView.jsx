import React, { useState } from 'react'

export default function FormView() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [gender, setGender] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [address, setAddress] = useState('')
  const [bgImage, setBgImage] = useState('WhatsApp_icon.jpeg')

  const change_whatsapp_icon = () => {
    setBgImage('Front_WhatsApp.jpeg')
  }

  const change_whatsapp_chat = () => {
    setBgImage('Form_Link.jpeg')
  }

  const handleFormClick = () => {
    setBgImage('')
    document.querySelector('.new_form').style.display = "block"
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      gender: gender,
      city: city,
      state: state,
      country: country,
      address: address
    }
    console.log(obj)
  }

  return (
    <div>
      <div className="main_img" style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}>
        <div className="whatsapp_icon" onClick={change_whatsapp_icon}>
          {/* WhatsApp icon */}
        </div>

        <div className="whatsapp_chat" onClick={change_whatsapp_chat}>
          {/* WhatsApp Chat */}
        </div>

        <div className="form_link" onClick={handleFormClick}>
          {/* Registration Form */}
        </div>

        {/* Form */}
        <div className="blank_div">
          <div className="new_form">
            <form onSubmit={handleSubmit}>
              <center>
                <h1>Registration Form</h1>
              </center>

              <div className="main">
                <h3>Name</h3>
                <div className="name_flex">
                  <input type="text" placeholder='First Name' required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  <input type="text" placeholder='Last Name' required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
              </div>

              <div className="main">
                <h3>Email</h3>
                <input type="email" placeholder='example@gmail.com' required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="main">
                <h3>Phone Number</h3>
                <div className="call">
                  <div className="call_head">91+</div>
                  <div className="call_num">
                    <input type="text" value={phoneNumber} onChange={handlePhoneChange} placeholder="Enter 10-digit number" required />
                  </div>
                </div>
              </div>

              <div className="main">
                <div className="gender">
                  <div className="first_radio">
                    <input type="radio" name="gender" value="Male" id="Male" onChange={(e) => setGender(e.target.value)} /><label htmlFor="Male">Male</label>
                  </div>
                  <div className="sec_radio">
                    <input type="radio" name="gender" value="Female" id="Female" onChange={(e) => setGender(e.target.value)} /><label htmlFor="Female">Female</label>
                  </div>
                  <div className="third_radio">
                    <input type="radio" name="gender" value="Other" id="Other" onChange={(e) => setGender(e.target.value)} /><label htmlFor="Other">Other</label>
                  </div>
                </div>
              </div>

              <div className="main">
                <h3>Location</h3>
                <div className="name_flex">
                  <input type="text" placeholder='City' required value={city} onChange={(e) => setCity(e.target.value)} />
                  <input type="text" placeholder='State' required value={state} onChange={(e) => setState(e.target.value)} />
                  <input type="text" placeholder='Country' required value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
              </div>

              <div className="main">
                <h3>Address</h3>
                <textarea cols="30" rows="5" placeholder='Enter Your Address' value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
              </div>

              <div className="main">
                <div className="form_btn">
                  <button id='submit_btn' type="submit">Submit</button>
                  <button id='clear_btn' type="reset">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>  
      </div>
    </div>
  )
}




// import React, { useState } from 'react';

// export default function FormView() {

//   const [bgImage, setBgImage] = useState('WhatsApp_icon.jpeg')

//   const change_whatsapp_icon = () => {
//     setBgImage('Front_WhatsApp.jpeg')
//   }
//   const change_whatsapp_chat = () => {
//     setBgImage('Form_Link.jpeg')
//   }

//   return (
//     <div>
//       <div className="main_img" style={{backgroundImage: `url(${bgImage})`}}>

//         <div className="whatsapp_icon" onClick={change_whatsapp_icon} >
//           {/* WhatsApp icon */}
//         </div>

//         <div className="whatsapp_chat" onClick={change_whatsapp_chat} >
//           {/* WhatsApp Chat */}
//         </div>

//         <div className="form_link">
//           {/* Registration Form */}
//         </div>
        
//       </div>
//     </div>
//   )
// }