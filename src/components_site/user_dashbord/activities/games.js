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
            <div className="app-body">

                <div className="app-body-main-content">
                    <section className="service-section">
                        <h2>Games</h2>
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
                        <div className="tiles">
                            <article className="tile">
                                <div className="tile-header">
                                    <i className="ph-lightning-light" />
                                    <h3>
                                        <span>Electricity</span>
                                        <span>UrkEnergo LTD.</span>
                                    </h3>
                                </div>
                                <a href="#">
                                    <span>Go to service</span>
                                    <span className="icon-button">
                                        <i className="ph-caret-right-bold" />
                                    </span>
                                </a>
                            </article>
                            <article className="tile">
                                <div className="tile-header">
                                    <i className="ph-fire-simple-light" />
                                    <h3>
                                        <span>Heating Gas</span>
                                        <span>Gazprom UA</span>
                                    </h3>
                                </div>
                                <a href="#">
                                    <span>Go to service</span>
                                    <span className="icon-button">
                                        <i className="ph-caret-right-bold" />
                                    </span>
                                </a>
                            </article>
                            <article className="tile">
                                <div className="tile-header">
                                    <i className="ph-file-light" />
                                    <h3>
                                        <span>Tax online</span>
                                        <span>Kharkov 62 str.</span>
                                    </h3>
                                </div>
                                <a href="#">
                                    <span>Go to service</span>
                                    <span className="icon-button">
                                        <i className="ph-caret-right-bold" />
                                    </span>
                                </a>
                            </article>
                        </div>

                    </section>

                </div>






            </div>
        </div>

    );
};

export default App;
