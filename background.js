function playSound() {
	chrome.tabs.create({ url: 'audio.html', active: true }, (tab) => {
		setTimeout(() => {
			chrome.tabs.remove(tab.id);
		}, 1000);
	});
}

chrome.alarms.onAlarm.addListener(() => {
	playSound();
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === 'setInterval') {
		chrome.alarms.clear('metronome');
		chrome.alarms.create('metronome', {
			periodInMinutes: request.interval / 60,
		});
		sendResponse({ status: 'Intervalle défini' });
	} else if (request.action === 'stop') {
		chrome.alarms.clear('metronome');
		sendResponse({ status: 'Métronome arrêté' });
	}
	return true;
});
