import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <Helmet>
        <html lang="pt-br"/>
        <title>About Page</title>
        <meta name="description" content="About Page Description" />
    </Helmet>
    <h1>About Pandas Eating Lots</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
)