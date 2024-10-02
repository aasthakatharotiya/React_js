import React from 'react'

import { Link } from 'react-router-dom'

export default function Main({ data }) {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/Create"}>Create</Link>&nbsp;&nbsp;&nbsp;
      <Link to={"/Delete"}>Delete</Link>&nbsp;&nbsp;&nbsp;
      <Link to={"/Update"}>Update</Link>&nbsp;&nbsp;&nbsp;
      <br /><br />
      <table border="1" width="400px">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
          </tr>
        </thead>

        <tbody>
          {
            data &&
            data.map((e, i) => {
              return <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.subject}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
