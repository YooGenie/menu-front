import React, {useMemo} from "react";


const getNum = (num) => {
    console.log("숫자가 변동되었습니다.",num);
    return num;
};


const StudyUseMemo = ({num}) => {
    console.log("StudyUseMemo");
    const showNum = useMemo(() => getNum(num), [num]);
    return (
        <div>
            숫자 변경 : {showNum}
        </div>
    );
};


export default StudyUseMemo;