import './index.html';
import './index.scss';

import { countdown } from "./scripts/countdown";
import { particles } from "./scripts/particles";

window.addEventListener('DOMContentLoaded', (event) => {
    countdown();
    particles();
});