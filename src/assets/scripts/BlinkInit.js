export function InitBlinkWidget() {
	if (typeof BlinkPayButton !== "undefined") {
		BlinkPayButton.init({
			username: "valuarchist",
			containerId: "blink-pay-button-container",
			themeMode: "light",
			language: "en",
			defaultAmount: 1000,
			supportedCurrencies: [
				{
					code: "sats",
					name: "sats",
					isCrypto: true,
				},
				{
					code: "USD",
					name: "USD",
					isCrypto: false,
				},
			],
			debug: false,
		});
	} else {
		// Try again in 100ms if BlinkPayButton isn't loaded yet
		setTimeout(InitBlinkWidget, 100);
	}
}
