import React from 'react'

import { Link } from 'react-router-dom'

export default function Home({ data }) {
  return (
    <div className='home_body'>
      <div className='main_div_css'>
        <div className='home_body_css'>
          <h1 style={{marginTop: '0px'}}>Home</h1>
          <Link to={"/Create"}> <button className='create_btn'>Create</button> </Link>&nbsp;&nbsp;&nbsp;
          <Link to={"/Delete"}> <button className='delete_btn'>Delete</button> </Link>&nbsp;&nbsp;&nbsp;
          <Link to={"/Update"}> <button className='update_btn'>Update</button> </Link>&nbsp;&nbsp;&nbsp;
          <br /><br />
          <table  width="650px">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>GR ID</th>
                <th>Subject</th>
              </tr>
            </thead>

            <tbody>
              {
                data &&
                data.map((e, i) => {
                  return <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.first_name} {e.last_name}</td>
                    <td>{e.email}</td>
                    <td>{e.gr_id}</td>
                    <td style={{borderRight: '1px solid'}}>{e.subject}</td>
                  </tr>
                })
              }
            </tbody>
          </table>

          <br />
        </div>
      </div>
    </div>
  )
}
