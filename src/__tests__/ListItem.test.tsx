import { act } from "react-dom/test-utils";
import { render, screen, fireEvent } from "@testing-library/react";
import ListItem from "../components/atoms/ListItem";

it("Initial Render List Item", () => {
  const itemID = "12";
  const label = "Test label";
  const isActive = false;
  act(() => {
    render(
      <ListItem
        itemID={itemID}
        label={label}
        isActive={isActive}
        onClick={() => {}}
      />
    );
  });

  const item: any = screen.getByTestId(`movie-list-item-${itemID}`);
  expect(item).toBeTruthy();
  expect(item.className).toEqual("list-item-wrapper");
  expect(item.textContent).toEqual(label);
  expect(isActive).toBeFalsy();
});

it("On Click List Item", () => {
  const itemID = "12";
  const label = "Test label";
  let isActive = false;

  const onClick = () => {
    isActive = true;
  };
  act(() => {
    render(
      <ListItem
        itemID={itemID}
        label={label}
        isActive={isActive}
        onClick={onClick}
      />
    );
  });

  const item: any = screen.getByTestId(`movie-list-item-${itemID}`);
  fireEvent.click(item);

  expect(isActive).toBeTruthy();
});
