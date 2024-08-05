document.addEventListener('DOMContentLoaded', function () {
	const audioPlayer = document.getElementById('audioPlayer');
	audioPlayer.play().catch((error) => {
		console.error('Erreur lors de la lecture audio:', error);
	});
});

const quotes = [
	"Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte. - Winston Churchill",
	"La seule façon de faire du bon travail est d'aimer ce que vous faites. - Steve Jobs",
	"Croyez en vous-même et en tout ce que vous êtes. Sachez qu'il y a quelque chose en vous qui est plus grand que tout obstacle. - Christian D. Larson",
	"Le meilleur moyen de prédire l'avenir est de le créer. - Peter Drucker",
	'Chaque jour est une nouvelle chance de changer votre vie.',
	"La persévérance n'est pas une longue course ; c'est beaucoup de petites courses une après l'autre. - Walter Elliot",
	'Le plus grand plaisir dans la vie est de réaliser ce que les autres vous pensent incapable de réaliser.',
	"Votre temps est limité, ne le gâchez pas en menant une existence qui n'est pas la vôtre. - Steve Jobs",
	'Les défis sont ce qui rend la vie intéressante et les surmonter est ce qui donne du sens à la vie. - Joshua J. Marine',
	"N'attendez pas que les conditions soient parfaites pour commencer. Commencez là où vous êtes, avec ce que vous avez.",
	"Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme. - Winston Churchill",
	"La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui. - Franklin D. Roosevelt",
	"Chaque pas compte sur le chemin de vos rêves. Continuez d'avancer, même lentement.",
	"La vie est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre. - Albert Einstein",
	'Les obstacles sont ces choses effrayantes que vous voyez lorsque vous détournez les yeux de votre objectif. - Henry Ford',
	"Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur. - Nelson Mandela",
	'Soyez le changement que vous voulez voir dans le monde. - Mahatma Gandhi',
	"La motivation vous fait démarrer. L'habitude vous fait continuer.",
	"N'ayez pas peur d'échouer. Ayez peur de ne pas essayer.",
	"Chaque jour est une nouvelle opportunité d'améliorer votre vie. Saisissez-la.",
	"Le secret pour aller de l'avant est de commencer. - Mark Twain",
];

function getRandomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
}

document.getElementById('quote').textContent = getRandomQuote();
