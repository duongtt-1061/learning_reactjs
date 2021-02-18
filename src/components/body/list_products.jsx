import React from 'react';
import Product from './product';

export default class ListProducts extends React.Component{
  ARRAY_PRODUCTS = [
    {name: "iphone", price: 60},
    {name: "ipad", price: 100},
    {name: "apple watch", price: 50}
  ];

  render(){
    return(
      <div>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Tên</th>
              <th scope="col">Giá</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {this.ARRAY_PRODUCTS.map (({name, price}) =>
              <Product name={name} price={price} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
};
