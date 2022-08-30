console.log("Hello from Javasript");
const songList = [
    {
        imageLink: "./assets/out.jpg",
        title:"Going Out Tonight ",
        album:"Going Out Tonight ",
        duration:"3:21"
    },
    {
        imageLink: "./assets/nothappy.jpg",
        title:"They're not happy about me",
        album:"They're not happy about me",
        duration:"3:59"
    },
    {
        imageLink: "./assets/american.png",
        title:"Peacemaker",
        album:"American Idiot",
        duration:"3:25"
    },
    {
        imageLink: "./assets/father.jpg",
        title:"Graffitia",
        album:"Father of all...",
        duration:"3:20" 
    }
];

window.onload = function() {
    const songsWrapper = document.getElementById("songs-wrapper");
    // console.log(melodyComponent(1, songList[0]));
    songsWrapper.innerHTML="";
 
    for(let i = 0; i <songList.length; i++) {
        songsWrapper.innerHTML += melodyComponent(i+1, songList[i]);
    }
}

const melodyComponent = function (index, songInfo){
    return `<div class="melody">
    <span class="songs-nr">
        ${index}.
    </span>
    <img src="${songInfo.imageLink}" class="song-cover">
    <span class="song-title">
        ${songInfo.title}
    </span>
    <span class="song-album">
        ${songInfo.album}
    </span>
    <span class="song-duration">
        ${songInfo.duration}
    </span>
</div>`
}