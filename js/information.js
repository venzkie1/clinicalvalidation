window.onload=function(){//from ww  w . j  a  va2s. c  o  m
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("birth")[0].setAttribute('max', today);
        }
// validate form inputs before submitting data
function validateForm()
{
    let name = document.getElementById(`name`).value;
    let age = document.getElementById(`age`).value;
    let address = document.getElementById(`address`).value;
    let email = document.getElementById(`email`).value;
    let mobile = document.getElementById(`mobile`).value;

    let birth = document.getElementById(`birth`).value;

    // let gender = document.getElementById(`gender`).value;
    let text = document.getElementById(`text`).value;
    

    if(name == "")
    {
        alert("Name is required");
        return false;
    }

    if(age == "")
    {
        alert(`Age is required`);
        return false;
    }
    else if (age < 1)
    {
        alert(`Please input a valid age`);
        return false;
    }

    if(address =="")
    {
        alert(`Address is required`);
        return false;
    }
    if(email =="")
    {
        alert(`Email is required`)
        return false;
    }
    else if(!email.includes("@"))
    {
        alert(`Invalid email address`);
        return false;
    }
    if(mobile =="")
    {
        alert("Mobile Number is required");
        return false;
    }
    if(birth =="")
    {
        alert(`Please input date of birth`);
        return false;
    }

    if(text == "")
    {
        alert(`Question taking medication is required`);
        return false;
    }
    return true;
}


// function to show data
function showData()
{
    let peopleList;
    if(localStorage.getItem("peopleList") == null)
    {
        peopleList = [];
    }
    else
    {
        peopleList = JSON.parse(localStorage.getItem(`peopleList`))
    }

    let html = "";

    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.gender + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.mobile + "</td>";
        html += "<td>" + element.birth + "</td>";
        html += "<td>" + element.medHistory + "</td>";
        html += "<td>" + element.currSymptoms + "</td>";
        html += "<td>" + element.text + "</td>";
        html += '<td><button onclick="deleteData('+index+')" class="btn btn-danger">Delete</button><button onclick="updateData('+index+')" class="btn btn-warning m-2">Edit</button></td>'
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}
// loads all data when document or page loads
document.onload = showData();

// function to add data

function AddData()
{
    // if form validate
    if(validateForm() == true)
    {
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        // let gender = document.getElementById("gender").value;
        let address = document.getElementById("address").value;
        let email = document.getElementById("email").value;
        let mobile = document.getElementById("mobile").value;
        let birth = document.getElementById("birth").value;
        var gender = document.getElementsByName('gender');
        var genderData = '';
        for(i = 0; i < gender.length; i++) {
            if(gender[i].checked) {
                genderData += gender[i].value;
            }
        }
        var checkboxes = document.getElementsByName('medHistory');
        var medHistory = [];
        // looping through all checkboxes
        for (var i = 0; i < checkboxes.length; i++) {
            if(checkboxes[i].checked)
            {
                medHistory.push(checkboxes[i].value);
            }
        }
        


        let currSymptoms = document.getElementById("currSymptoms").value;
        let text = document.getElementById("text").value;

        let peopleList;
        if(localStorage.getItem("peopleList") == null)
        {
            peopleList = [];
        }
        else
        {
            peopleList = JSON.parse(localStorage.getItem(`peopleList`))
        }

        peopleList.push({
            name : name,
            age : age,
            gender : genderData,
            address : address,
            email : email,
            mobile : mobile,
            birth : birth,
            medHistory : medHistory,
            currSymptoms : currSymptoms,
            text : text,
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        document.getElementById(`name`).value = "";
        document.getElementById(`age`).value = "";
        // document.getElementById(`gender`).value = "";
        document.getElementById(`address`).value = "";
        document.getElementById(`email`).value = "";
        document.getElementById(`mobile`).value = "";
        document.getElementById(`birth`).value = "";
        // document.getElementById(`medHistory`).value = "";
        document.getElementById(`currSymptoms`).value = "";
        document.getElementById(`text`).value = "";

        var checkboxes = document.getElementsByName('medHistory');

       
        // looping through all checkboxes
        // for (var i = 0; i < checkboxes.length; i++) {
        // checkboxes[i].checked = false;
        
        // }
        // uncheck radio btn after submit
        var get= document.getElementsByName('gender');
        for(var i= 0; i<get.length; i++){
            get[i].checked= false;
        }

        // uncheck checkboxes after submit
        var get= document.getElementsByName('medHistory');
        for(var i= 0; i<get.length; i++){
            get[i].checked= false;
        }
    }
}

// function to delete data from local storage
function deleteData(index)
{
    let peopleList;
    if(localStorage.getItem("peopleList") == null)
        {
            peopleList = [];
        }
        else
        {
            peopleList = JSON.parse(localStorage.getItem(`peopleList`));
        }

        peopleList.splice(index, 1);
        localStorage.setItem(`peopleList`, JSON.stringify(peopleList));
        showData();
}

// function to update/edit data in local storage
function updateData(index)
{
    // submit button will hide and update button will show for updating of data
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    let peopleList;
    if(localStorage.getItem("peopleList") == null)
        {
            peopleList = [];
        }
        else
        {
            peopleList = JSON.parse(localStorage.getItem(`peopleList`));
        }
        
        document.getElementById("name").value = peopleList[index].name;
        document.getElementById("age").value = peopleList[index].age;
        // document.getElementById("gender").value = peopleList[index].gender;
        document.getElementById("address").value = peopleList[index].address;
        document.getElementById("email").value = peopleList[index].email;
        document.getElementById("mobile").value = peopleList[index].mobile;
        document.getElementById("birth").value = peopleList[index].birth;
        // document.getElementById("medHistory").value = peopleList[index].medHistory;
        document.getElementById("currSymptoms").value = peopleList[index].currSymptoms;
        document.getElementById("text").value = peopleList[index].text;

        const gender = document.getElementsByName("gender");
        for(var i= 0; i<gender.length; i++){
            if (peopleList[index].gender === gender[i].value) {
                gender[i].checked= true;
            }
        }

        let medHistoryData = peopleList[index].medHistory;
        var get= document.getElementsByName('medHistory');
        for(var i= 0; i < get.length; i++){
            if (medHistoryData.includes(get[i].value)) {
                get[i].checked = true;
            }
        }
        document.querySelector("#Update").onclick = function(){
            if(validateForm() == true)
            {
                peopleList[index].name = document.getElementById("name").value;
                peopleList[index].age = document.getElementById("age").value;
                // peopleList[index].gender = document.getElementById("gender").value;
                peopleList[index].address = document.getElementById("address").value;
                peopleList[index].email = document.getElementById("email").value;
                peopleList[index].mobile = document.getElementById("mobile").value;
                peopleList[index].birth = document.getElementById("birth").value;
                // peopleList[index].medHistory = document.getElementById("medHistory").value;
                peopleList[index].currSymptoms = document.getElementById("currSymptoms").value;
                peopleList[index].text = document.getElementById("text").value;
                
                var gender = document.getElementsByName('gender');
                var genderData = '';
                for(i = 0; i < gender.length; i++) {
                    if(gender[i].checked) {
                        genderData += gender[i].value;
                    }
        
                }
                peopleList[index].gender = genderData;

                var checkboxes = 
                document.getElementsByName('medHistory');
                
                var medHistory = [];
        
                for (var i = 0; i < checkboxes.length; i++) {
                    if (checkboxes[i].checked) {
                        medHistory.push(checkboxes[i].value) 
                    }
                }
                peopleList[index].medHistory = medHistory;
                localStorage.setItem("peopleList", JSON.stringify(peopleList));

                showData();

                document.getElementById("name").value = "";
                document.getElementById("age").value = "";
                // document.getElementById("gender").value = "";
                document.getElementById("address").value = "";
                document.getElementById("email").value = "";
                document.getElementById("mobile").value = "";
                document.getElementById("birth").value = "";
                // document.getElementById("medHistory").value = "";
                document.getElementById("currSymptoms").value = "";
                document.getElementById("text").value = "";
                // uncheck after submit
                
                var get= document.getElementsByName('gender');
                for(var i= 0; i<get.length; i++){
                    get[i].checked= false;
                }
        
                // uncheck checkboxes after submit
                var get= document.getElementsByName('medHistory');
                for(var i= 0; i<get.length; i++){
                    get[i].checked= false;
                }
                
                // update button will hide and submit button will show
                document.getElementById("Submit").style.display = "block";
                document.getElementById("Update").style.display = "none";
            }
        }
}


    function setDisable(){
        let get = document.getElementById('text');
        get.setAttribute('disabled', true);
        }

    function setEnable(){
    let get = document.getElementById('text');
    get.disabled = false;
    }
            