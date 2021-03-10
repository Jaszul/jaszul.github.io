import Head from 'next/head'
import { IconLibrary } from '../components/IconLibrary';

import { FirstSection } from '../components/sections/FirstSection'
import { SecondSection } from '../components/sections/SecondSection'
import { ThirdSection } from '../components/sections/ThirdSection'

export default function Home() {
    const num = Math.random();
    console.log(num)
    return (
        <>
            <Head key={num}>
                <meta name="google-site-verification" content="YAmT831qHZX816bPAmONLcg3TcesAThldeQhueAx3GU" />

                {process.env.NODE_ENV === "production" && (
                    <script dangerouslySetInnerHTML={{__html:`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-N546TXM');
                    `}}>
                    </script>
                )}

                <title>Elektroniczni {num}</title>
                {/* <link rel="icon" href="/favicon.ico"/> */}
                
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#000000"/>

                {process.env.NODE_ENV === "production" && (
                    <>
                        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-191840174-2"></script>
                        <script dangerouslySetInnerHTML={{__html:`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            
                            gtag('config', 'UA-191840174-2');
                            `}}>
                        </script>
                    </>
                )}
            </Head>
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N546TXM" height="0" width="0" style={{ display:"none", visibility:"hidden"}}></iframe>
            </noscript>
            
            <IconLibrary/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
        </>
    )
}
