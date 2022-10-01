import md5 from 'js-md5';
import React, { useState, useEffect } from 'react';

function Comic(props) {
	const [comics, setComics] = useState([]);

    useEffect(() => {
            const ts = Number(new Date());
            const hash = md5.create();
            hash.update(
                ts +
                    process.env.REACT_APP_PRIVATE_KEY +
                    process.env.REACT_APP_PUBLIC_KEY
            );
            console.log(ts, hash);
            fetch(
                `https://gateway.marvel.com/v1/public/comics?ts=${ts}&limit=10&apikey=${
                    process.env.REACT_APP_PUBLIC_KEY
                }&hash=${hash.hex()}`
            )
                .then((res) => res.json())
                .then((data) => {
                    setComics(data.data.results);
                    console.log('comicsssssss', data.data.results);
                })
                // set error state
                .catch(() => console.log('error'));
        }, []);

    return (
			<div>
				<main>
					{comics.map((comic) => {
						return (
							<div>
								<h1>{comic.title}</h1>
								<a href={`${comic.urls[0].url}`} target='_blank'>
									more info
								</a>
								<img src={comic.thumbnail.path + '.jpg'} alt='comic-image' />
								{/* <h3>{comic.textObjects[0].text}</h3> */}
							</div>
						);
					})}
				</main>
			</div>
		);
}

export default Comic;