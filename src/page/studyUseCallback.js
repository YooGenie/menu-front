import React, {useCallback, useState} from "react";


const CountBtn = function ({onClicks, count}) {
    console.log("카운터 버튼 렌더링", count.num);
    return <button onClick={onClicks}>{count.num}</button>;
};

const StudyUseCallback = () => {
    console.log("StudyUseCallback")
    const [count, setCount] = useState({num: 0});
    const [count2, setCount2] = useState({num: 0});

    const upNum = () => {
        console.log("upNum", count.num)
        setCount({num: count.num + 1});
    };

    const callbackUpNum = useCallback(() => {
        console.log("upNum2 upNum2", count2.num)
        setCount2({num: count2.num + 1});
    }, [count.num]);

    //아무리 클릭을 해도 실행이 되지 않는다.
    //count2 값이 변경 될때마다 실행된다

    return (
        <div>
            <div>{count.num}</div>
            <CountBtn onClicks={upNum} count={count}/>
            <div>{count2.num}</div>
            <CountBtn onClicks={callbackUpNum} count={count2}/>
        </div>
    );
}

export default StudyUseCallback;