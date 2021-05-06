import React, { Component } from 'react';
import SHOPDATA from './shop.data';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOPDATA
        }

    }

    render() {
        return (
            <div>Shop Page</div>
        )
    }

}


export default ShopPage;