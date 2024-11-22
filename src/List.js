import React from 'react'
import { Button, Container } from 'react-bootstrap'
const List = ({items, deleteItem}) => {
  return (
    <div>
<Container className='justify-content-center'>
<div>
  <Container>
      {items.map((item, index) => (
        <div  key={index}>
          {item}
          <div>
          <Button  className='m-2'variant="outline-dark" id="button-addon2" onClick={() => deleteItem(index)}>Delete</Button>
          </div>
        </div>
        
      ))}
      </Container>
    </div>
</Container>
    </div>
  )
}

export default List
