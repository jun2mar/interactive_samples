// DECLARE THIS LINK INSIDE HTML BEFORE THE AUDIO PLAY JS SCRIPT
// var audiolink = "https://m.fyioc.com/Spanish1/Lesson28/";

var audioHolder = document.getElementById('audio_holder');
if (audioHolder === null){
    audioHolder = document.createElement("DIV");
    audioHolder.setAttribute("id", "audio_holder");
    document.body.appendChild(audioHolder);
};

const audio = document.querySelectorAll("#btnPlayTone");
audio.forEach(function(item, index) {

    let materialIcon = document.createElement("span");
    materialIcon.setAttribute("class", "material-icons d-flex");
    materialIcon.style.fontSize = audioFontSize;
    materialIcon.innerHTML = 'volume_up';
    item.appendChild(materialIcon);

    item.addEventListener("click", (event) => {

        // get the button id ( btnPause,  btnPlayTone)
        const id = event.target.id;
        
        // load audio file every click
        const audio_file28 = audiolink + event.target.getAttribute('data-audio')+'.mp3';
        audioLoad(audio_file28);

        // get audio id
        const audioPlay28 = document.getElementById("audioPlay");

        
        item.innerHTML = "";
        

        // audio play
        if(id === "btnPlayTone"){
            event.target.classList.add("playing");
            audioPlay28.play();

            materialIcon.innerHTML = 'pause';
            item.appendChild(materialIcon);

            event.target.setAttribute("id", "btnPause");
        }

        // audio pause
        if(id === "btnPause"){
            event.target.classList.remove("playing");
            audioPlay28.pause();
            
            materialIcon.innerHTML = 'volume_up';
            item.appendChild(materialIcon);

            event.target.setAttribute("id", "btnPlayTone");
        }
    
        // audio end
        audioPlay28.onended = (event) => {
            item.classList.remove("playing");
            audioPlay28.pause()
            
            materialIcon.innerHTML = 'volume_up';
            item.appendChild(materialIcon);
        }
    
    });

});

function audioLoad(audio_url){
    const audio_file28 = '<audio id="audioPlay" src="'+audio_url+'"></audio>';
    document.getElementById("audio_holder").innerHTML = audio_file28
}