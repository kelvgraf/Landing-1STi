setTimeout(() => document.body.classList.add('render'), 60);
imagesLoaded('.glitch__img', { background: true }, () => {
	document.body.classList.remove('loading');
	document.body.classList.add('imgloaded');
});

const glitchButterfly = document.querySelector('.glitch-butterfly');
const glitchSatellite = document.querySelector('.glitch-satellite');

function toggleGlitches(firstMs, secondMs) {
	setTimeout(() => {
		glitchButterfly.classList.add('glitch--hide');
		glitchSatellite.classList.remove('glitch--hide');
	}, firstMs)
	
	setTimeout(() => {
		glitchSatellite.classList.add('glitch--hide');
		glitchButterfly.classList.remove('glitch--hide');
	}, secondMs)
}

/** 
 * First change between butterfly and satellite
 */
toggleGlitches(800, 1200);

/** 
 * Loop changes between butterfly and satellite
 */
setInterval(() => {
	toggleGlitches(500, 900);
}, 4000)
