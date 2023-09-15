import React from "react"

function CustomerTable(){
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Contact No.</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Doe</td>
                    <td>xyz@gmail.com</td>
                    <td>123456789</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
};

export default CustomerTable;
