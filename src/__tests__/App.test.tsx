import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MOVIE_LIST } from "../components/molecules/MovieList/constant";
import { Provider } from "react-redux";
import configureStore from "../store";
import App from "../App";

it("Initial Render", () => {
  act(() => {
    render(
      <Provider store={configureStore()}>
        <App />
      </Provider>
    );
  });

  const headerTitle = screen.getByTestId("header-title").textContent;
  const movieDetailTitle = screen.getByTestId("movie-title").textContent;
  const movieDetailDirector = screen.getByTestId("movie-director").textContent;
  const movieDetailCast = screen.getByTestId("movie-cast").textContent;
  const movieDetailGenre = screen.getByTestId("movie-genre").textContent;
  const movieList = screen.getByTestId("movie-list").children;

  expect(headerTitle).toEqual(MOVIE_LIST[0].title);
  expect(movieDetailTitle).toEqual(MOVIE_LIST[0].title);
  expect(movieDetailDirector).toEqual(`Director: ${MOVIE_LIST[0].director}`);
  expect(movieDetailCast).toEqual(`Casts: ${MOVIE_LIST[0].casts}`);
  expect(movieDetailGenre).toEqual(`Genre: ${MOVIE_LIST[0].genre}`);
  expect(movieList.length).toEqual(MOVIE_LIST.length);
});

it("Click movie item", () => {
  act(() => {
    render(
      <Provider store={configureStore()}>
        <App />
      </Provider>
    );
  });

  const selectedMovieIndex = 2;
  const selectedMovie = MOVIE_LIST[selectedMovieIndex];
  const movieItem: any = screen.getByTestId(
    `movie-list-item-${selectedMovie.id}`
  );

  fireEvent.click(movieItem);

  const headerTitle = screen.getByTestId("header-title").textContent;
  const movieDetailTitle = screen.getByTestId("movie-title").textContent;
  const movieDetailDirector = screen.getByTestId("movie-director").textContent;
  const movieDetailCast = screen.getByTestId("movie-cast").textContent;
  const movieDetailGenre = screen.getByTestId("movie-genre").textContent;

  expect(headerTitle).toEqual(selectedMovie.title);
  expect(movieDetailTitle).toEqual(selectedMovie.title);
  expect(movieDetailDirector).toEqual(`Director: ${selectedMovie.director}`);
  expect(movieDetailCast).toEqual(`Casts: ${selectedMovie.casts}`);
  expect(movieDetailGenre).toEqual(`Genre: ${selectedMovie.genre}`);

  MOVIE_LIST.forEach((item) => {
    const currentItem: any = screen.getByTestId(`movie-list-item-${item.id}`);

    if (item.id === selectedMovie.id) {
      expect(currentItem.className).toEqual("list-item-wrapper active");
    } else {
      expect(currentItem.className).toEqual("list-item-wrapper");
    }
  });
});
