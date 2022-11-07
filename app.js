function register(){
    console.log("register function");
    //store in a var the input text *document.getElementById()
    document.getElementById("txtTask").value;
    //display var in the items section *document.getElementById()
    let test=document.getElementById("txtTask").value;
    //let test="task";
    document.getElementById("Items").innerHTML += `<li>${test}</li>`;
    //document.getElementById("items").innerHTML+= you need + before = so it does not clear previous entry, but adds it under the previous input
    //clear the input
    document.getElementById("txtTask").value="";
}
