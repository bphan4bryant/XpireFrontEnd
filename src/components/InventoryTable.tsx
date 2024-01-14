import {Table} from 'react-bootstrap'
import './InventoryTable.css'
import {Ingredient} from '../types/types.ts'
import { UnixToDate } from '../utils/functions'
import Form from 'react-bootstrap/Form'

function InventoryTable(props : {data: Ingredient[], selected: Ingredient[], setSelected : (data : Ingredient[]) => void}) {

    function addSelected(item : Ingredient) {
        let tempSelected = [...props.selected]
        tempSelected.push(item)
        props.setSelected(tempSelected)
    }

    function removeSelected(item : Ingredient) {
        let tempSelected = [...props.selected]
        tempSelected.splice(tempSelected.indexOf(item),1)
        props.setSelected(tempSelected)
    }

    const inventoryItems = props.data.map((item, i) =>
        <tr key={i}>
            <td><Form.Check
            type={"checkbox"}
            onChange={(e) => {
                if (e.target.checked) {
                    addSelected(item)
                } else {
                    removeSelected(item)
                }
            }}
            />
            </td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.points}</td>
            <td>{UnixToDate(item.expiration)}</td>
            <td>X</td>
            <td>Del</td>
        </tr>
        )

    return(
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Points</th>
                        <th>Expiration</th>
                        <th>Expired</th>
                        <th>Delete</th>
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