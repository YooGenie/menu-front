import React from 'react';
import MenuList from "./MenuList";

const RestaurantMenu = (props) => {
    return (
        <div>
            <div style={{padding: 10}}>
                <MenuList parentPath={props.match.path}/>
            </div>
        </div>
    );
}

export default RestaurantMenu;