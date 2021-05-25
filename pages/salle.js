// import dynamic from 'next/dynamic';

// const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map'), {
//   ssr: false
// });

// export default () => <DynamicComponentWithNoSSR />;

import Header from '../components/Header'
import Steps from '../components/Steps'

export default function Home() {
  return (

    <>
      <Header />

      <main>
        <Steps />

      <form action="" method="post">
        <div className="trois">
          <label>Date :
            <input type="date" name="date" id=""></input>
          </label>
          <label>Heure :
            <input type="time" name="heure" id=""></input>
          </label>
          <label>distance maximum (km) :
            <input type="number" name="distance" id=""></input>
          </label>
        </div>

        <button><a href="/step-2">Continuer</a></button>
      </form>
      </main>

    </>

  )
}
