import {Table} from 'react-bootstrap'
import './InventoryTable.css'



function InventoryTable() {

    return(
        <>
            <Table className='inventory-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Points</th>
                        <th>Expired</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Carrot</td>
                        <td>1</td>
                        <td>1</td>
                        <td>X</td>
                        <td>Del</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default InventoryTable