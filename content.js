// content.js

console.log('window location: ');
console.log(window.location.toString());
console.log('window host: ');
console.log(window.location.host);

chrome.storage.sync.get(['username','password','school','class','studytype'], function(items){
	let un = items.username;
	let pw = items.password;
	let school = items.school;
	let classs = items.class;
	let studytype = items.studytype;
	if (un.length <= 0 || pw.length <= 0 || school.length <= 0 || classs.length <= 0 || studytype.length <= 0) {
		alert('Please populate HackCU Study Helper fields!');
	} else {
		send_post(un, pw, school, classs, studytype);
	}
});


function send_post(un1, pw1, school1, class1, studytype1) {
	
	var opts = {
		'link' : window.location.toString(),
		'host' : window.location.host,
		'hasedUser' : hashCode(un1),
		'school' : school1,
		'class' : class1,
		'workingOn' : studytype1,
		'timestamp' : getCurrentTimeUTC().toString()
	}

	//const url = 'http://localhost:3000/users';
	const url = 'https://34.66.6.27:3535/getdata';
	let xml = new XMLHttpRequest();
	xml.open('POST', url, true);
	xml.setRequestHeader("Content-Type", "application/json; charset = UTF-8");
	xml.onreadystatechange = function () {
	    if (xml.readyState == 4) {
	        console.log("Success!");
	     	// updateCharts()
	    }
	}
	xml.send(JSON.stringify(opts));
}


// function hashCode(s) {
//   return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0).toString();
// }


function getCurrentTimeUTC() {
    //RETURN:
    //      = number of milliseconds between current UTC time and midnight of January 1, 1970
    var tmLoc = new Date();
    //The offset is in minutes -- convert it to ms
    return tmLoc.getTime() + tmLoc.getTimezoneOffset() * 60000;
}


function hashCode(s) {
  var hash = 0, i, chr;
  if (s.length === 0) return hash;
  for (i = 0; i < s.length; i++) {
    chr   = s.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString();
}






















