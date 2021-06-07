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

        <div className="deux trois">
          <p></p>
        </div>
    </main>

    </>

  )
}
