import React from 'react';
import './Faq.css'


const Faq = () => {
    return (
        <div>
            <div className="faq-container">
                <h1 className='section-title'>Q&A Section</h1>
                {/* Question : 1 section */}
                <div>
                    <p className="question">
                        Question : 1
                        <br />
                        What is the difference between Props vs state?
                    </p>
                    <p className="answer">
                        Answer:
                        <br />
                        Props is controlled by whichever renders the components but for State, its a updatable structure that is used to contain data or information about the component. There are more key difference between them. Like Props are read-only but State are not. On the other hand State is mutable but Props are immutable.
                    </p>
                </div>
                {/* Question : 2 section */}
                <div>
                    <p className="question">
                        Question : 2
                        <br />
                        How does useState work?
                    </p>
                    <p className="answer">
                        Answer:
                        <br />
                        With the invent of the functional components in ReactJS, we can perform state management using a famous hook called useState. We declare and track the component's state using this hook. It takes an optional argument as the initial state value and returns the current state and a function to update it.
                        So in a simpler way useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function, and it returns a variable with the current state value and another function to update this value.
                    </p>
                </div>
                {/* Question : 3 section */}
                <div>
                    <p className="question">
                        Question : 3
                        <br />
                        What is the purpose of useEffect other than fetching data?
                    </p>
                    <p className="answer">
                        Answer:
                        <br />
                        useEffect can do many things other that fetching data. Some are:
                        <ul>
                            <li>Running on state change: validating input field</li>
                            <li>Running on state change: live filtering</li>
                            <li>Running on state change: trigger animation on new array value</li>
                            <li>Running on props change: update paragraph list</li>
                        </ul>
                    </p>
                </div>
                {/* Question : 4 section */}
                <div>
                    <p className="question">
                        Question : 4
                        <br />
                        How Does React work?
                    </p>
                    <p className="answer">
                        Answer:
                        <br />
                        React is a JavaScript library that creates user UI in a efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilize it with other libraries.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Faq; <div className="faq-container"></div>