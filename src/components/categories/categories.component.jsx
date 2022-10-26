import { Component } from "react";
import Category from "../category/category.component";

import "./categories.styles.scss";

class Categories extends Component {
  render() {
    const { categories } = this.props;

    return (
      <div className="categories-container">
        {categories.map(({ id, title, imageUrl }) => {
          return <Category key={id} title={title} img={imageUrl} />;
        })}
      </div>
    );
  }
}

export default Categories;
