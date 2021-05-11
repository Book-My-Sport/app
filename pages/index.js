// import dynamic from 'next/dynamic';

// const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map'), {
//   ssr: false
// });

// export default () => <DynamicComponentWithNoSSR />;

import Header from '../components/Header'

export default function Home() {
  return (
    <Header />
  )
}