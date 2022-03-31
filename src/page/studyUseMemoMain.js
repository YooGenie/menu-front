import React, {useState} from "react";
import StudyUseMemo from "./studyUseMemo";


const StudyUseMemoMain = () => {
    console.log("StudyUseMemoMain 진입")
    const [num, setNum] = useState(0);


    const upNum = () => {
        console.log("increaseNumber 진입")
        setNum((preState) => preState + 1);
    };

    const downNum = () => {
        console.log("decreaseNumber 진입")
        setNum((preState) => preState - 1);
    };

    return (
        <>
            <div>
                <button onClick={upNum}>+</button>
                <button onClick={downNum}>-</button>
            </div>
            <StudyUseMemo num={num}/>
        </>
    );
};


export default StudyUseMemoMain;