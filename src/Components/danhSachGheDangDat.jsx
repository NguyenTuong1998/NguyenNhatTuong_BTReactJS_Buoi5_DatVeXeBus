import React, { Component } from "react";
import ItemToList from "./itemToList";

class DanhSachGheDangDat extends Component {
  renderProductItem = () => {
    const productItemUI = this.props.listProductOder.map((item) => {
      return <ItemToList key={item.products.SoGhe} data={item} />;
    });
    return productItemUI;
  };

  render() {
    return (
      <div className="text-left ml-5 font-weight-normal">
        {this.renderProductItem()}
      </div>
    );
  }
}

export default DanhSachGheDangDat;
