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
	"Le courage n'est pas de ne jamais avoir peur, mais de choisir d'avancer malgré elle.",
	"La vie n'est pas un problème à résoudre, mais une réalité à expérimenter. - Søren Kierkegaard",
	'En temps de guerre, les grands leaders émergent non par leur pouvoir, mais par leur capacité à inspirer.',
	"La motivation est ce qui vous fait démarrer, l'habitude est ce qui vous fait continuer. - Jim Ryun",
	"Le véritable courage, c'est de garder sa sérénité malgré les tempêtes.",
	"La vie est courte, mais elle offre toujours une seconde chance: elle s'appelle demain.",
	"Les victoires se remportent d'abord dans l'esprit avant de se concrétiser sur le champ de bataille.",
	'La motivation ne dure pas toujours, mais si vous faites en sorte de la raviver chaque jour, elle peut transformer votre vie.',
	"Le courage, c'est savoir dire non quand il le faut et oui quand il le faut vraiment.",
	"La vie n'est pas mesurée par le nombre de respirations que nous prenons, mais par les moments qui nous coupent le souffle.",
	"En guerre comme en paix, la plus grande des batailles est celle que l'on mène contre ses propres peurs.",
	'La motivation est le carburant qui allume le feu de la réussite.',
	"Le courage ne consiste pas à ne jamais tomber, mais à se relever à chaque fois qu'on tombe.",
	'Vivez comme si vous deviez mourir demain. Apprenez comme si vous deviez vivre éternellement. - Mahatma Gandhi',
	'En temps de guerre, les hommes révèlent leur véritable nature.',
	"La motivation vous pousse à commencer, l'habitude vous pousse à persévérer, et la passion vous emmène jusqu'au bout.",
	"Le courage d'affronter l'inconnu est le premier pas vers la véritable liberté.",
	"La vie est une aventure audacieuse ou elle n'est rien du tout. - Helen Keller",
	"En guerre, le plus grand ennemi est souvent l'ignorance et l'intolérance.",
	'Chaque journée est une nouvelle page de votre histoire, écrivez-la avec détermination et courage.',
];
function getRandomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
}

document.getElementById('quote').textContent = getRandomQuote();
