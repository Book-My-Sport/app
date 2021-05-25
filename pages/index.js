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
        <div className="deux nom_prenom">
          <label>Nom :
            <input type="text" name="nom" id=""></input></label>
          <label>Prénom :
            <input type="text" name="prenom" id=""></input></label>
        </div>
        <div className="deux mail_tel">
          <label>E-mail :
            <input type="email" name="mail" id=""></input></label>
          <label>téléphone :
            <input type="tel" name="tel" id=""></input></label>
        </div>
        <div className="deux adresse">
          <label>Adresse :
            <input type="text" name="adresse" id="" className="full"></input></label>
          <label>Complément d'adresse :
            <input type="text" name="adressecomplement" id="" className="full"></input></label>
        </div>
        <div className="deux cp_ville">
          <label>Code postal :
            <input type="number" name="codepostal" min="00000" max="99999"id=""></input></label>
          <label>Ville :
            <input type="text" name="ville" id=""></input></label>
        </div>
        <button><a href="/step-2">Continuer</a></button>
      </form>
      </main>

    </>

  )
}