document.addEventListener('DOMContentLoaded', function () {
	const intervalInput = document.getElementById('interval');
	const unitSelect = document.getElementById('unit');
	const startButton = document.getElementById('start');
	const stopButton = document.getElementById('stop');

	startButton.addEventListener('click', function () {
		const interval = parseInt(intervalInput.value) * parseInt(unitSelect.value);
		chrome.runtime.sendMessage({ action: 'setInterval', interval: interval }, function (response) {
			console.log(response.status);
		});
	});

	stopButton.addEventListener('click', function () {
		chrome.runtime.sendMessage({ action: 'stop' }, function (response) {
			console.log(response.status);
		});
	});
});
