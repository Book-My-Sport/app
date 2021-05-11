import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map'), {
  ssr: false
});

import Header from '../components/Header'
import Steps from '../components/Steps'

export default function Home() {
  return (

    <>
      <Header />

      <main>
        <Steps />

      <form action="" method="post">
        <div className="deux">
          <label>Date :
            <input type="date" name="date" id=""></input></label>
          <label>Heure :
            <input type="time" name="heure" id=""></input></label>
        </div>
      
        <DynamicComponentWithNoSSR />

        <button><a href="/">Retour</a></button>
        <button><a href="#">Continuer</a></button>
      </form>
    </main>

    </>

  )
}