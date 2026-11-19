import { Button } from "antd";
import cls from "./Card.module.scss";

export const Card = ({ card, images }) => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  const onBuy = () => {
    console.log(card.id, card.name);
  };

  return (
    <div className={cls.card}>
      <img className={cls.image} src={randomImage} alt={card.name} />
      <h2 className={cls.title}>{card.name}</h2>
      <Button type="primary" onClick={onBuy} block>
        Buy now
      </Button>
    </div>
  );
};
