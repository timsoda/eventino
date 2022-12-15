let generalradio = '0';
let allbg = [
    {"id":"1","carouselbacground": "linear-gradient(to right, #0f0c29, #302b63, #24243e)"},
    {"id":"2","carouselbacground": "linear-gradient(to right, #00b09b, #96c93d)"},
    {"id":"3","carouselbacground": "linear-gradient(to right, #870000, #190a05)"},
    {"id":"4","carouselbacground": "linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))"},
    {"id":"5","carouselbacground": "radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% )"},
    {"id":"6","carouselbacground": "linear-gradient(to right, #2C5364, #203A43, #0F2027)"},
    {"id":"7","carouselbacground": "linear-gradient(to right, #5a3f37, #2c7744)"},
    {"id":"8","carouselbacground": "linear-gradient(to right, #FFE000, #799F0C, #00416A)"},
    {"id":"9","carouselbacground": "linear-gradient(to right, #0099f7, #f11712)"},
    {"id":"10","carouselbacground": "linear-gradient(to right, #ff9966, #ff5e62)"},
    {"id":"11","carouselbacground": "linear-gradient(to right, #F27121, #E94057, #8A2387)"},
    {"id":"12","carouselbacground": "linear-gradient(to right, #93291E, #ED213A)"},
    {"id":"13","carouselbacground": "linear-gradient(to right, #4b134f, #c94b4b)"},
    {"id":"14","carouselbacground": "linear-gradient(to right, #605C3C, #3C3B3F)"},
    {"id":"15","carouselbacground": "linear-gradient(to right, #F2C94C, #F2994A)"},
    {"id":"16","carouselbacground": "linear-gradient(to right, #1D2671, #C33764)"},
    {"id":"17","carouselbacground": "linear-gradient(to right, #6f0000, #200122)"},
    {"id":"18","carouselbacground": "linear-gradient(to right, #021B79, #0575E6)"},
    {"id":"19","carouselbacground": "linear-gradient(to right, #237A57, #093028)"},
    {"id":"20","carouselbacground": "linear-gradient(to right, #3B4371, #F3904F)"},
    {"id":"21","carouselbacground": "linear-gradient(to right, #004e92, #000428)"},
    {"id":"22","carouselbacground": "linear-gradient(to right, #734b6d, #42275a)"},
    {"id":"23","carouselbacground": "linear-gradient(to right, #4CA1AF, #2C3E50)"},
    {"id":"24","carouselbacground": "linear-gradient(to right, #A43931, #1D4350)"},
    {"id":"25","carouselbacground": "linear-gradient(to right, #66ff00, #a80077)"},
    {"id":"26","carouselbacground": "linear-gradient(to right, #2C7744, #5A3F37)"},
    {"id":"27","carouselbacground": "linear-gradient(to right, #AA3A38, #2F7336)"},
    {"id":"28","carouselbacground": "linear-gradient(to right, #BE5869, #403A3E)"},
    {"id":"29","carouselbacground": "linear-gradient(to right, #F0CB35, #C02425)"},
    {"id":"30","carouselbacground": "linear-gradient(to right, #1F1C18, #8E0E00)"},
    {"id":"31","carouselbacground": "linear-gradient(to right, #8DC26F, #76b852)"},
    {"id":"32","carouselbacground": "linear-gradient(to right, #512DA8, #673AB7)"},
    {"id":"33","carouselbacground": "linear-gradient(to top, #181818, #BA8B02)"},
    {"id":"34","carouselbacground": "linear-gradient(to top, #141517, #6A9113)"},
    {"id":"35","carouselbacground": "linear-gradient(to top, #dc2430, #7b4397)"},
    {"id":"36","carouselbacground": "linear-gradient(to top, #267871, #136a8a)"},
    {"id":"37","carouselbacground": "linear-gradient(to top, #001510, #00bf8f)"},
    {"id":"38","carouselbacground": "linear-gradient(to top, #fcb045, #fd1d1d, #833ab4)"},
    {"id":"39","carouselbacground": "linear-gradient(to top, #2a0845, #6441A5)"},
    {"id":"40","carouselbacground": "linear-gradient(to top, #0b8793, #360033)"},
    {"id":"41","carouselbacground": "linear-gradient(to top, #00223E, #FFA17F)"},
    {"id":"42","carouselbacground": "linear-gradient(to top, #f83600, #fe8c00)"},
    {"id":"43","carouselbacground": "linear-gradient(to top, #061161, #780206)"},
    {"id":"44","carouselbacground": "linear-gradient(to top, #e74c3c, #000000)"},
    {"id":"45","carouselbacground": "linear-gradient(to top, #190A05, #870000)"},
    {"id":"46","carouselbacground": "linear-gradient(to top, #7a2828, #a73737)"},
    {"id":"47","carouselbacground": "linear-gradient(to top, #480048, #C04848)"},
    {"id":"48","carouselbacground": "linear-gradient(to top, #480048, #C04848)"},
    {"id":"49","carouselbacground": "linear-gradient(to top, #61045F, #AA076B)"},
    {"id":"50","carouselbacground": "linear-gradient(to top, #EA384D, #D31027)"},
    {"id":"51","carouselbacground": "linear-gradient(to top, #b31217, #e52d27)"},
    {"id":"52","carouselbacground": "linear-gradient(to top, #4e4376, #2b5876)"},
    {"id":"53","carouselbacground": "linear-gradient(to top, #94716B, #B79891)"},
    {"id":"54","carouselbacground": "linear-gradient(to top, #292E49, #536976)"},
    {"id":"55","carouselbacground": "linear-gradient(to top, #6FB1FC, #4364F7, #0052D4)"}
  ];
  rotatebg();
function turndirection(params) {
    let watchbg = document.getElementById("carousel-inner-scroll").style.background;
    if(params == "left"){
        if (watchbg.includes("to right")) {
            watchbg = watchbg.replace("to right", "to left");
        }else if(watchbg.includes("to top")){
            watchbg = watchbg.replace("to top", "to left");
        }else if(watchbg.includes("to bottom")){
            watchbg = watchbg.replace("to bottom", "to left");
        }
    }else if(params == "right"){
        if (watchbg.includes("to left")) {
            watchbg = watchbg.replace("to left", "to right");
        }else if(watchbg.includes("to top")){
            watchbg = watchbg.replace("to top", "to right");
        }else if(watchbg.includes("to bottom")){
            watchbg = watchbg.replace("to bottom", "to right");
        }
    }else if(params == "top"){
        if (watchbg.includes("to left")) {
            watchbg = watchbg.replace("to left", "to top");
        }else if(watchbg.includes("to right")){
            watchbg = watchbg.replace("to right", "to top");
        }else if(watchbg.includes("to bottom")){
            watchbg = watchbg.replace("to bottom", "to top");
        }
    }else if(params == "bottom"){
        if (watchbg.includes("to left")) {
            watchbg = watchbg.replace("to left", "to bottom");
        }else if(watchbg.includes("to right")){
            watchbg = watchbg.replace("to right", "to bottom");
        }else if(watchbg.includes("to top")){
            watchbg = watchbg.replace("to top", "to bottom");
        }
    }
    
    document.getElementById("carousel-inner-scroll").style.background = watchbg; 
}
function rotatebg() {
    var CHANGEBG = '';
    allbg.forEach(function (item, index, array) {
        CHANGEBG += `<button class="btn" style="background: ${item.carouselbacground}; margin:2px; color:white;" onclick="multibg('${item.id}') ">&nbsp;&nbsp;</button>`;
    });

    document.getElementById("backgroundrotate").innerHTML = CHANGEBG;
}
function portfoliobox(ele) {
    if(ele == "1"){
        document.getElementById("editarea").innerHTML = "...";
    }
    document.getElementById("editarea").contentEditable = "true";
    document.getElementById("stickeredit").style.display = "none";
    document.getElementById("stickereditr").style.display = "none";
    document.getElementById("stickerpast").style.display = "none";
    document.getElementById("stickerdownload").style.display = "none";
    document.getElementById("stickeragain").style.display = "none";
    document.getElementById("stickerpastr").style.display = "none";
    document.getElementById("stickerdone").style.display = "inline";
}
function donecontentedit() {
    document.getElementById("stickeredit").style.display = "none";
    document.getElementById("stickereditr").style.display = "inline";
    document.getElementById("stickerpast").style.display = "none";
    document.getElementById("stickerdone").style.display = "none";
    document.getElementById("stickeragain").style.display = "none";
    document.getElementById("stickerpastr").style.display = "none";
    document.getElementById("stickerdownload").style.display = "inline";
    document.getElementById("editarea").contentEditable = "false";
}
document.getElementById("editarea").addEventListener("paste", function(e) {
    e.preventDefault();
    var text = e.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text.nl2br());
});
async function pasttocontent(ele) {
    document.getElementById("stickeredit").style.display = "none";
    document.getElementById("stickereditr").style.display = "inline";
    document.getElementById("stickerdone").style.display = "inline";
    document.getElementById("stickerdownload").style.display = "none";
    document.getElementById("stickeragain").style.display = "none";
    
    let editarea = document.getElementById("editarea");
    const text = await navigator.clipboard.readText();
    if(myTrim(text).length > 3){
        if(ele == "1"){
            document.getElementById("stickerpast").style.display = "none";
            document.getElementById("stickerpastr").style.display = "inline";
            editarea.innerHTML =  text.nl2br();
        }else if(ele == "2"){
            editarea.innerHTML += `<br><br>${text.nl2br()}`;
        }
    }else{
        editarea.innerHTML = "Nothing coppied..."
    }
}
function redoagain() {
    document.getElementById("stickeredit").style.display = "inline";
    document.getElementById("stickereditr").style.display = "none";
    document.getElementById("stickerpast").style.display = "none";
    document.getElementById("stickerdownload").style.display = "none";
    document.getElementById("stickerdone").style.display = "none";
    document.getElementById("stickeragain").style.display = "none";
    document.getElementById("stickerpastr").style.display = "none";
    document.getElementById("commenter").value = ""
    document.getElementById("commenter").removeAttribute("readonly");
    document.getElementById("editarea").innerHTML = `Click Edit To Write Here...`;
}
function multibg(vvtm) { 
      let dmbu = allbg.filter(vlfp => vlfp.id == vvtm); 
      let id = dmbu.map(suue => suue.id); 
      let carouselbacground = dmbu.map(suue => suue.carouselbacground);   

       let carouselis =  document.getElementById("carousel-inner-scroll");
       carouselis.style.background = carouselbacground;
       generalradio = vvtm;
}
function downloadimage() {
    document.getElementById("editarea").style.color = "white";
    let commenter = document.getElementById("commenter").value;
    if(myTrim(commenter).length > 1){
        document.getElementById("editarea").innerHTML += "<br><br> ~ "+myTrim(commenter);
    }
    document.getElementById("editarea").contentEditable = "false";
    window.scrollTo(0, 0);
    html2canvas(document.getElementById("carousel-inner-scroll")).then(function (canvas){
        let a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg");
        a.download = 'PeterObi.jpg';
        a.click();
    });
    document.getElementById("stickeredit").style.display = "none";
    document.getElementById("stickereditr").style.display = "none";
    document.getElementById("stickerpast").style.display = "none";
    document.getElementById("stickerpastr").style.display = "none";
    document.getElementById("stickerdownload").style.display = "none";
    document.getElementById("stickerdone").style.display = "none";
    document.getElementById("commenter").setAttribute("readonly", "readonly");
    document.getElementById("stickeragain").style.display = "inline";
}
String.prototype.nl2br = function(){
    return this.replace(/\n/g, "<br />");
}
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
  }