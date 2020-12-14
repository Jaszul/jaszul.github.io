import { useLayoutEffect } from 'react';
import configuration from '../../configuration';
import { AwaitHydration } from '../AwaitHydration';
import { Countdown } from '../Countdown/Countdown';
import styles from './sections.module.scss';
import glitchStyles from './glitchLogo.module.scss';

const _FirstSection = () => {
    useLayoutEffect(() => {
        const initParticles = async () => {
            await import('particles.js');
            window.particlesJS('firstSection', configuration.particles);
        };

        // initParticles();

        return () => {};
    }, []);

    return (
        <div id="firstSection" className={styles.firstSection}>
            <div className={styles.logoContainer}>
                <div className={glitchStyles.glitchLogoContainer}>
                    <div className={glitchStyles.glitchLogo} />
                    <div className={glitchStyles.glitchLogo} />
                    <div className={glitchStyles.glitchLogo} />
                    <div className={glitchStyles.glitchLogo} />
                    <div className={glitchStyles.glitchLogo} />
                </div>
                {/*<div className={styles.logo}>*/}
                {/*    <img src="/images/logo.png" />*/}
                {/*</div>*/}
                <div className={styles.elektroniczni}>
                    <img src="/images/elektroniczni.png" />
                </div>
            </div>
            <Countdown/>
        </div>
    );
};

export const FirstSection = AwaitHydration(_FirstSection);
