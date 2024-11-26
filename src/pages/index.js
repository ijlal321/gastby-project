import React from "react";
import { Link } from "gatsby";
const HomePage = () => (
 <main>
 <h1>Welcome to Gatsby</h1>
 <Link to="/about">Go to About Page</Link>
 </main>
);
export default HomePage;


// import React from "react";
// import { graphql } from "gatsby";
// const HomePage = ({ data }) => (
//  <main>
//  <h1>{data.site.siteMetadata.title}</h1>
//  <p>{data.site.siteMetadata.description}</p>
//  </main>
// );
// export const query = graphql`
//  query {
//  site {
//  siteMetadata {
//  title
//  description
//  }
//  }
//  }
// `;
// export default HomePage;