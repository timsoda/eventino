let guestLF = document.querySelector("#guestLF");
let guestPix = document.querySelector("#ivm_add");
guestLF.addEventListener("change", function(){
    let file = this.files[0];
    if(file){
        let reader = new FileReader();
        reader.addEventListener("load", function(){
            guestPix.src = `${this.result}`; 
        });
        reader.readAsDataURL(file);
    }else{
        guestPix.src = "assets/img/add.png" ;  
    }
});
document.getElementById('ivm_add').addEventListener("click", function(){
    guestLF.click();
});

document.getElementById('guestName').addEventListener("input", function(){
    let guestName = document.getElementById('guestName').value;
    let guest_igar = document.getElementById('ivm_igar');
    //if(guestName.length == 14){
        if(guestName.length == 0){
            guest_igar.innerHTML = "Your Name Here";
        }else{
            guest_igar.innerHTML = guestName;
        }
        
});



document.getElementById("downloadIV").addEventListener("click", function(){
    let guestName = document.getElementById('guestName').value;
    let guestPic = document.getElementById("ivm_add").src;
    
   
    if(guestName.length > 2 && guestPic.includes("data:")){
    window.scrollTo(0, 0);
    html2canvas(document.getElementById("doul")).then(function (canvas){
        let a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg");
        a.download = 'ObidientSummit.jpg';
        a.click();
    });
    }else{
        alert("Image and Name Requred")
    }
});