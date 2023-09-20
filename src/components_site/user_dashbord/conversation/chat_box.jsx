import React from 'react';
import './chat.css';
const adiumConcept = () => {
    return (
        <>
            <div className="window">
                <aside className="conv-list-view">
                    <header className="conv-list-view__header">
                        <div className="cf">
                            <ul className="close-button-list">
                                <li></li><li></li><li></li>
                            </ul>
                            <ul className="function-list">
                                <li className="icon-lupe"></li>
                            </ul>
                        </div>
                    </header>
                    <ul className="conv-list">
                        <li>
                            <div className="status">
                                <i className="status__indicator--unread-message"></i>
                                <figure className="status__avatar">
                                    <img src="http://1.gravatar.com/avatar/7ec0cac01b6d505b2bbb2951a722e202?size=80" alt="User Avatar" />
                                </figure>
                                <div className="meta">
                                    <div className="meta__name">Mads Cordes</div>
                                    <div className="meta__sub--dark">Hi there :)</div>
                                </div>
                            </div>
                        </li>
                        <li className="selected">
                            <div className="status">
                                <i className="status__indicator--replied-message"></i>
                                <figure className="status__avatar">
                                    <img src="http://1.gravatar.com/avatar/34735b367f6bf8d5d2f38cb3d20d5e36?size=80" alt="User Avatar" />
                                </figure>
                                <div className="meta">
                                    <div className="meta__name">Tim Pietrusky</div>
                                    <div className="meta__sub--dark">Browserhacks looks great!</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="status">
                                <i className="status__indicator--read-message"></i>
                                <figure className="status__avatar">
                                    <img src="http://0.gravatar.com/avatar/729edf889ced7863dedba95452272bca?size=80" alt="User Avatar" />
                                </figure>
                                <div className="meta">
                                    <div className="meta__name">HugoGiraudel</div>
                                    <div className="meta__sub--dark">Ok!</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </aside>
                <section className="chat-view">
                    <header className="chat-view__header">
                        <div className="cf">
                            <div className="status">
                                <i className="status__indicator--online"></i>
                                <div className="meta">
                                    <div className="meta__name">Tim Pietrusky</div>
                                    <div className="meta__sub--light">Adium that ass!</div>
                                </div>
                            </div>
                            <ul className="function-list">
                                <li className="icon-cloud"></li>
                                <li className="icon-clock"></li>
                                <li className="icon-dots"></li>
                            </ul>
                        </div>
                    </header>
                    <section className="message-view">
                        <div className="message--send">
                            <div className="message__bubble--send">
                                Hi Tim!
                            </div>
                            <figure className="message__avatar">
                                <img src="http://1.gravatar.com/avatar/89b9501f0f9e3020aab173f9a5a47683?size=80" alt="User Avatar" />
                            </figure>
                        </div>
                        <div className="cf"></div>

                        <div className="message">
                            <figure className="message__avatar">
                                <img src="http://1.gravatar.com/avatar/34735b367f6bf8d5d2f38cb3d20d5e36?size=80" alt="User Avatar" />
                            </figure>
                            <div className="message__bubble">
                                Hi
                            </div>
                        </div>
                        <div className="cf"></div>

                        <div className="message--send">
                            <div className="message__bubble--send">
                                Browserhacks looks great!
                            </div>
                            <figure className="message__avatar">
                                <img src="http://1.gravatar.com/avatar/89b9501f0f9e3020aab173f9a5a47683?size=80" alt="User Avatar" />
                            </figure>
                        </div>
                    </section>
                    <footer className="chat-view__input">
                        <div className="input"><input /><span className="input__emoticon"></span></div>
                        <div className="status">
                            <figure className="status__avatar--small">
                                <img src="http://1.gravatar.com/avatar/89b9501f0f9e3020aab173f9a5a47683?size=80" alt="User Avatar" />
                            </figure>
                        </div>
                    </footer>
                </section>
            </div>

        </>);
};

export default adiumConcept;
