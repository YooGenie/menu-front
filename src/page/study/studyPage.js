import React, {useState} from 'react';
import {createClick} from "./StudyService";
import {message} from "antd";


const Study = () => {
    const [btn, setBtn] = useState(false);

    const click = (data) => {
        setBtn(true)
        createClick(data)
            .then(() => {
                message.success("클릭했습니다.")
                setBtn(false)
            })
            .catch(() => {
                message.error("클릭 실패했습니다")
                setBtn(false)
            })
    };


    return (
        <div>
            공부하는 페이지
            <button onClick={() => {
                click({
                    click: "click"
                })
                setBtn(true)
            }

            } disabled={btn}>클릭</button>
        </div>
    );
}

export default Study;