import Head from 'next/head'
import { FirstSection } from '../components/sections/FirstSection'
import { SecondSection } from '../components/sections/SecondSection'
import { ThirdSection } from '../components/sections/ThirdSection'
import styles from '../styles/Home.module.css'
import sectionStyles from '../components/sections/sections.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  )
}
