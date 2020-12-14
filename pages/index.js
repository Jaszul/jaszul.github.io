import Head from 'next/head'
import { IconLibrary } from '../components/IconLibrary';

import { FirstSection } from '../components/sections/FirstSection'
import { SecondSection } from '../components/sections/SecondSection'
import { ThirdSection } from '../components/sections/ThirdSection'

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <IconLibrary/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
        </>
    )
}
