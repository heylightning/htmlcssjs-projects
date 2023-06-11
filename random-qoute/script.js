const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '25c4922b9bmsh7c2a00d08b662fdp1f86a4jsn04fbd6d35306',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(response => {
		document.getElementById("quoteTxt").innerHTML = response.content;
		document.getElementById("quoteWho").innerHTML = "~ " + response.originator.name;
    })
	.catch(err => console.error(err));




