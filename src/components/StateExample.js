// class component example using state
// import React , { Component } from 'react';

// class Message extends Component {

//     constructor(){
//         super()
//         this.state={
//             message:"Please click the subscribe button"
//         }
//     }

//     changeMessage(){
//         this.setState({
//             message:"Thankyou for subscribing"
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <h1>{this.state.message}</h1>
//                 <button onClick={()=>this.changeMessage()}>Subscribe</button>
//             </div>
//         )
//     }
   
// }

// export default Message

// using hooks
import React, { useState } from 'react';

const Message = () => {
    const [message, setMessage] = useState("Please click the subscribe button");

    const changeMessage = () => {
        setMessage("Thank you for subscribing");
    };

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={changeMessage}>Subscribe</button>
        </div>
    );
};

export default Message;
