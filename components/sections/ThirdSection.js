import { useLayoutEffect } from 'react';
import configuration from '../../configuration';
import { AwaitHydration } from '../AwaitHydration';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './sections.module.scss';

export const _ThirdSection = () => {
    useLayoutEffect(() => {
        const initParticles = async () => {
            await import('particles.js');
            window.particlesJS('particlesContainer', configuration.particles);
        };

        initParticles();

        return () => {};
    }, []);

    return (
        <div className={styles.thirdSection}>
            <div className={styles.thirdSection__logo} />
            {/*<div className={styles.secondSection__background} />*/}
            <div id="particlesContainer" className={styles.particlesContainer} />

            <div className={styles.thirdSection__socials}>
                <a href="https://www.facebook.com/elektronicznie" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                </a>
                <a href="https://www.instagram.com/elektro.niczni/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
                <a href="https://soundcloud.com/elektroniczni" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={["fab", "soundcloud"]} />
                </a>
                <a href="https://www.youtube.com/channel/UCXm-lMm_J9iD4gc3eRzubFw" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={["fab", "youtube"]} />
                </a>
                <a href="https://www.twitch.tv/elektroniczni" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={["fab", "twitch"]} />
                </a>
            </div>
        </div>
    );
};

export const ThirdSection = AwaitHydration(_ThirdSection);
