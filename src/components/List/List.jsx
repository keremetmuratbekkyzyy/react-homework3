import { Card } from "../Card/Card";
import data from "../../db/data.json";
import cls from "./List.module.scss";

export const List = () => {
  const { results } = data;

  return (
    <div className={cls.list}>
      {results.map((el) => (
        <Card key={el.id} card={el} images={el.images} />
      ))}
    </div>
  );
};
