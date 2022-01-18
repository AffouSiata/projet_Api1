fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": "ea9e0c289fmshae3721d5597ea61p167b6djsn20b45cd65169"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});