import Card from './Card'
import styles from '../styles/CardContainer.module.css'
import PropTypes from "prop-types";
import coffeeShops2 from '../data/coffeeShops2.json'


function CardContainer() {
  
  

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardLayout}>
        {coffeeShops2.map((shop) => (
          <Card  
          key={shop.id}
          name={shop.name}
          thumbnail={shop.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

CardContainer.propTypes = {
  coffeeShops: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    })
  ),
};

export default CardContainer