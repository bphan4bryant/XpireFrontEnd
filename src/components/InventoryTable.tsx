import { Table } from 'react-bootstrap'
import './InventoryTable.css'
import { Ingredient } from '../types/types.ts'
import { UnixToDate } from '../utils/functions'

function InventoryTable(props: { data: Ingredient[] }) {

    return (
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
                    {
                        props.data.map(item =>
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
                    }
                </tbody>
            </Table>
        </>
    )
}

export default InventoryTable