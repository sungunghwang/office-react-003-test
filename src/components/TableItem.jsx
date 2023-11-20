import React from 'react'

function TableItem({ idx, userData }) {
  return (
    <tr>
      <th scope="row">{idx}</th>
      <td>{userData.name}</td>
      <td>{userData.tel}</td>
      <td>{userData.email}</td>
      <td>{userData.summary}</td>
    </tr>
  )
}

export default TableItem
