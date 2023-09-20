"use client"
import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button, Image, Form, Card } from 'react-bootstrap';
import '@/style/style.css'
import StudyCard from './study_card';
const App = (set_data) => {



    return (
        <div className="app">
            <header className="app-header">
                <div className="app-header-logo">

                </div>
                <div className="app-header-navigation">
                    <div className="tabs">
                        <a href="/Game">Games</a>
                        <a href="/Study" className="active">
                            Study
                        </a>
                        <a href="/Test">Test</a>

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
<div>
    <StudyCard />
</div>




            </div>


    );
};

export default App;
