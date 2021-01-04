

function changetheme(theme){
    let container = document.getElementById("main");
    container.removeAttribute("class");
    let mode = document.createAttribute("class")
    switch (theme){
        case "heaven":
            mode.value= "heavenmode";
            container.setAttributeNode(mode)
            break;
        case "hell":
            mode.value= "hellmode";
            container.setAttributeNode(mode)
            break;            

    }

    container.classList.add("main")
}

function toggleplayer(){
    let btn = document.getElementById("sound_img");
    let audio = document.getElementById("audio");
    let store = document.getElementById('store');
    let titlediv = document.getElementById("titlediv");
    let matslider = document.getElementById('matslider');
    let shadow = document.getElementById('invisible_shadow')
    store.removeAttribute("class")
    titlediv.removeAttribute("class")
    let disco = document.createAttribute("class");
    let matui = document.createAttribute("class");
    let titleui = document.createAttribute("class");
    if(btn.getAttribute("src") === "assets/pause.svg"){
        btn.src = "assets/play.svg"
        audio.play()
        disco.value= "dancemode";
        matslider.removeAttribute("class")
        titleui.value="playingtitlediv"
        matslider.style.width= "350px"
        matslider.style.height = "250px"
        shadow.width = "150"
        shadow.height = "70"
        store.setAttributeNode(disco)
        titlediv.setAttributeNode(titleui)
    }else{
        btn.src = "assets/pause.svg"
        audio.pause()
        matslider.removeAttribute("class")
        titlediv.removeAttribute("class")
        if(matslider && matslider.style){
            matslider.style.width= "100%"
            matslider.style.height = "320px"
            shadow.width = "120"
            shadow.height = "50"
        }

    }
    let newtitleui = document.createAttribute("class");
    matui.value = "mat"
    matslider.setAttributeNode(matui)
    //titlediv.setAttributeNode(newtitleui)
    titlediv.classList.add("titlediv")
    store.classList.add("store")

}


function listmerch(){
    let merch=[];
    let x;
    for (x=0; x<merch.length; x++) {
        let list = document.createElement('li');
        let divholder = document.createElement('div');

    }
}