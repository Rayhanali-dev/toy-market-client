import React from 'react';

const Blog = () => {
    return (
        <div className='bg-slate-300 py-14'>
            <div className='max-w-7xl mx-auto'>
                <div className="collapse collapse-arrow mb-7">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-teal-700 text-primary-content peer-checked:bg-teal-700  peer-checked:text-secondary-content">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                        <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. <br /> Access token and refresh token shouldn't be stored in the local/session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie (even though there is CSRF) and I need it for most of my requests to the Resource Server anyway.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-7">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-teal-700 text-primary-content peer-checked:bg-teal-700 peer-checked:text-secondary-content">
                        Compare SQL and NoSQL databases?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                        <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-7">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-teal-700 text-primary-content peer-checked:bg-teal-700 peer-checked:text-secondary-content">
                        What is express js? What is Nest JS?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                        <p>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-7">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-teal-700 text-primary-content peer-checked:bg-teal-700 peer-checked:text-secondary-content">
                        What is MongoDB aggregate and how does it work?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                        <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;