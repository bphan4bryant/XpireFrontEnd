import {Table} from 'react-bootstrap'



function InventoryTable() {

    return(
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Points</th>
                        <th>Expired</th>
                        <th>Delete</th>
                    </tr>
                </thead>
            </Table>
        </>
    )
}

export default InventoryTable