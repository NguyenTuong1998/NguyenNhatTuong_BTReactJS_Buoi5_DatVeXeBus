import React, { Component } from "react";

class GheItem extends Component {
  state = {
    isbooking: false,
  };

  addListOder = () => {
      this.setState({
          isbooking: !this.state.isbooking,
      })
    this.props.addToProductListOder(this.props.data);
  };

  render() {
    return (
      <div
        onClick={this.addListOder}
        className={` btn ${
          this.state.isbooking
            ? "btn btn-success mb-3"
            : "btn btn-secondary mb-3"
        } && ${
          this.props.data.TrangThai
            ? "btn btn-danger mb-3 disabled"
            : "btn btn-secondary mb-3"
        }`}
      >
        {this.props.data.SoGhe}
      </div>
    );
  }
}

export default GheItem;
