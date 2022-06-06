import { Link } from "react-router-dom";

export function Index() {
  return (
    <>
      <div className="container-fluid">
        <div className="row m-4 align-items-center justify-content-center">
          <Link to="/external-catalog">
            <button type="button" class="btn btn-primary">External Catalog</button>
          </Link>
        </div>
        <div className="row m-6 align-items-center justify-content-center">
          <Link to="/catalog">
            <button type="button" class="btn btn-primary">Catalog</button>
          </Link>
        </div>
      </div>
    </>
  );
}
