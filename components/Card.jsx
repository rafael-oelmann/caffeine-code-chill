import Image from 'Next/image'
import styles from '../styles/Card.module.css'

function Card(shop) {


  return (
    <div>
      <Image
        src={shop.thumbnail}
        width={100}
        height={100}
        alt="Alt"
        className={styles.card}
      />
      <h2>{shop.shopName}</h2>
    </div>
  );
}

export default Card