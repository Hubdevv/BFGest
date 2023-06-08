import React from 'react'

const Table =(props) => {
  
 console.log("Array data")
 console.log(props)
  return (

    <tr>
        <td>
            <form action="" className='form'>
            <input type="checkbox" name="check" id="" /></form>
        </td>

        <td>{props.user.lastName}</td>
        <td>{props.user.firstName}</td>
        <td>{props.user.lastName}</td>
        <td>{props.user.email}</td>
        <td>{props.user.role}</td>

    </tr>
  

  )
}
export default Table