/** React imports */
import React from 'react';
/** Boostrap */
import {Card, Button} from 'react-bootstrap';

const Job = (props) => {
  const {job} = props;


  return (
    <li>
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Text>{job.company}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </li>
  )
}

export default Job;