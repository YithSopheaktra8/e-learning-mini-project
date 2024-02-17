/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				logo : ["Fontdiner Swanky", "cursive"]
			},
			colors :{
				primary : "#0D53CF",
				background : {
					white : "#FDFDFD",
					blue : "#E7EEFA"
				},
				text : {
					black : "#343434",
					black80 : "#484848",
					black10 : "#717171",
				}
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
