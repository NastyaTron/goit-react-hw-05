import { FadeLoader } from "react-spinners";

export default function Loader() {
  return (
    <div>
      <FadeLoader color="#2E3444" cssOverride={{ margin: "0 auto" }} />
    </div>
  );
}
