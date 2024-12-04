import React from 'react';
import '../styles.css';

function ForKids() {
    const games = [
        { name: 'Nick Jr Games', link: 'https://www.nickjr.com/', img: '/nick.png' },
        { name: 'Cartoon Network Games', link: 'https://www.cartoonnetwork.com/games/', img: 'cn.svg' },
        { name: 'Poptropica', link: 'https://www.poptropica.com/', img: '/Edgar.webp' },
        { name: 'PBS Kids', link: 'https://pbskids.org/', img: '/pbs.svg' },
        { name: 'Sesame Street Games', link: 'https://www.sesamestreet.org/', img: '/sesame.webp' },
        { name: 'ABCya!', link: 'https://www.abcya.com/', img: '/abc.png' },
        { name: 'Prodigy', link: 'https://www.prodigygame.com/', img: '/prodigy.webp' },
        { name: 'Cool Math', link: 'https://www.coolmathgames.com/', img: '/cool.jpg' },
    ];

    const learn = [
        { name: 'National Geographic', link: 'https://www.nationalgeographic.com/', img: '/geo.png' },
        { name: 'ABCmouse', link: 'https://www.abcmouse.com/', img: '/mouse.webp' },
        { name: 'Khan Academy', link: 'https://www.khanacademy.org/', img: '/khan.png' },
    ];

    const activities = [
        { name: 'Easton Public Library', link: 'https://www.eastonpl.org/', img: '/library.png' },
        { name: 'Crayola Factory', link: 'https://www.crayolaexperience.com/', img: '/crayola.png' },
        { name: 'Neighborhood Center', link: 'https://eastonareaneighborhoodcenter.org/', img: 'eanc.avif' },
    ];

    return (
        <main>
            <div className="container for-kids-container">
                <div className="column">
                    <h2 className="column-header" data-translate="Game">
                        <span role="img" aria-label="Game Controller">🎮</span> Game <span role="img" aria-label="Game Controller">🎮</span>
                    </h2>
                    {games.map((game, index) => (
                        <a
                            key={index}
                            href={game.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="box-link"
                        >
                            <img src={game.img} alt={game.name} />
                            {game.name}
                        </a>
                    ))}
                </div>
                <div className="column">
                    <h2 className="column-header" data-translate="Learn">
                        <span role="img" aria-label="Book">📘</span> Learn <span role="img" aria-label="Book">📘</span>
                    </h2>
                    {learn.map((resource, index) => (
                        <a
                            key={index}
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="box-link"
                        >
                            <img src={resource.img} alt={resource.name} />
                            {resource.name}
                        </a>
                    ))}
                </div>
                <div className="column">
                    <h2 className="column-header" data-translate="Activity">
                        <span role="img" aria-label="Activity">🏃</span> Activity <span role="img" aria-label="Activity">🏃</span>
                    </h2>
                    {activities.map((activity, index) => (
                        <a
                            key={index}
                            href={activity.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="box-link"
                        >
                            <img src={activity.img} alt={activity.name} />
                            {activity.name}
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default ForKids;
