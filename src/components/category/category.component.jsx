import { Component } from "react";

import "./category.style.scss";

class Category extends Component {
  render() {
    const { title, img } = this.props;

    return (
      <div className="category-container">
        <img className="background-image" src={img} alt="" />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    );
  }
}

export default Category;
