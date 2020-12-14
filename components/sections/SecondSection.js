import styles from './sections.module.scss';

export const SecondSection = () => {
    return (
        <div className={styles.secondSection}>
            <div className={styles.secondSection__background} />
            <div className={styles.secondSection__content}>
                <div className={styles.soundcloud}>
                    <iframe
                        width="100%"
                        height="100%"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1096262980&color=%23625664&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                    />
                </div>
                <div className={styles.secondSection__text}>
                    <h1>KONTROLA LOTU</h1>
                    Jesteś w stanie wyobrazić sobie imprezę na miarę dobrego festiwalu, bez super promocji w radio, TV... i jeszcze lepszych sponsorów? Przedsięwzięcie, w którym najważniejsi są ludzie i łączącą ich muzyka a nie koszt biletu?
                    <br/>
                    <br/>
                    Festiwal, którego esencją jest połączenie pasji różnych ludzi w jednym celu - spontanicznej, niczym nieograniczonej zabawie w miejscu które potęguje uczucie wolności i beztroskiego czerpania z chwili nasyconej dźwiękami muzyki dobrej, niszowej muzyki elektronicznej.
                    <br/>
                    <br/>
                    Festiwal organizowany jest w budynkach lotniska w Chojnie (zachodniopomorskie). Bunkry, koszary i hangary. Wysokie trawy, w których nasi festiwalowicze rozkładają swoje namioty tworząc małe enklawy reprezentujące różne regiony naszego kraju.
                    <br/>
                    <br/>
                    Wszystko to tworzy niepowtarzalny klimat, którego nie zaznasz na komercyjnych festiwalach.
                </div>
            </div>
        </div>
    );
};
