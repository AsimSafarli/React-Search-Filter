import React from 'react'

function Table({data}) {
  return (
    <div class="bd-example">
    <table class="table table-dark table-hover">
        <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">E-mail</th>
      </tr>
    </thead>
    <tbody>
        {
            data.map((item)=>(
<tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.email}</td>
      </tr>
            ))
        }
      
      
    </tbody>
  
    </table>
  </div>
  )
}

export default Table
