var names = ["lion","cat","horse","dog"];
function getMessages() {
    var name = document.getElementById("uName").value;
    name = name.toString().toLowerCase().trim();
    if (name.length === 0) {
        document.getElementById("tID").innerHTML = "Please enter an animal name";
        document.getElementById("msg-img-id").hidden = true;
    } else {
        var flag = false;
        for (var i = 0; i < names.length; i++) {
            tName = names[i];
            tName = tName.toLowerCase();
            if (tName === name) {
                flag = true;
            }
        }
        if (flag) {
            var message = name + " is comming...";
            document.getElementById("tID").innerHTML = message.toUpperCase();
            document.getElementById("msg-img-id").hidden = false;
            document.getElementById("msg-img-id").src= "./images/"+name+".gif";
        } else {
            document.getElementById("tID").innerHTML = "Invalid Name";
            document.getElementById("msg-img-id").hidden = true;
        }
    }
}