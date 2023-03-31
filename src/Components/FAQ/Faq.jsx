import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className="faq-container">
            <h1 className='section-title'>Q&A</h1>
            {/* Question : 1 section */}
            <div>
                <p>
                    <span className="question">Question : 1</span>
                    <br /> 
                    <span className='qus'>What is the difference between props vs state?</span>
                </p>
                <p>
                    <span className="answer">Answer:</span>
                    <br />
                    Props is controlled by whichever renders the components but for State, it is a updatable structure that is used to contain data or information about the component. There are more key difference between them. Like props are read-only but state are not. On the other hand state is mutable but props are immutable.
                </p>
            </div>
            <br />
            {/* Question : 2 section */}
            <div>
                <p>
                    <span className="question">Question : 2 </span>
                    <br /> 
                    <span className='qus'>How does useState work?</span>
                </p>
                <p>
                    <span className="answer">Answer:</span>
                    <br />
                    With the invent of the functional components in ReactJS, we can perform state management using a famous hook called useState. We can declare and track the component's state using this hook. It takes an optional argument as the initial state value and returns the current state and a function to update it.
                    So in a simpler way useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function, and it returns a variable with the current state value and another function to update this value.
                </p>
            </div>
            <br />
            {/* Question : 3 section */}
            <div>
                <p>
                    <span className="question">Question : 3</span>
                    <br /> 
                    <span className='qus'>What is the purpose of useEffect other than fetching data?</span>
                </p>
                <p>
                    <span className="answer">Answer:</span>
                    <br />
                    useEffect can do many things other that fetching data. Some are:
                </p>
                    <div>
                        <p>1. Event listener can be added.</p>
                        <p>2. Updating the browser's title or scroll position.</p>
                        <p>3. We can use it for DOM Manipulation.</p>
                        <p>4. Validating an input while it's receiving characters</p>
                        <p>5. To optimize the performance of your component, You can use it to prevent unnecessary re-renders of your component by specifying the dependencies of the effect.</p>
                    </div>
            </div>
            <br />
            {/* Question : 4 section */}
            <div>
                <p>
                    <span className="question">Question : 4</span>
                    <br /> 
                    <span className='qus'>How Does React work?</span>
                </p>
                <p>
                    <span className="answer">Answer: </span>
                    <br />
                    React is a JavaScript library that creates user UI in a efficient way using declarative code. It works through a virtual dom. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilize it with other libraries.
                </p>
            </div>
        </div>
    );
};

export default FAQ;