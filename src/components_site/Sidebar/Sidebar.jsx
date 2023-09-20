"use client"
import React from 'react'
// import { Container, Row, Col, Nav, Navbar, Button, Image, Form, Card } from 'react-bootstrap';
import '@/style/style.css'
function Sidebar(set_data) {
    return (
        <div style={{position:"sticky"}}>
            <header className="app-header ">
                <div className="app-header-logo">
                    <div className="logo">




                        <span className="logo-icon">
                            <img src="https://assets.codepen.io/285131/almeria-logo.svg" />
                            {/* png of app */}





                        </span>
                        <h1 className="logo-title">
                            <span>Codex</span>
                            <span></span>
                        </h1>




                    </div>
                </div>
            </header>
            <div className="app-body">
                <div className="app-body-navigation">
                    <nav className="navigation">
                        <a href="/">
                            <i className="ph-browsers" />
                            <span>Dashboard</span>
                        </a>
                        <a href="/Scheduled">
                            <i className="ph-check-square" />
                            <span>Scheduled</span>
                        </a>
                        <a href="/Activities">
                            <i className="ph-swap" />
                            <span>Activities</span>
                        </a>

                        <a href="/Doctor">
                            <i className="ph-globe" />
                            <span>Doctor</span>
                        </a>
                        <a href="/Health">
                            <i className="ph-clipboard-text" />
                            <span>HealthReport</span>
                        </a>
                        <a href="/Prescription">
                            <i className="ph-clipboard-text" />
                            <span>Prescription</span>
                        </a>
                        <a href="/Conversation">
                            <i className="ph-clipboard-text" />
                            <span>Conversation</span>
                        </a>

                    </nav>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
