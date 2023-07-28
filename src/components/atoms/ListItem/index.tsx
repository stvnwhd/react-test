import { FC } from "react";
import "./style.scss";

interface ListItemPropTypes {
  itemID: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const ListItem: FC<ListItemPropTypes> = ({
  itemID,
  label,
  isActive,
  onClick = () => {}
}) => {
  return (
    <li
      className={"list-item-wrapper" + (isActive ? " active" : "")}
      data-testid={`movie-list-item-${itemID}`}
      onClick={onClick}
    >
      {label}
    </li>
  );
};

export default ListItem;
