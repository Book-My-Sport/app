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

        <div className="resa">
          <h2>Bonjour<?php $_POST["nom"] $_POST["prenom"]?>, </h2>
          <h3>Vos informations personnelles :</h3>
          <p>E-mail : <?php $_POST["mail"]?><br>
          Tel : <?php $_POST["tel"]?><br>
          Adresse : <?php $_POST["adresse"]?><br>
          Complément d'adresse : <?php $_POST["adressecomplement"]?><br>
          Code postal : <?php $_POST["codepostal"]?><br>
          Ville : <?php $_POST["ville"]?><br></p>
          <h3>Votre réservation :</h3>
          <p>Vous avez réservé la salle ... à ...<br>
          Pour le <?php $_POST["date"]?>
          à <?php $_POST["heure"]?>
        </div>
    </main>

    </>

  )
}
