import React, { Component } from 'react';

class ItemToList extends Component {
    render() {
        return (
          <div>
            <p>
              Ghế: {this.props.data.products.TenGhe} $
              {this.props.data.products.Gia}
              <a className="ml-2 text-danger" href="#">
                [Hủy]
              </a>
            </p>
          </div>
        );
    }
}

export default ItemToList;