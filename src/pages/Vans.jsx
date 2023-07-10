import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { requireAuth } from "../util";
import { defer, Await } from "react-router-dom";
import { Suspense } from "react";

export const loader = async ({ request }) => {
  const promise = requireAuth(request)
    .then(() =>
      fetch(`https://64aa228f8b9afaf4844b37d1.mockapi.io/api/vans`, {
        signal: request.signal,
      })
    )
    .then((response) => response.json());

  return defer({
    vans: promise,
    vansFilters: new Promise((resolve) => {
      resolve([{ type: "simple" }, { type: "luxury" }, { type: "rugged" }]);
    }),
  });
};

const Van = ({ van }) => {
  return (
    <div key={van.id} className="van-title">
      <Link to={`/vans/${van.id}`} className="van-tile">
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  );
};

const Vans = () => {
  const loaderData = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <Suspense fallback={<h3>loading filters</h3>}>
        <Await resolve={loaderData.vansFilters}>
          {(vansFilters) => {
            return (
              <div className="van-list-filter-buttons scrollable">
                {vansFilters.map(({ type }) => (
                  <button
                    key={type}
                    className={`van-type ${type} ${
                      typeFilter === type ? "selected" : ""
                    }`}
                    onClick={() => {
                      setSearchParams({ type });
                    }}
                  >
                    {type}
                  </button>
                ))}
                {typeFilter && (
                  <button
                    className="van-type clear-filters"
                    onClick={() => {
                      setSearchParams({});
                    }}
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            );
          }}
        </Await>
      </Suspense>
      <Suspense fallback={<h3>loading</h3>}>
        <Await resolve={loaderData.vans}>
          {(vans) => {
            const filteredVans = typeFilter
              ? vans?.filter((van) => van.type === typeFilter)
              : vans;
            return (
              <div className="van-list">
                {filteredVans?.map((van) => (
                  <Van key={van.id} van={van} />
                ))}
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default Vans;
