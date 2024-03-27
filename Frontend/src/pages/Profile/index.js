import React from 'react';
import { Tabs } from 'antd';
import Items from "./Items";
import Users from "./Users";

const { TabPane } = Tabs;

function Profile() {
    return (
        <div>
            <Tabs defaultActiveKey='1'>
                <TabPane tab="Items" key="1">
                    <Items />
                </TabPane>
                <TabPane tab="Users" key="2">
                    <Users />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default Profile;
