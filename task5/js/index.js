// TAKE USER INFORMATION FROM SEARCH LOCATION

// نشيل علامة "?" من أول الـ query string
var query = location.search.substring(1); 

// نقسم المعطيات حسب "&"
var userInfo = query.split("&");

// نجيب القيم من كل جزء
var userName = userInfo[0].split("=")[1];
var userAge = userInfo[1].split("=")[1];
var userGender = userInfo[2].split("=")[1];
var userFavColor = userInfo[3].split("=")[1];

console.log(userName, userAge, userGender, userFavColor);

// DISPLAY MESSAGE FOR USER
document.getElementById('containerInfoUser').innerHTML = `
  <img src="images/${userGender}.png" alt="${userGender}" style="width:100px;height:auto;">
  <span style="color:${userFavColor}; font-weight:bold; font-size:20px;">
    WELCOME, ${userName.toUpperCase()}!
  </span>
`;
