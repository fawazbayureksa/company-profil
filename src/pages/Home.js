import React from 'react';
import NavbarHeader from '../components/NavbarHeader';
import Banner from './../assets/images/banner.png';
import EarthNeon from './../assets/images/earth_neon.png';
import Messaging from './../assets/images/messaging.png';
import LineGraph from './../assets/images/line_graph.png';
import { FaAngleRight, FaCheckSquare } from "react-icons/fa";
import TabComponents from '../components/TabComponents';

const Home = () => {
    return (
        <div>
            <NavbarHeader />
            <section id='section1'>
                <img src={Banner} className='img-banner-section-1' />
                <div className='container'>
                    <div className='section-1'>
                        <div className='d-flex h-100'>
                            <div className='col-md-6 align-self-center'>
                                <h1 className='title-banner-h1'>
                                    Intelligently technology to grow your business
                                </h1>
                                <p className='title-banner-p'>
                                    Make your business grow and generate customer satisfaction with various service solutions from Sprint Asia, such as chatbots, live chat, and loyalty programs
                                </p>
                                <button className='action-button-section-1' style={{ marginTop: '100px' }}>
                                    <span className='me-2'>
                                        Book a demo today
                                    </span>
                                    <FaAngleRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={EarthNeon} className='img-earth-section-1' />
                <img src={LineGraph} className='img-line-graph-section-1' />
            </section>
            <section id='section2'>
                <div className='container'>
                    <div className='text-center'>
                        <h3 className='title-h3 color-0a2540'>The ultimate omnichannel platform for all your business needs</h3>
                        <h5 className='font-weight-400 color-0a2540'> The all-in-one platform solution for brands seeking to boost engagement and enhance conversion rates</h5>
                    </div>
                    <div className='row justify-content-center mt-5'>
                        <TabComponents />
                        <div className='row mt-5'>
                            <div className='col-md-5'>
                                <h5 className='color-0a2540 font-weight-700'>Omnichannel Marketing</h5>
                                <p>Send promotion messages and information to many customers quickly and accurately through WhatsApp, Email, Telegram, SMS, and other communication channels on one integrated platform.</p>
                                <div className='row'>
                                    <div className='col-md-1'>
                                        <FaCheckSquare />
                                    </div>
                                    <div className='col-md-10'>
                                        Send multiple messages to millions of subscribers with just one click.
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-1'>
                                        <FaCheckSquare />
                                    </div>
                                    <div className='col-md-10'>
                                        Provided with a primary backup feature to prevent failed messages to other channels.
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-1'>
                                        <FaCheckSquare />
                                    </div>
                                    <div className='col-md-10'>
                                        Schedule campaigns, limited promotions, and personalized reminder messages
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-7 p-0'>
                                <div className='d-flex justify-content-center'>
                                    <img src={Messaging} className='img-messaging-section-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
