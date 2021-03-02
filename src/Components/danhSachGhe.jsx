import React, { Component } from 'react';
import GheItem from './gheItem';

class DanhSachGhe extends Component {
    
    renderProductList = () => {
        const productsUI = this.props.data.map((item) => {
            return (
              <div className="col-3" key={item.SoGhe}>
                <GheItem
                  addToProductListOder={this.props.addToProductListOder}
                  getProducts = {this.props.getProducts}
                  data={item}
                />
              </div>
            );
        });
        return productsUI;
    }

    render() {
        return (
            <div className="container mt-2">
                <div className="row">{this.renderProductList()}</div>
            </div>
        );
    }
}

export default DanhSachGhe;