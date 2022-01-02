import React from 'react';
import {Button} from "antd";
import {useHistory} from "react-router-dom";

const Main = () => {
    const history = useHistory();
    return (
        <>
        <div>
            <Button onClick={() => {
                history.push("/menu")
            }}>메뉴판</Button>
            <Button onClick={() => {
                history.push("/study")
            }}>공부하기</Button>
        </div>
  </>
    );
}

export default Main;