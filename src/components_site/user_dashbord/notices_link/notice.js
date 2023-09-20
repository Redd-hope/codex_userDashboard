"use client"
import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button, Image, Form, Card } from 'react-bootstrap';
import '@/style/style.css'
import './NoticeBoard.css';
const App = (set_data) => {
    const notices = [
        { id: 1, title: 'Important Notice 1', content: 'This is the content of the first notice.' },
        { id: 2, title: 'Notice 2', content: 'This is the content of the second notice.' },
        // Add more notices here
      ];

    return (
        <div className="app">
            <header className="app-header">

                <div className="app-header-navigation">
                    <div className="tabs">
                        <a href="/">Overview</a>
                        <a href="/ChatBot" className="active">
                            Chatbot
                        </a>
                        <a href="#">Notices</a>

                    </div>
                </div>
                <div className="app-header-actions">
                    <button className="user-profile">
                        <span>{set_data.profil_name}</span>
                        <span>
                            <img src={set_data.profil_pic} />
                        </span>
                    </button>
                    <div className="app-header-actions-buttons">
                        <button className="icon-button large">
                            <i className="ph-magnifying-glass" />
                        </button>
                        <button className="icon-button large">
                            <i className="ph-bell" />
                        </button>
                    </div>
                </div>
                <div className="app-header-mobile">
                    <button className="icon-button large">
                        <i className="ph-list" />
                    </button>
                </div>
            </header>
            <div className="notice-board">
                <Container>
                    <h2>Government Notice Board</h2>
                        {notices.map((notice) => (
                        <Card key={notice.id} className="my-3">
                                <Card.Header>
                                    {notice.title}
                                    </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {notice.content}
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                    </Container>
                </div>
            </div>

    );
};

export default App;
