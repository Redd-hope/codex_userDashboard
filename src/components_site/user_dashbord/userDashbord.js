"use client"
import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button, Image, Form, Card } from 'react-bootstrap';
import '@/style/style.css'
const App = (set_data) => {


    return (
        <div className="app">
            <header className="app-header">
                <div className="app-header-navigation">
                    <div className="tabs">
                        <a href="/">Overview</a>
                        <a href="/ChatBot" className="active">
                            Chatbot
                        </a>
                        <a href="/Notice">Notices</a>

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
            <div className="app-body">
                <div className="app-body-main-content">

                  </div>
            </div>
        </div>

    );
};

export default App;
