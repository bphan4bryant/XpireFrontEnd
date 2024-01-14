import { Container, Row, Col, Button } from 'react-bootstrap'
import InventoryTable from '../components/InventoryTable'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './Inventory.css'
import { Ingredient } from '../types/types'
import CommonNavbar from '../components/CommonNavbar'
import AddIngredientModal from '../components/AddIngredientModal'
import CookingModal from '../components/CookingModal'

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

    useEffect(() => {
        getInventory();
    }, [])

    // Modal logic

    const [showAdd, setShowAdd] = useState(false);

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    // Cooking logic
    const [selected, setSelected] = useState<Ingredient[]>([])
    const [showCook, setShowCook] = useState(false)

    const handleCloseCook = () => setShowCook(false)
    const handleShowCook = () => setShowCook(true)

    return (
        <>
            <CommonNavbar />
            <AddIngredientModal show={showAdd} handleClose={handleCloseAdd} postIngredient={postIngredient} />
        <CookingModal show={showCook} handleClose={handleCloseCook}/>
            <Container className="py-3">
                <Row>
                    <Col><Button className="me-3" disabled={selected.length <= 0} onClick={handleShowCook}>Cook</Button><Button onClick={handleShowAdd} className="ms-3">Add</Button></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {
                        Inventory ? <InventoryTable data={Inventory} selected={selected} setSelected={setSelected} /> : null
                    }
                </Row>
            </Container>
        </>
    )
}

export default Inventory