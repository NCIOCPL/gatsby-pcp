import React from "react";
import { Link } from "gatsby";

export default function Breadcrumbs ({ crumbs }) {
  console.log(crumbs);
  const links = crumbs.map((crumb, index) => (
    <React.Fragment key={index}>
      <Link to={crumb.pathname}>{crumb.crumbLabel}</Link>
      {index !== crumbs.length - 1 && " - "}
    </React.Fragment>
  ));

  return <>{links}</>;
}