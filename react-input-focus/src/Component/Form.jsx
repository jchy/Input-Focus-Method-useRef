import React from 'react';

const Form = () => {

    const emailRef = React.useRef(null);

    React.useEffect(()=>{
    emailRef.current.focus();
    }, []);

    return (
        <form>
        Email:  <input type="email" name="email" placeholder="Enter your Email" ref={emailRef} className="form-input"/>
        </form>
    )
};

export default Form;