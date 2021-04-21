import moment from 'moment';

const kontrolaLotuDate = '2021-08-01T22:01:00+01:00';

export const countdown = () => {
    const now = moment();

    let duration;

    if (moment(kontrolaLotuDate).isAfter(moment())) {
        const timeDiff = moment(kontrolaLotuDate) - now;
        duration = moment.duration(timeDiff);
        requestAnimationFrame(countdown);
    } else {
        duration = moment.duration(0);
    }

    let days = '';
    let hours = '';
    let minutes = '';
    let seconds = '';

    if (duration) {
        days = Math.floor(duration.asDays());
        hours = duration.hours().toString().padStart(2, '0');
        minutes = duration.minutes().toString().padStart(2, '0');
        seconds = duration.seconds().toString().padStart(2, '0');
    }

    const element = document.getElementById("counter");

    if (!element) {
        return;
    }

    element.innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;
};