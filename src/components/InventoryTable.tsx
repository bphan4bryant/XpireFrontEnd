import {Table} from 'react-bootstrap'
import './InventoryTable.css'
import {Ingredient} from '../types/types.ts'

function InventoryTable(props : {data: Ingredient[]}) {
    const inventoryItems = props.data.map(item =>
        <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.points}</td>
            <td>{item.expiration}</td>
            <td>X</td>
            <td>Del</td>
            <td>Pencil</td>
        </tr>
        )
    
    return(
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Points</th>
                        <th>Expiration</th>
                        <th>Expired</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {inventoryItems}
                </tbody>
            </Table>
        </>
    )
}

export default InventoryTable