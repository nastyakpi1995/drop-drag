import React from 'react';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import { setItemToList } from '../../redux/ducks/products';

const PhoneCatalog = ({ products, setItemToWishes, listWishes }) => (
  <div
    className="price-tags"
  >    {listWishes.map(e =>
    <div>
      <h1>{e.name}</h1>
      <div>{e.quantity}</div>
    </div>
  )}
    { products.map(phone => (
      <div
        draggable="true"
        key={phone.id} className="price-tag">
        <img
          className="price-tag__wrapp-card-img"
          src={
            `${phone.imageUrl}`
          }
          alt="Phone"
        />
        <span className="card__item-title" />
        <div className="about__item-text">
          {phone.snippet}
        </div>
        <div className="card__information__detail">
          <button
            type="submit"
            className="price-btn default__btn"
            onClick={() => {
              setItemToWishes(phone.name, phone.imageUrl, phone.id);
            }}
          >
      Add
          </button>
        </div>
      </div>
    ))}

  </div>

);

PhoneCatalog.propTypes = {
  // requestProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.listProducts.getPhones,
  listWishes: state.listProducts.listWishes,
});

const mapDispatchToProps = dispatch => ({
  setItemToWishes: (name, img, id) => dispatch(setItemToList(name, img, id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhoneCatalog);
