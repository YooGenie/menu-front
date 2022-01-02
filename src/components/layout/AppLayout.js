import React, {Component} from "react";
import { Layout } from 'antd';
import Footer from "./Footer";
import Header from "./Header";
import Main from "../../page/main";
import dd from "./AppLayout.css"
import styles from "./AppLayout.css";

export default class AppLayout extends Component {
    state = {
        collapsed: false,
    };

    render() {
        const {location} = this.props;
        let rootPath = location.pathname.split("/")[1];
        if (rootPath === "") {
            rootPath = "/";
        }
        return (
            <Layout
                style={{
                    minHeight: "100%"
                }}
            >
                <Layout>
                    <Header/>
                    <Main/>
                    <Footer/>
                </Layout>
            </Layout>
        );
    }
}
