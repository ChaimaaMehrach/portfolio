import Card from 'react-bootstrap/Card';
import logob from '../img/logob.png';
import logo from '../img/logo.jpg';
import logo2 from '../img/logo2.jpg';
import logo_G1 from '../img/logo_G1.png';
function Projets(){
    return(
        <div style={{display: 'flex'}}>
    <Card style={{ width: '18rem' }} className='ms-5 mt-5'>
    <Card.Img variant="top" className='mt-2' src={logo2} style={{ display: 'block', margin: 'auto', width: '150px', height: '150px' }} />
      <Card.Body>
        <Card.Title>Application web (gestion transport)</Card.Title>
        <Card.Text>
          <b>Technologies : </b>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Php</li>
            <li>Mysql</li>
            <li>Vuejs</li>
            <li>axios</li>
          </ul>
          <p><b>Date : </b> 2022</p>
        </Card.Text>
      </Card.Body>
    </Card>
  
    <Card style={{ width: '18rem' }} className='ms-5 mt-5'>
      <Card.Img variant="top" className='mt-2' src={logo} style={{ display: 'block', margin: 'auto', width: '150px', height: '150px' }} />
      <Card.Body>
        <Card.Title>Frontend Application web (Scalify)</Card.Title>
        <Card.Text>
          <b>Technologies : </b>
          <ul>
            <li>Vuejs</li>
            <li>Chartjs</li>
            <li>Axios</li>
          </ul>
          <p><b>Date : </b> 2023</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='ms-5 mt-5'>
      <Card.Img variant="top" className='mt-2' src={logob} style={{ display: 'block', margin: 'auto', width: '150px', height: '150px' }} />
      <Card.Body>
        <Card.Title>Application web (Recette Cuisine)</Card.Title>
        <Card.Text>
          <b>Technologies : </b>
          <ul>
            <li>Django</li>
            <li>Mysql</li>
          </ul>
          <p><b>Date : </b> 2023</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='ms-5 me-5 mt-5'>
      <Card.Img variant="top" className='mt-2' src={logo_G1} style={{ display: 'block', margin: 'auto', width: '150px', height: '150px' }} />
      <Card.Body>
        <Card.Title>Application web (Reservation des terrains)</Card.Title>
        <Card.Text>
          <b>Technologies : </b>
          <ul>
            <li>Spring</li>
            <li>React js/ vuejs</li>
            <li>Mysql</li>
            <li>axios</li>
          </ul>
          <p><b>Date : </b> 2023</p>
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        
    );
}

export default Projets;