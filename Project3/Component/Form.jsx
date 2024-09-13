import React, { useState } from 'react';

export default function Form() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) 
    {
      setPhoneNumber(value);
    }
  };

  return (
    <div>
      <div className="new_form">
        <form action="">
          <center>
            <h1>Registration Form</h1>
          </center>

          <div className="main">
            <h3>Name</h3>
            <div className="name_flex">
              <input type="text" placeholder='First Name' required />
              <input type="text" placeholder='Last Name' required />
            </div>
          </div>

          <div className="main">
            <h3>Email</h3>
            <input type="email" placeholder='example@gmail.com' required />
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
                <input type="radio" name="gender" value="Male" id="Male" /><label htmlFor="Male">Male</label>
              </div>
              <div className="sec_radio">
                <input type="radio" name="gender" value="Female" id="Female" /><label htmlFor="Female">Female</label>
              </div>
              <div className="third_radio">
                <input type="radio" name="gender" value="Other" id="Other" /><label htmlFor="Other">Other</label>
              </div>
            </div>
          </div>

          <div className="main">
            <h3>Name</h3>
            <div className="name_flex">
              <input type="text" placeholder='City' required />
              <input type="text" placeholder='State' required />
              <input type="text" placeholder='Country' required />
            </div>
          </div>

          <div className="main">
            <h3>Address</h3>
            <textarea name="" id="" cols="30" rows="5" placeholder='Enter Your Address'></textarea>
          </div>

          <div className="main">
            <div className="form_btn">
              <button id='submit_btn'>Submit</button>
              <button id='clear_btn'>Clear</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
