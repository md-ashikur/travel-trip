import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css';
const Blog = () => {
    return (
        <div className='m-5 pt-5 blog'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body>
                    <b>authorization</b> determines what resources a user can access. It always takes place after authentication and isn’t visible to or changeable by the user. whereas <br></br><b>authentication</b> is the process of verifying who the user is. it's partially changeable by the user. it's a good identity and access management process.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        I'm using firebase because it provides backend services and easy-to-use. It provides ready-made UI libraries to authenticate users. It supports authentication using email, password, phone number, Google, Facebook, github, Twitter, and more.<br></br><b>other options to implement authentication are:</b><br></br>Token Authentication, Standard Authentication, Multi-Factor Authentication (MFA), Social Authentication.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                    <Accordion.Body>
                   <b> Other services which Firebase provides than authentication are:</b>


                        Cloud Firestore,
                        Cloud Functions,
                        Hosting,
                        Cloud Storage,
                        Google Analytics,
                        Predictions,
                        Cloud Messaging,
                        Dynamic Links,
                        Remote Config
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;