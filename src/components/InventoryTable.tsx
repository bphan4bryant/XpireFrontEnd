import { Button, Table } from 'react-bootstrap'
import './InventoryTable.css'
import { Ingredient } from '../types/types.ts'
import { UnixToDate } from '../utils/functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faXmarkCircle, faBowlFood } from "@fortawesome/free-solid-svg-icons"
import Form from 'react-bootstrap/Form'
function InventoryTable(props: { data: Ingredient[], selected: Ingredient[], setSelected: (data: Ingredient[]) => void, deleteHandler: (data: Ingredient) => Promise<void> }) {
    function addSelected(item: Ingredient) {
        let tempSelected = [...props.selected]
        tempSelected.push(item)
        props.setSelected(tempSelected)
    }

    function removeSelected(item: Ingredient) {
        let tempSelected = [...props.selected]
        tempSelected.splice(tempSelected.indexOf(item), 1)
        props.setSelected(tempSelected)
    }

    const inventoryItems = props.data.map((item, i) => {
        // calculatte if it is expired
        const currentDate = new Date();
        const unixTimestamp = Math.floor(currentDate.getTime() / 1000);
        console.log(unixTimestamp)
        console.log(item.expiration)
        const isExpired = unixTimestamp > item.expiration;

        return (
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
                {/* <td>{item.points}</td> */}
                <td>{UnixToDate(item.expiration)}</td>
                <td>
                    {isExpired ? <FontAwesomeIcon icon={faXmarkCircle} color='red' /> : <FontAwesomeIcon icon={faBowlFood} />}
                </td>
                <td>
                    <Button variant="danger" onClick={(e) => props.deleteHandler(item)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </Button>
                </td>
            </tr>
        )
    }
    )

    return (
        <>
            <Table hover className='tb'>
                <thead className="thead-light">
                    <tr>
                        <th>Select</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        {/* <th>Points</th> */}
                        <th>Expiration</th>
                        <th>Expired</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody >
                    {inventoryItems}
                </tbody >
            </Table >
        </>
    )
}

export default InventoryTable