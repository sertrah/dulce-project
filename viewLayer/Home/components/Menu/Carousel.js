import React from "react";
import Button from "@material-ui/core/Button";
import classnames from "classnames";
import styles from "../../../../styles/Home.module.scss";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.prevItem = this.prevItem.bind(this);
    this.nextItem = this.nextItem.bind(this);

    this.state = {
      counter: 0,
    };
  }

  prevItem() {
    var prevItem = this.state.counter - 1 < 0 ? this.props.items.length - 1 : this.state.counter - 1;

    this.setState({
      counter: prevItem,
    });
  }

  nextItem() {
    var nextItem = this.state.counter + 1 < this.props.items.length ? this.state.counter + 1 : 0;

    this.setState({
      counter: nextItem,
    });
  }

  render() {
    const items = this.renderItems(this.props.items);

    return (
      <div className={styles.carousel}>
        <div className={styles.carousel_prev} onClick={this.prevItem}></div>
        {items}
        <div className={styles.carousel_next} onClick={this.nextItem}></div>
      </div>
    );
  }

  renderItems(items) {
    return items.map((item, index) => this.renderItem(item, this.state.counter === index));
  }

  renderItem(item, current) {
    return <CarouselItem {...item} current={current}></CarouselItem>;
  }
}

class CarouselItem extends React.Component {
  render() {
    return (
      <div className={classnames(styles.carousel_item, this.props.current ? styles.current : "")}>
        <div className={styles.menu_card}>
          <div className={styles.menu_image} role="presentation">
            {" "}
          </div>
          <h2 className={styles.menu_title}>
            <span className={styles.menu_title_subtitle}>{this.props.title} </span>
            {this.props.title}
          </h2>
          <Button size="large" variant="contained" className={styles.menu_btn}>
            probar
          </Button>
        </div>
      </div>
    );
  }
}

export default Carousel;
