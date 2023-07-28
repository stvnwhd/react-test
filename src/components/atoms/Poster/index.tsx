import { FC } from "react";
import "./style.scss";

interface PosterPropTypes {
  imageSrc?: string;
}

const Poster: FC<PosterPropTypes> = ({
  imageSrc = "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
}) => {
  return (
    <div className="poster-wrapper">
      <img data-testid="poster" src={imageSrc} alt="poster" />
    </div>
  );
};

export default Poster;
