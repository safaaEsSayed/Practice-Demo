//Task01

var tbody = document.getElementById("tbody");

var sendRequest = new XMLHttpRequest();

function getUserData() 
{
    sendRequest .onreadystatechange = function () 
    { 
    if (sendRequest .readyState == 4) 
    {
        if (sendRequest .status == 200)
        {
        var result = sendRequest .response;
        var user = JSON.parse(result);
        for(var i = 0; i < user.length ; i++)
        {
            var tr = generateNewElement("tr");
            var firstTd = generateNewElement("td");
            var secondTd = generateNewElement("td");
            var thirdTd = generateNewElement("td");

            firstTd.innerHTML = user[i].id;
            secondTd.innerHTML = user[i].name;
            thirdTd.innerHTML = user[i].email;
            tr.append(firstTd, secondTd, thirdTd);
            tbody.append(tr);
        }
        }
    }
    };
    sendRequest .open("get", "https://jsonplaceholder.typicode.com/users");
    sendRequest .send("");
}

function generateNewElement(tagName) 
{
  return document.createElement(tagName);
}





//Task02

var date = new Date();

var userName = document.getElementById("name");
var userPass = document.getElementById("password");

var paragraph = document.getElementById("paragraph");

function saveCookie()
{
    date.setDate(date.getDate() + 5);

    document.cookie = userName.value + " = " + userPass.value + "; expires = " + date;
}


function deleteCookies()
{
    date.setDate(date.getDate() - 1);

    document.cookie = userName.value + " = " + userPass.value + "; expires = " + date;
}


function getAllCookie()
{
    var cookies = showCookie();

    paragraph.innerHTML = cookies.split(",");
}

function showCookie()
{
        return document.cookie;
}


function getOneCookie()
{
    var cookies = showCookie();
    cookies = cookies.split("; ");

    var item ;

    for(var i = 0 ; i<cookies.length ; i++)
    {
        item = cookies[i].split("=");
        if (item[0]==userName.value)
        {
            paragraph.innerHTML = item ;
        }
    }
}


