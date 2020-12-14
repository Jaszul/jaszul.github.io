import moment from 'moment';
import { useEffect, useState, useRef } from 'react';
import styles from './Countdown.module.scss';
import config from '../../configuration';

export const Countdown = () => {
    const [count, setCount] = useState(moment.duration(moment()));

    // Use useRef for mutable variables that we want to persist
    // without triggering a re-render on their change
    const requestRef = useRef();

    const animate = () => {
        const now = moment();

        let dur;

        if (moment(config.kontrola_lotu_date).isAfter(moment())) {
            const timeDiff = moment(config.kontrola_lotu_date) - now;
            dur = moment.duration(timeDiff);
            requestRef.current = requestAnimationFrame(animate);
        } else {
            dur = moment.duration(0);
        }

        setCount(dur);
    }

    let days = '';
    let hours = '';
    let minutes = '';
    let seconds = '';

    if (count) {
        days = Math.floor(count.asDays());
        hours = count.hours().toString().padStart(2, '0');
        minutes = count.minutes().toString().padStart(2, '0');
        seconds = count.seconds().toString().padStart(2, '0');
    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []); // Make sure the effect runs only once

    return (
        <div className={styles.countdown}>
            <h3>Do następnej Kontroli Lotu</h3>
            <h1>
                {days}D {hours}H {minutes}M {seconds}S
            </h1>
        </div>
    );
};
