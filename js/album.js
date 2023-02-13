let container = document.querySelector(`.album_open`);
let container_err = document.querySelector(`.row_err`);


let search = new URLSearchParams(window.location.search);
let i = search.get(`i`);
// готово! i это нужное нам число

let album = albums[i];

if(!album){
    container_err.innerHTML = `<div class="row" style="text-align: center; ustify-content: space-around;align-content: space-around;flex-direction: column-reverse">ERROR<br>Такой страницы не существует вернитесь назад с помощью кнопки, или редирект произведется автоматически через 5 секунд.</div>`;
    setTimeout(function() {
        window.location.pathname = `index.html`;  
    }, 5000);
}else{
        container.innerHTML += `
<div class="card mb-3">
                    <div class="row">
                        <div class="col-md-4 col-ms-12">
                            <img src="${album.img}" alt="" class="img-fluid rounded-start h-100">
                        </div>
                        <div class="col-md-8 col-ms-12">
                            <div class="card-body">
                                <h5 class="card-title">${album.title}</h5>
                                <p class="card-text">${album.description}</p>
                                <p class="card-text"><small class="text-muted">Выпущен в ${album.year} году</small></p>
                            </div>
                        </div>
                    </div>
                </div>
`

let playlist = document.querySelector(`.playlist`)
let tracks = album.tracks;

for(let j = 0; j < tracks.length; j++){
    let track = tracks[j];
    playlist.innerHTML += `
    <li class=" track list-group-item d-flex align-items-center mb-2">
                        <img src="${track.img}" alt="" class="me-3 img-track" height="42px">
                        <div>
                            <div>${track.title}</div>
                            <div class="text-secondary">${track.author}</div>
                            <div class="progress" style="height: 5px; width: 100%">
                                <div class="progress-bar" role="progressbar" style="width: 0%;"></div>
                            </div>
                        </div> 
                        
                        <div class=" time ms-auto">${track.time}</div>
                        <audio class="audio" src="${track.src}"></audio>
                    </li>
    `

}

function setupAudio() {
    let trackNodes = document.querySelectorAll(`.track`); 
    for (let i = 0; i < trackNodes.length; i++) { 
        let track = tracks[i]
        let node = trackNodes[i];
        let timeNode = node.querySelector(`.time`)
        let imgDefolt = node.querySelector(`.img-track`);
        let progressBar = node.querySelector(`.progress-bar`);
        let audio = node.querySelector(`.audio`); 
        node.addEventListener(`click`, function () {
            if (track.isPlaying) {
                track.isPlaying = false;
                audio.pause();
                imgDefolt.src="assets/pause.png";
            } else {
                track.isPlaying = true;
                audio.play();
                imgDefolt.src="assets/play.png";
                updateProgress()
            }
        });

function updateProgress() {
        let timeT = getTime(audio.currentTime);
        if(timeNode.innerHTML != timeT){
            timeNode.innerHTML = timeT;
        progressBar.style.width = audio.currentTime*100/audio.duration + `%`;
        }
        if (track.isPlaying) {
              requestAnimationFrame(updateProgress);
        }
        
      }
    }
    
}

setupAudio()
    function getTime(time){
        let currentSeconds = Math.floor(time).toFixed(0);
        let minutes = Math.floor(currentSeconds/60);
        let seconds = currentSeconds%60

        if(minutes < 10){
            minutes = `0` + minutes;
        }
        if(seconds < 10){
            seconds = `0` + seconds;
        }
        return `${minutes}:${seconds}`
    }
}
