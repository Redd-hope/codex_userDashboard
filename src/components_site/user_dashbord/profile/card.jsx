// components/Statistics.js
import React from 'react';

const Statistics = () => {
    return (
        <div className="grey-bg container-fluid">
            <section id="minimal-statistics">
                <div className="row">
                    <div className="col-12 mt-3 mb-1">
                        <h4 className="text-uppercase">Minimal Statistics Cards</h4>
                        <p>Statistics on minimal cards.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="media d-flex">
                                        <div className="align-self-center">
                                            <i className="icon-pencil primary font-large-2 float-left"></i>
                                        </div>
                                        <div className="media-body text-right">
                                            <h3>278</h3>
                                            <span>New Posts</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ... Repeat this structure for the remaining cards */}
                </div>
            </section>

            <section id="stats-subtitle">
                <div className="row">
                    <div className="col-12 mt-3 mb-1">
                        <h4 className="text-uppercase">Statistics With Subtitle</h4>
                        <p>Statistics on minimal cards with Title &amp; Sub Title.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-md-12">
                        <div className="card overflow-hidden">
                            <div className="card-content">
                                <div className="card-body clearfix">
                                    <div className="media align-items-stretch">
                                        <div className="align-self-center">
                                            <i className="icon-pencil primary font-large-2 mr-2"></i>
                                        </div>
                                        <div className="media-body">
                                            <h4>Total Posts</h4>
                                            <span>Monthly blog posts</span>
                                        </div>
                                        <div className="align-self-center">
                                            <h1>18,000</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ... Repeat this structure for the remaining cards */}
                </div>
            </section>
        </div>
    );
};

export default Statistics;
