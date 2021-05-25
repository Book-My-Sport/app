import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map'), {
  ssr: false
});

import Header from '../components/Header'
import Steps from '../components/Steps'
import Testmap from '../components/Testmap'

export default function Home() {
  return (

    <>
      <Header />

      <main>
        <Steps />

      <form action="" method="post">
        <div className="deux">
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

        <DynamicComponentWithNoSSR />
        <Testmap />

        <button className="retour"><a href="/">Retour</a></button>
        <button className="continuer" {
          constructor() {

          }
        }><a href="/step-3.js">Continuer</a></button>
      </form>
    </main>

    </>

  )
}
