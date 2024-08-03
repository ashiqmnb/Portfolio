function sendMail(){
    // e.preventDefault()
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };

    const serviceID = "service_0ajoaog";
    const templateID = "template_ms63a3n";

    emailjs
    .send(serviceID,templateID,params)
    .then((res)=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message send successfully");
    })
    .catch((err)=>console.log(err));
}




