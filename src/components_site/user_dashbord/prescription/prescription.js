"use client"
import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button, Image, Form, Card } from 'react-bootstrap';
import '@/style/style.css'
const App = (set_data) => {


    return (
        <div className="app">
            <header className="app-header prevent-size-effect">
                <div className="app-header-actions prevent-size-effect">
                    <button className="user-profile prevent-size-effect">
                        <span>{set_data.profil_name}</span>
                        <span>
                            <img src={set_data.profil_pic} />
                        </span>
                    </button>
                    <div className="app-header-actions-buttons prevent-size-effect">
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


        </div>
    );
};

export default App;
