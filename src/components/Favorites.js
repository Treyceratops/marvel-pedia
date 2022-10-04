import React from 'react';

function Favorites({ favorites }) {
    console.log('faaaaaaave', favorites)
    return (
			<div>
				<h1>Favorites</h1>
				<div>
					{favorites.map((favorite) => (
						<div key={favorite.id}>
							<h4>{favorite.name}</h4>
							<img
								src={favorite.thumbnail.path + '.jpg'}
								alt='favorite-image'
							/>
							<br />
							<a href={`${favorite.urls[0].url}`} target='_blank'>
								more info
							</a>
							<br />
                            {/* <button onClick={() => }>x</button> */}
						</div>
					))}
				</div>
			</div>
		);
}

export default Favorites;