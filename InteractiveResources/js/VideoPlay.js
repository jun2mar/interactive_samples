const videoPlay = document.querySelectorAll("#play_vid");
videoPlay.forEach( video => {
    
    video.addEventListener("click", (event) => {

        const id = event.target.id;

        const player28 = event.target.parentElement.parentElement.children[0]
        
        // console.log(player)

        if(id === "play_vid"){
            player28.play();
            video.innerHTML = '<span class="material-icons-outlined">pause</span>';
            event.target.classList.add("opacity");
            event.target.setAttribute("id", "pause_vid");
        }

        if(id === "pause_vid"){
            player28.pause();
            video.innerHTML = '<span class="material-icons-outlined">play_arrow</span>';
            event.target.classList.remove("opacity");
            event.target.setAttribute("id", "play_vid");
        }

        player28.onended = (event) => {
            player28.pause()
            player28.load()
            video.innerHTML = '<span class="material-icons-outlined">play_arrow</span>';
            event.target.nextElementSibling.children[0].setAttribute("id", "play_vid");
            event.target.nextElementSibling.children[0].classList.remove("opacity");
        }

    })

})