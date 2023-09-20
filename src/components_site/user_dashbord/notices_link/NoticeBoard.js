import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import './NoticeBoard.css';
const NoticeBoard = () => {
  // Sample notice data
  const notices = [
    { id: 1, title: 'Important Notice 1', content: 'This is the content of the first notice.' },
    { id: 2, title: 'Notice 2', content: 'This is the content of the second notice.' },
    // Add more notices here
  ];

  return (
    <div className="notice-board">
    <Container>
      <h2>Government Notice Board</h2>
      {notices.map((notice) => (
        <Card key={notice.id} className="my-3">
          <Card.Header>{notice.title}</Card.Header>
          <Card.Body>
            <Card.Text>{notice.content}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  </div>
  );
};

export default NoticeBoard;
