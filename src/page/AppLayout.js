import React, {Component} from "react";
import { Layout } from 'antd';
const { Content} = Layout;

export default class AppLayout extends Component {
    state = {
        collapsed: false,
    };

    render() {
        const {location} = this.props;
        let rootPath = location.pathname.split("/")[1];
        if (rootPath == "") {
            rootPath = "/";
        }
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Layout>
                    <Content style={{minHeight: 280}}>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
