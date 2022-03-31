
import {Config} from "../../utils/Config";
import {HttpUtil} from "../../utils/HttpUtil";
import axios from "axios";

export const createClick = (data) => {
    return fetch(`${Config.API_SERVER()}/click`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: HttpUtil.getHeader(),
    })
        .then(HttpUtil.handleHttpStatus)
        .catch(HttpUtil.handleHttpStatusError)
        .then(res => {
            return res.status

        });
};

export const getPdf = (id) => {
    return axios.get(`${Config.API_SERVER()}/pdf/${id}`, {
        params: id,
        loading: true,
        // method: "GET",
        headers: {  'Content-Type': 'application/pdf'},
        responseType: "blob",
    })
};
