import {formatCurrency} from "../../utils/helpers.js";
import PropTypes from "prop-types";

function MenuItem({ pizza }) {
    console.log(pizza);
   const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} id={id}/>
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

//????
MenuItem.propTypes = {
    pizza: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        unitPrice: PropTypes.number.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        soldOut: PropTypes.bool,
        imageUrl: PropTypes.string.isRequired
    }).isRequired
};

export default MenuItem;
