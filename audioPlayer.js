document.addEventListener('DOMContentLoaded', function () {
	const audioPlayer = document.getElementById('audioPlayer');
	audioPlayer.play().catch((error) => {
		console.error('Erreur lors de la lecture audio:', error);
	});
});
