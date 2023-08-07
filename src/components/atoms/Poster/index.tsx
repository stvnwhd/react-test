import { FC } from "react";
import "./style.scss";

interface PosterPropTypes {
  imageSrc: string;
}

const Poster: FC<PosterPropTypes> = ({ imageSrc }) => {
  return (
    <div className="poster-wrapper">
      <img data-testid="poster" src={imageSrc} alt="poster" />
    </div>
  );
};

export default Poster;
