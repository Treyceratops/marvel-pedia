import md5 from 'js-md5';
import React, { useState, useEffect } from 'react';

function Story(props) {
    const [stories, setStories] = useState([]);

	useEffect(() => {
		const ts = Number(new Date());
		const hash = md5.create();
		hash.update(
			ts + process.env.REACT_APP_PRIVATE_KEY + process.env.REACT_APP_PUBLIC_KEY
		);
		console.log(ts, hash);
		fetch(
			`https://gateway.marvel.com/v1/public/stories?ts=${ts}&limit=10&apikey=${
				process.env.REACT_APP_PUBLIC_KEY
			}&hash=${hash.hex()}`
		)
			.then((res) => res.json())
			.then((data) => {
				setStories(data.data.results);
				console.log('storiesssss', data.data.results);
			})
			// set error state
			.catch(() => console.log('error'));
	}, []);
    
	return (
		<div>
			<main>
				{stories.map((story) => {
					return (
						<div>
							<h1>{story.title}</h1>
							{/* <a href={`${story.urls[0].url}`} target='_blank'>
								more info
							</a>
							<img
								src={story.thumbnail.path + '.jpg'}
								alt='story-image'
							/> */}
						</div>
					);
				})}
			</main>
		</div>
	);
}

export default Story;