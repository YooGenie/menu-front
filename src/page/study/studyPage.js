import React, {useState} from 'react';
import {createClick, getPdf, kakaoLogin} from "./StudyService";
import {Input, message} from "antd";
import { saveAs } from "file-saver";
// import resizeImages from "./resize"
import imageCompression from 'browser-image-compression';

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
    const clickKakaoLogin = () => {
        kakaoLogin()
            .then(() => {
                message.success("성공했습니다.")
            })
            .catch(() => {
                message.error("실패했습니다")
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
                // const fileURL = URL.createObjectURL(bold.data);
                const link = document.createElement("a");
               link.click();
                // link.document.write('<iframe src="' + fileURL + '"  ></iframe>')

            })
            .catch(() => {
                message.error("다운 실패했습니다")
            })
    }

    const [file, setFile] = useState(null);
    //const [fileUrl, setFileUrl] = useState("");
    const handleFileOnChange = async (e) => {
        let file = e.target.files[0];	// 입력받은 file객체

        console.log("file : ", file)

        // 이미지 resize 옵션 설정 (최대 width을 100px로 지정)
        const options = {
            maxWidth: 1280
        }

        try {
            const compressedFile = await imageCompression(file, options);
            setFile(compressedFile);
            console.log("compressedFile : ",compressedFile)

            //AWS 파일 올리는 API 해서 compressedFile 보내면 URL 주소를 받을 수 있다.
            //compressedFile 리사이즈 한 파일 정보

            // resize된 이미지의 url을 받아 fileUrl에 저장
            // const promise = imageCompression.getDataUrlFromFile(compressedFile);
            // promise.then(result => {
            //     setFileUrl(result);
            // })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
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
    <div>
        <button onClick={() => {
            clickKakaoLogin()
            console.log("클릭")
        }
        } disabled={btn}>카카오로그인</button>
    </div>
            <div>
            <Input       type="file"
                         accept="image/*"
                         name="file"
                         onChange={handleFileOnChange}

            />

                {/*<input type='file' accept='image/jpg,image/png,image/jpeg,image/gif'*/}
                {/*       id='profile_img_upload' onChange={handleFileOnChange}*/}
                {/*/>*/}
            </div>
    </>
    );
}

export default Study;