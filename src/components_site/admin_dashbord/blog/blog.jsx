import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const YourComponentName = () => {

    const items = [
        {
            id: 1,
            imageUrl: 'https://source.unsplash.com/random/480x360?1',
            title: 'In usu laoreet repudiare legendos 1',
            date: 'January 21, 2021',
            content: 'Mei ex aliquid eleifend forensibus...',
        },
        {
            id: 2,
            imageUrl: 'https://source.unsplash.com/random/480x360?2',
            title: 'In usu laoreet repudiare legendos 2',
            date: 'January 22, 2021',
            content: 'Mei ex aliquid eleifend forensibus...',
        },
        {
            id: 3,
            imageUrl: 'https://source.unsplash.com/random/480x360?3',
            title: 'In usu laoreet repudiare legendos 3',
            date: 'January 23, 2021',
            content: 'Mei ex aliquid eleifend forensibus...',
        },

    ];

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <Container className="max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                        <span className="text-xs dark:text-gray-400">February 19, 2021</span>
                        <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                    </div>
                </a>
                <Row>
                    {items.map(item => (
                        <Col key={item.id} md={6} lg={4}>
                            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={item.imageUrl} />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{item.title}</h3>
                                    <span className="text-xs dark:text-gray-400">{item.date}</span>
                                    <p>{item.content}</p>
                                </div>
                            </a>
                        </Col>
                    ))}
                </Row>
                <div className="flex justify-center">
                    <Button variant="primary" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</Button>
                </div>
            </Container>
        </section>
    );
};

export default YourComponentName;
