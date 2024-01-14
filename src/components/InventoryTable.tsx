import {Table} from 'react-bootstrap'
import './InventoryTable.css'
import {Ingredient} from '../types/types.ts'
import { UnixToDate } from '../utils/functions'

function InventoryTable(props : {data: Ingredient[]}) {
    const inventoryItems = props.data.map(item =>
        <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.points}</td>
            <td>{UnixToDate(item.expiration)}</td>
            <td>X</td>
            <td>Del</td>
            <td>Pencil</td>
        </tr>
        )

    return(
        <>
                <Table hover className='tb'>
                    <thead className="thead-light">
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
                    <tbody >
                        {inventoryItems}
                    </tbody>
                </Table>
        </>
    )
}

export default InventoryTable