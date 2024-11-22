import { useState } from 'react';
import List from './List';
import './Note.css';
import { Button,Container,Form,InputGroup,Row,Col } from 'react-bootstrap';
import Star from './Star';

const Note = () => {

  const [inputValue, setInputValue] = useState('');
  const [searchItems, setSearchItems] = useState([]);
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setSearchItems([...searchItems, inputValue.trim()]);
      setInputValue(''); 
    }
  };

  const handleDeleteItem = (index) => {
    setSearchItems(searchItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 className='Heading'>Reminder List</h1>

      <Container className='mt-5'>
        <Row className='justify-content-center'>
          <Col xs={10} sm={8} md={6}>
          <InputGroup className="mb-3 custom-input-group" onChange={handleInputChange}>
          <Form.Control
          placeholder="Note"
          />
          <Button onClick={handleAddItem} variant="outline-dark" id="button-addon2">
          Ok
          </Button>
         </InputGroup>
          </Col>
        </Row>
      </Container>
      
      <div className='cont'>
        <div className='center-cartoon'>
          <img className='sticker' alt='reminder' src='/picspie/cutie.png'/>
          </div>
          </div>

        <Star />

        <List items={searchItems} deleteItem={handleDeleteItem} />

    </div>
  )
}

export default Note
