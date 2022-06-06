import { Link } from "react-router-dom";

export function Index() {
  return (
    <>
      <div className="container-fluid">
        <div className="row m-4 align-items-center justify-content-center">
          <Link to="/external-catalog">
            <button
              style={{
                backgroundColor: "#8257E6",
                border: 0,
                padding: "6px 12px",
                color: "#f9f9f9",
              }}
            >
              External Catalog
            </button>
          </Link>
        </div>
        <div className="row m-6 align-items-center justify-content-center">
          <Link to="/catalog">
            <button
              style={{
                backgroundColor: "#8257E6",
                border: 0,
                padding: "6px 12px",
                color: "#f9f9f9",
              }}
            >
              Catalog
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
