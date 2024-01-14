import Table from 'react-bootstrap/Table'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {User} from '../types/types'
import './Leaderboard.css'
import CommonNavbar from '../components/CommonNavbar'
import {Container, Row} from 'react-bootstrap'

function Leaderboard() {
  const [Leaderboard, setLeaderboard] = useState<User[]>([])

  const client = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL //Change default user to actual user field
  });

  const getLeaderboard = async() => {
    const url =  '/leaderboard' 
    await client.get(url)
        .then((res) => {console.log(res.data); setLeaderboard(res.data.data)})
        .catch((err) => console.log(err))
    }

    useEffect(() => {
      getLeaderboard()}, [])

  return (
    <>
      <CommonNavbar/>
      <div className='Leaderboard-background'>
        <Container className='custom-contain'>
          <Row className='custom-row'>
            <Table hover size="sm" className='tb'>
              <thead className='thead-dark'>
                <tr >
                  <th scope="col">Rank</th>
                  <th scope="col">Profile</th>
                  <th scope="col">Name</th>
                  <th scope="col">Points</th>
                </tr>
              </thead>
            
              <tbody>
                {Leaderboard.map((item, i) =>
                    <tr key={item.id}>
                      <th scope="col">{i+1}</th>
                      <td><img src= 'placeholder-image.jpg'width="40em"/></td>
                      <td>{ item.name }</td>
                      <td>{ item.points }</td>
                    </tr>
                )}
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    </>
  );  
}
export default Leaderboard