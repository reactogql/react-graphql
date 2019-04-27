import React, { Component } from "react";
import "./ItemDetail.css";
import { NavLink } from "react-router-dom";
import { Container, Badge, Row, Col } from "reactstrap";

const itemData = [
  {
    detailKey: "1",
    thumbnail: "/images/cars/tn/car1_tn.jpg",
    header: "Aenean elementum eget risus accumsan ultricies",
    description:
      "Praesent nibh sapien, bibendum a velit a, faucibus malesuada mauris. Morbi volutpat, mauris sit amet cursus elementum, ex velit vestibulum sapien, et cursus nulla felis eu augue. Etiam sit amet viverra nunc. Quisque condimentum dui in diam lobortis ornare. Maecenas lacinia pretium tempus. Morbi id sodales mauris, vel condimentum neque. Vestibulum sed porttitor nibh, ac dapibus ante. Phasellus non congue enim, nec fringilla massa. Suspendisse tempor orci at dolor cursus, id dictum sem imperdiet."
  },
  {
    detailKey: "2",
    thumbnail: "/images/cars/tn/car2_tn.jpg",
    header: "Suspendisse ut risus est. Etiam pellentesque",
    description:
      "Donec lorem massa, pellentesque a massa vel, sodales convallis felis. Pellentesque eget dui sem. Vivamus at diam mi. Mauris porttitor ipsum at finibus ornare. Sed id pretium nisi, vel maximus ex. Praesent eu tellus id nisi finibus dictum. Etiam a dignissim nibh. Donec ut molestie ante, faucibus ornare tortor. Phasellus dui justo, iaculis id sodales non, maximus eget nisl. Etiam convallis urna tortor, nec interdum sapien eleifend vel."
  },
  {
    detailKey: "3",
    thumbnail: "/images/cars/tn/car3_tn.jpg",
    header: "Nullam vel ex nulla. Quisque lacinia ultricies",
    description:
      "Etiam a velit aliquam, tincidunt felis sit amet, suscipit ipsum. Sed vitae pharetra tortor, vel varius enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sagittis odio nec libero venenatis rutrum. Praesent nisl orci, blandit faucibus eleifend quis, molestie id arcu. Morbi eleifend finibus luctus. Quisque blandit ligula quam, et fringilla sapien suscipit mollis. Sed viverra, lorem a sodales fringilla, orci sapien rhoncus felis, id imperdiet erat lectus eget lacus."
  },
  {
    detailKey: "4",
    thumbnail: "/images/cars/tn/car4_tn.jpg",
    header: "Vestibulum leo felis, iaculis vel nisi eget, eleifend",
    description:
      "Nam non ultricies mauris, at ullamcorper orci. Nullam vel ex nulla. Quisque lacinia ultricies libero quis tempor. Proin sit amet pellentesque metus. Nullam quis mi hendrerit, maximus est a, dapibus lacus. Duis eget semper libero. Vestibulum leo felis, iaculis vel nisi eget, eleifend euismod odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis magna turpis, in hendrerit mi maximus dapibus. Morbi et felis id nisi vehicula molestie."
  }
];

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: {},
      selectItem: ""
    };
  }

  render() {
    const { selectedItem } = this.props.match.params;
    const selectedItemData = itemData.filter(
      item => item.detailKey === selectedItem
    )[0];
    return (
      <Container>
        <Row>
          <Col>
            <img
              className="img-thumbnail detailImage"
              src={selectedItemData.thumbnail}
            />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h1 className="detail-header">{selectedItemData.header}</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={{ size: 6, offset: 3 }}>
            <p className="text-justify">{selectedItemData.description}</p>
          </Col>
        </Row>
        <hr className="section-hr" />
        <Row>
          <Col sm={12} md={6} className="col-detail-mob">
            <h1 className="badge-h">
              Lorem <Badge color="secondary">New</Badge>
            </h1>
            <p>
              Morbi volutpat, mauris sit amet cursus elementum, ex velit
              vestibulum sapien, et cursus nulla felis eu augue. Etiam sit amet
              viverra nunc. Quisque condimentum dui in diam lobortis ornare.
              Maecenas lacinia pretium tempus. Morbi id sodales mauris, vel
              condimentum neque. Vestibulum sed porttitor nibh, ac dapibus ante.
              Phasellus non congue enim, nec fringilla massa. Suspendisse tempor
              orci at dolor cursus, id dictum sem imperdiet.
            </p>
          </Col>
          <Col sm={12} md={6}>
            <h1 className="badge-h">
              Ipsum <Badge color="secondary">New</Badge>
            </h1>
            <p>
              Nullam vel ex nulla. Quisque lacinia ultricies libero quis tempor.
              Proin sit amet pellentesque metus. Nullam quis mi hendrerit,
              maximus est a, dapibus lacus. Duis eget semper libero. Vestibulum
              leo felis, iaculis vel nisi eget, eleifend euismod odio. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              convallis magna turpis, in hendrerit mi maximus dapibus. Morbi et
              felis id nisi vehicula molestie.
            </p>
          </Col>
        </Row>
        <div className="home-btn">
          <NavLink to="/" className="btn btn-lg btn-info">
            Back Home
          </NavLink>
        </div>
      </Container>
    );
  }
}

export default ItemDetail;
