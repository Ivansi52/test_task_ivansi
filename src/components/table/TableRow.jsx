import React from 'react';
import Dropdown from '../dropdown/Dropdown'

export default function TableRow({ user }) {
    return (
      <tr className="table-row">
          <td className="cell id"> {user.id} </td>
          <td className="cell"> {user.role} </td>
          <td className="cell name"> {user.name} </td>
          <td className="cell login"> {user.login} </td>
          <td className="cell position">
            <Dropdown initial={user.position} />
          </td>
          <td className="cell contacts"> {user.contacts} </td>
          <td className="cell email"> {user.email} </td>
          <td className="cell phone"> {user.phone} </td>
          <td className="cell city"> {user.city} </td>
      </tr>
    );
}