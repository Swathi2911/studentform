
var names = document.getElementById("name")
var age = document.getElementById("age")
var gender = document.getElementById("gender")
var course = document.getElementById("course")
var email = document.getElementById("email")
var savebtn = document.getElementById("savebtn")
savebtn.addEventListener("click", function () {

    var t2 = document.getElementById("t2")
    // create row
    var row = document.createElement("tr")
    //create name-column
    var namecol = document.createElement("td")
    namecol.textContent = names.value
    row.appendChild(namecol)
    //create age-col
    var agecol = document.createElement("td")
    agecol.textContent = age.value
    row.appendChild(agecol)
    //create course-col
    var coursecol = document.createElement("td")
    coursecol.textContent = course.value
    row.appendChild(coursecol)
    //email-col
    var emailcol = document.createElement("td")
    emailcol.textContent = email.value
    row.appendChild(emailcol)
    //save button
    var btncol = document.createElement("td")
    var delbtn = document.createElement("button")
    delbtn.textContent = "Delete"
    delbtn.style.backgroundColor = "red"
    delbtn.style.color = "white"
    delbtn.addEventListener("click", function () {
        t2.removeChild(row)
    })
    btncol.appendChild(delbtn);
    row.appendChild(btncol)
    //append new row into t2
    t2.appendChild(row)
    name.value = "";
    age.value = "";
    gender.value = "";
    course.value = "";
    email.value = "";


})
