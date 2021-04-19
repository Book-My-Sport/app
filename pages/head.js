import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>This page has a title 🤔</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js'></script>
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
      </Head>

      <h1>This page has a title 🤔</h1>
    </div>
  )
}