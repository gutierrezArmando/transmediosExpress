const  mysql = require('mysql');

const dbContection = mysql.createConnection({
    // host: 'juridicosoto.sytes.net',
    host: 'remotemysql.com',
    user: 'WRbQnfMbjg',
    password: 'aKrTg2Jwfb',
    database: 'WRbQnfMbjg'
});

module.exports = dbContection;

/*
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
var urls=[];
setInterval(function(){
	if($){
		var url = $("#mouseover-overlay:not(:empty)").find("#thumbnail").attr('src');
		if(urls.indexOf(url)<0){
			var a = $("<a>").attr("href",url).attr("download", "img.png").appendTo("body");
			a[0].click();
			urls.push(url);
		}
	}
},1000);
*/