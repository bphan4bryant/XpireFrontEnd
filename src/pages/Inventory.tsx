import { Container, Row, Col, Button } from 'react-bootstrap'
import InventoryTable from '../components/InventoryTable'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './Inventory.css'
import { Ingredient } from '../types/types'
import CommonNavbar from '../components/CommonNavbar'
import AddIngredientModal from '../components/AddIngredientModal'

function Inventory() {
    const [Inventory, setInventory] = useState<Ingredient[]>([])
    const baseURL = import.meta.env.VITE_BASE_URL + '/users/' + import.meta.env.VITE_DEFAULT_USER
    // const client = axios.create({
    //     baseURL: import.meta.env.VITE_BASE_URL + '/users/' + import.meta.env.VITE_DEFAULT_USER, //Change default user to actual user field
    // headers: {
    //     "token": localStorage.getItem("JWT") ?? ""
    // }
    // });

    const getInventory = async () => {
        const url = baseURL + '/ingredients/inventory'
        const token = localStorage.getItem("JWT") ?? ""

        await axios.get(url, {
            headers: {
                "token": token
            }
        })
            .then((res) => { console.log(res.data); setInventory(res.data.data) })
            .catch((err) => console.log(err))
    }

    const postIngredient = async (data: Ingredient) => {
        const url = baseURL + '/ingredients/inventory'
        const token = localStorage.getItem("JWT") ?? ""

        await axios.post(url, {
            "ingredient": data
        }, {
            headers: {
                "token": token
            }
        })
            .then((res) => {
                console.log(res)
                var newInventory = Inventory
                newInventory.push(data)
                setInventory(newInventory)
            })
            .catch((err) => console.log(err))
    }

    const trashIngredient = async (data: Ingredient) => {
        const url = baseURL + '/ingredients/inventory/delete';
        const token = localStorage.getItem("JWT") ?? ""

        // delete from inventory
        const res = await axios.post(url, {
            "name": data.name,
            "expiration": data.expiration
        }, {
            headers: {
                "token": token
            }
        });

        if (res.status === 202) {
            window.location.reload();
        }

    }

    useEffect(() => {
        getInventory();
    }, [])

    // Modal logic

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <CommonNavbar />
            <AddIngredientModal show={show} handleClose={handleClose} postIngredient={postIngredient} />
            <Container className="py-3">
                <Row>
                    <Col><Button className="me-3">Cook</Button><Button onClick={handleShow} className="ms-3">Add</Button></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {
                        Inventory ? <InventoryTable data={Inventory} deleteHandler={trashIngredient} /> : null
                    }
                </Row>
            </Container>
        </>
    )
}

export default Inventory