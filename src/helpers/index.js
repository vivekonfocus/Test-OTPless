export const loadOTPlessScript = () => {
	const script = document.createElement('script') 
	script.id = 'otpless-sdk' 
	script.type = 'text/javascript' 
	script.src = 'https://otpless.com/v2/auth.js' 
	script.setAttribute('data-appid', 'JESSTCVC6JD6LDPCKU05')
	document.body.appendChild(script) 
}

export const unloadOTPlessScript = () => {
	const script = document.getElementById('otpless-sdk') 
	
	if (script) {
		script.remove()
	}
}