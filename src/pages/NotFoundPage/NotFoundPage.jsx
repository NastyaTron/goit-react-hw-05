import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <p className={css.text}>
      Not found page. Go to
      <Link to="/" className={css.link}>
        home page
      </Link>
    </p>
  );
}
