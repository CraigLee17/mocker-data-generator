import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Doc from '../components/Doc'

export default class Index extends React.Component {
    render() {
        return (
            <div
                style={{ position: 'absolute', width: '100%', height: '100%' }}
            >
                <Head>
                    <title>Docs: mocker-data-generator</title>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <link
                        href="/static/pure.min.css"
                        media="all"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Raleway:200"
                    />
                    <script
                        async
                        defer
                        src="https://buttons.github.io/buttons.js"
                    />
                    <script
                        async
                        defer
                        src="https://unpkg.com/mocker-data-generator@latest/build/browser/index.js"
                    />
                </Head>
                <a
                    href="https://github.com/danibram/mocker-data-generator"
                    className="github-corner"
                    aria-label="View source on Github"
                    style={{
                        position: 'fixed',
                        top: 0,
                        width: '80px',
                        height: '80px',
                        zIndex: 99999,
                        right: 0
                    }}
                >
                    <svg
                        width="80"
                        height="80"
                        viewBox="0 0 250 250"
                        style={{
                            fill: '#fff',
                            color: '#151513',
                            position: 'absolute',
                            top: 0,
                            border: 0,
                            right: 0
                        }}
                        aria-hidden="true"
                    >
                        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
                        <path
                            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                            fill="currentColor"
                            style={{ transformOrigin: '130px 106px' }}
                            className="octo-arm"
                        />
                        <path
                            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                            fill="currentColor"
                            className="octo-body"
                        />
                    </svg>
                </a>
                <div className="header">
                    <div
                        className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed"
                        style={{ backgroundColor: '#000', height: '80px' }}
                    >
                        <a className="pure-menu-heading" href="">
                            {'Playground: '}
                            <span style={{ fontSize: '12pt' }}>
                                mocker-data-generator
                            </span>
                        </a>
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item pure-menu-selected">
                                {/*'<!-- Place this tag where you want the button to render. -->'*/}
                                <a
                                    className="github-button"
                                    href="https://github.com/danibram/mocker-data-generator"
                                    data-icon="octicon-star"
                                    data-size="large"
                                    data-show-count="true"
                                    aria-label="Star danibram/mocker-data-generator on GitHub"
                                >
                                    Star
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{ marginTop: '57px' }}>
                    <Doc />
                </div>
                <div className="footer">
                    <div className="pure-menu pure-menu-horizontal">
                        <ul>
                            <li className="pure-menu-item">
                                <a
                                    href="https://github.com/danibram/mocker-data-generator"
                                    className="pure-menu-link"
                                >
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <style global jsx>{`
                    .github-corner:hover .octo-arm {
                        animation: octocat-wave 560ms ease-in-out;
                    }
                    @keyframes octocat-wave {
                        0%,
                        100% {
                            transform: rotate(0);
                        }
                        20%,
                        60% {
                            transform: rotate(-25deg);
                        }
                        40%,
                        80% {
                            transform: rotate(10deg);
                        }
                    }
                    @media (max-width: 500px) {
                        .github-corner:hover .octo-arm {
                            animation: none;
                        }
                        .github-corner .octo-arm {
                            animation: octocat-wave 560ms ease-in-out;
                        }
                    }
                `}</style>

                <style jsx>{`
                    .home-menu {
                        padding: 0.5em;
                        text-align: center;
                        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
                    }
                    .home-menu {
                        background: #2d3e50;
                    }
                    .pure-menu.pure-menu-fixed {
                        border-bottom: none;
                        z-index: 999;
                    }

                    .pure-menu-heading {
                        padding: 1em;
                    }
                    .pure-menu-list {
                        padding: 1em;
                        padding-right: 4em;
                    }

                    .home-menu .pure-menu-heading {
                        color: white;
                        font-weight: 400;
                        font-size: 120%;
                    }

                    .home-menu .pure-menu-selected a {
                        color: white;
                    }

                    .home-menu a {
                        color: #6fbef3;
                    }
                    .home-menu li a:hover,
                    .home-menu li a:focus {
                        background: none;
                        border: none;
                        color: #aecfe5;
                    }
                    .footer {
                        text-align: center;
                        font-size: 10pt;
                    }
                    @media (min-width: 48em) {
                        /* We increase the body font size */
                        body {
                            font-size: 16px;
                        }

                        /* We can align the menu header to the left, but float the
                            menu items to the right. */
                        .home-menu {
                            text-align: left;
                        }
                        .home-menu ul {
                            float: right;
                        }

                        /* We remove the border-separator assigned to .l-box-lrg */
                        .l-box-lrg {
                            border: none;
                        }
                    }
                `}</style>
            </div>
        )
    }
}