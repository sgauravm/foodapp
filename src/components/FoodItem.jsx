import styles from "./foodItem.module.css";

export default function ({ food }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.itemButton}>View Recepie</button>
      </div>
    </div>
  );
}
