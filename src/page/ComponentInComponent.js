import React from "react";


const Dialog = (props) => {
    console.log(props)
    return (
        <PinkBorder color="pink">
            <h1>
                {props.title}
            </h1>
            <p>
                {props.message}
            </p>
        </PinkBorder>
    );
}

const PinkBorder = (props) => {
    return (
        <div style={{border: "solid", width: 500, borderColor: props.color}}>
            {props.children}
        </div>
    );
}

const ComponentInComponent = () => {
    return (
        <>
            <PinkBorder color="pink">
                <h1 style={{margin: 0, fontFamily: "sans-serif"}}>
                    Welcome
                </h1>
                <p style={{fontSize: "large"}}>
                    Thank you for visiting our spacecraft!
                </p>
            </PinkBorder>

            <Dialog
                title="Welcome"
                message="Thank you for visiting our spacecraft!"/>
        </>
    );
}


export default ComponentInComponent;