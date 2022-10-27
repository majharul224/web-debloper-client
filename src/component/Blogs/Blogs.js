import React from 'react';

const Blogs = () => {
    return (
        <div className='w-75 m-auto'>
            <div className='bg-success p-4 mb-2'>
                <h2>4.1 what is cors?</h2>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request.</p>
            </div>
            <div className='bg-success p-4 mb-2'>
                <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Google firebase is a platform that now offer active backend for building dynamic web and mobile applications. We can build client side app with firebase ,Firebase turns the client side app into a serverless app in no time, It also removes the need to manage database yourself at it does for us.Firebase is the technical and time savings alternative to write backend code for dynamic app. it also provides hosting facilities, It manages the cloud server configuration as it give access to other google app like sheets and drive. Firebase provides simple and build in third party authentications like facebook, github, apple.And Firebase reduces the development cost because its free and premium is not tht much costly.So we use firebase because its a good choice to deploy a working product on the cloud rapidly.And its covers the backend too.There are various others option for authentications like 1.Cloud based authentication 2.OpenId 3.Token based authentication 4.Third party access(OAuth, API-token).</p>
            </div>
            <div className='bg-success p-4 mb-2'>
                <h2>How does the private route work?</h2>
                <p>
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                </p>
            </div>
            <div className='bg-success p-4 mb-2'>
                <h2>What is Node?</h2>
                <p>
                    Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model. Now that we know what is Node, let's look at why it is so prevalent in web development.
                </p>
                <h2> How does Node work?</h2>
                <p>
                It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </p>
            </div>
        </div>
    );
};

export default Blogs;