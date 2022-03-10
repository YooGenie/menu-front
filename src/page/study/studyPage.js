import React, {useState} from 'react';
import {createClick, getPdf} from "./StudyService";
import {message} from "antd";
import { saveAs } from "file-saver";

const Study = () => {
    const [btn, setBtn] = useState(false);
    const [data, setData] = useState(null)

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
    // const onClickPdf = (id) => {
    //     getPdf(id)
    //         .then(responseData => {
    //             setData(responseData);
    //             console.log(responseData);
    //             message.success("다운되었습니다")
    //         })
    //         .catch(() => {
    //             message.error("다운 실패했습니다")
    //         })
    //
    // };
    //
    // constructor(props, context) {
    //     super(props, context);
    // }

    const onClickPdf = (id) => {
        getPdf(id)
            .then((bold) => {
                console.log("responseData : ", bold)
                // const file = new Blob([responseData], { type: 'application/pdf' });
                // const fileURL = URL.createObjectURL(file);


                // link.download = "fileName.pdf";
                // link.click();
                // // document.body.removeChild(link);
                // URL.revokeObjectURL(fileURL);
                saveAs(bold.data, "member_list.pdf");

                setData(bold.data)
                console.log("bold.data: ", bold.data)
                message.success("다운되었습니다")
                const fileURL = URL.createObjectURL(bold.data);
                const link = document.createElement("a");
               link.click();
                link.document.write('<iframe src="' + fileURL + '"  ></iframe>')

            })
            .catch(() => {
                message.error("다운 실패했습니다")
            })
    }

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

            <button id="exportFile" onClick={() => {
                onClickPdf(2)
            }

            } disabled={btn}>PDF 다운
            </button>
            <iframe src={data}/>

          </div>
    );
}

export default Study;