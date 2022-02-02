import React from 'react';
import {Config} from "../../utils/Config";
import {HttpUtil} from "../../utils/HttpUtil";

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
