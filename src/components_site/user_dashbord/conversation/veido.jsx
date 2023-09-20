"use client"
import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button, Image, Form, Card } from 'react-bootstrap';
import '@/style/style.css'
import Callbox from './caller_box';
const App = (set_data) => {



    return (
        <div className="app">
            <header className="app-header">
                <div className="app-header-navigation">
                    <div className="tabs">
                        <a href="/Call">Call</a>
                        <a href="/Chat" className="active">
                            Chat
                        </a>
                        <a href="/VedioCall">video call</a>

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
                    <section className="service-section">
                        <h2>Recents</h2>
                        <div className="service-section-header">
                            <div className="search-field">
                                <i className="ph-magnifying-glass" />
                                <input type="text" placeholder="name" />
                            </div>

                            <button className="flat-button">Search</button>
                        </div>
                        <div className="mobile-only">
                            <button className="flat-button">Toggle search</button>
                        </div>
                    </section>
                    <div><Callbox /></div>

                </div>


            </div>

        </div>

    );
};

export default App;
