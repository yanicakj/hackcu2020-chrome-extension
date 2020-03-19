// document.addEventListener('DOMContentLoaded', function() {
//   var startPageButton = document.getElementById('startSharing');
//   startPageButton.addEventListener('click', function() {
//     console.log('hello');
//   }, false);
// }, false);

function hello() {
  // chrome.tabs.executeScript({
  //   file: 'alert.js'
  // }); 
  //console.log('hello!');
  alert('Starting sharing');

  let un = document.getElementById('un').value;
  let pw = document.getElementById('pw').value;
  let school = document.getElementById('school').value;
  let classs = document.getElementById('class').value;
  let studytype = document.getElementById('studytype').value;
  chrome.storage.sync.set({ "username": un }, function(){
      //alert('username is set to : ' + un);
      chrome.storage.sync.set({ "password": pw }, function(){
        //alert('password is set to : ' + pw);
        chrome.storage.sync.set({ "school": school }, function(){
          //alert('school is set to : ' + school);
          chrome.storage.sync.set({ "class": classs }, function(){
            //alert('school is set to : ' + school);
            chrome.storage.sync.set({ "studytype": studytype }, function(){
              //alert('school is set to : ' + school);
            });
          });
        });
      });
  });


}

//document.getElementById('startSharing').addEventListener('click', hello);

document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('startSharing');
  btn.addEventListener('click', hello);
  let un = '';
  let pw = '';
  let school = '';
  let classs = '';
  let studytype = '';
  chrome.storage.sync.get(['username','password','school','class','studytype'], function(items){
    un = items.username;
    pw = items.password;
    school = items.school;
    classs = items.class;
    studytype = items.studytype;
    //alert('un : ' + un + ', pw : ' + pw + ', school : ' + school);
    document.getElementById('un').value = un;
    document.getElementById('pw').value = pw;
    document.getElementById('school').value = school;
    document.getElementById('class').value = classs;
    document.getElementById('studytype').value = studytype;
  });
});









