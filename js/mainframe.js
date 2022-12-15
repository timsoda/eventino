let generalradio = '0';
function portfoliobox(ele) {
    document.getElementById("editarea").contentEditable = "true";
}
function multibg(vvtm) {
    let allbg = [
        {"id":"1","carouselbacground": "linear-gradient(to right, #0f0c29, #302b63, #24243e)"},
        {"id":"2","carouselbacground": "linear-gradient(to right, #00b09b, #96c93d)"},
        {"id":"3","carouselbacground": "linear-gradient(to right, #870000, #190a05)"},
        {"id":"4","carouselbacground": "linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))"},
        {"id":"5","carouselbacground": "radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% )"},
        {"id":"6","carouselbacground": "linear-gradient(to right, #ff6e7f, #bfe9ff)"},
        {"id":"7","carouselbacground": "linear-gradient(to right, #ff6e7f, #bfe9ff)"}
      ];
         
      
      let dmbu = allbg.filter(vlfp => vlfp.id == vvtm); 
      let id = dmbu.map(suue => suue.id); 
      let carouselbacground = dmbu.map(suue => suue.carouselbacground);   

       let carouselis =  document.getElementById("carousel-inner-scroll");
       carouselis.style.background = carouselbacground;
       generalradio = vvtm;
    //carousel-inner-scroll
    

//   for (let i = 0; i < allbg.length; i++) {
//       //const element = array[i];
//       document.getElementById("carousel-inner-scroll").innerHTML += ` <div class="carousel-item" style="background-image: ${allbg[i].carouselbacground}">
//       <div class="carousel-container">
//         <div class="container">
//         <img src="assets/img/team/peterobi.png" width="150px" alt="Peter Obi">
//           <h2 class="animate__animated animate__fadeInDown">Peter Obi</h2>
//           <p class="animate__animated animate__fadeInUp">Dear Nigerians. I am here to inform you all that I will be aspiring for the post of President of Nigeria in 2023. -PO</p>
//           <a href="javascript:;" onclick="portfoliobox('3948398894')" class="btn-get-started animate__animated animate__fadeInUp scrollto">Select & Edit</a>
//         </div>
//       </div>
//     </div>`;   
//   }

        // junenoteglobal.forEach(function (item, index, array) {
        //     document.getElementById("demo3").innerHTML += index+" id "+item.id+" - "+item.name+"<br>";
        //     if(item.name == "Amaka"){
        //         op1 = index;
        //         ido1 = item.id;
        //     }
        //     if(item.name == "James"){
        //         op2 = index;
        //         ido2 = item.id;

        //     }
        // });
}
function downloadimage(params) {
    //document.getElementById("editarea").contentEditable = "false";
    window.scrollTo(0, 0);
    html2canvas(document.getElementById("carousel-inner-scroll")).then(function (canvas){
        //1st method
        //console.log(canvas.toDataURL("image/jpeg", 1));

        //2nd method
        // let image = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        // window.location.href= image;

        //3rd method
        let a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg");
        a.download = 'globa.jpg'
        a.click();
    });
}