async function getsongs() {
  let x = await fetch("http://127.0.0.1:3000/songs/");
  let recive = await x.text();
  let div1 = document.createElement("div");
  div1.innerHTML = recive;
  let aa = div1.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < aa.length; index++) {
    const element = aa[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href);
    }
  }
  return songs;
}
function insertName(name){
    let a= document.querySelector(".song-name-1");
    a.innerHTML=name;
    console.log(name);
}
function songInfo(songNmaeArr){

    let span=document.createElement("span");
    span.innerHTML="";
    span.className="song-name-1";
    document.querySelector(".song-info").append(span);

    document.querySelector(".s0").addEventListener("click",function(){
        insertName(songNmaeArr[0]);
      })
    document.querySelector(".s1").addEventListener("click",function(){
        insertName(songNmaeArr[1]);
      })
    document.querySelector(".s2").addEventListener("click",function(){
        insertName(songNmaeArr[2]);
      })
    document.querySelector(".s3").addEventListener("click",function(){
        insertName(songNmaeArr[3]);
      })
    document.querySelector(".s4").addEventListener("click",function(){
        insertName(songNmaeArr[4]);
      })
    document.querySelector(".s5").addEventListener("click",function(){
        insertName(songNmaeArr[5]);
      })
    document.querySelector(".s6").addEventListener("click",function(){
        insertName(songNmaeArr[6]);
      })
    document.querySelector(".s7").addEventListener("click",function(){
        insertName(songNmaeArr[7]);
      })
    document.querySelector(".s8").addEventListener("click",function(){
        insertName(songNmaeArr[8]);
      })
    document.querySelector(".s9").addEventListener("click",function(){
        insertName(songNmaeArr[9]);
      })
      document.querySelector(".s10").addEventListener("click",function(){
        insertName(songNmaeArr[10]);
      })
      document.querySelector(".s11").addEventListener("click",function(){
        insertName(songNmaeArr[11]);
      })
      document.querySelector(".s12").addEventListener("click",function(){
        insertName(songNmaeArr[12]);
      })
      document.querySelector(".s13").addEventListener("click",function(){
        insertName(songNmaeArr[13]);
      })
      document.querySelector(".s14").addEventListener("click",function(){
        insertName(songNmaeArr[14]);
      })
      document.querySelector(".s15").addEventListener("click",function(){
        insertName(songNmaeArr[15]);
      })
      document.querySelector(".s16").addEventListener("click",function(){
        insertName(songNmaeArr[16]);
      })
      document.querySelector(".s17").addEventListener("click",function(){
        insertName(songNmaeArr[17]);
      })
      document.querySelector(".s18").addEventListener("click",function(){
        insertName(songNmaeArr[18]);
      })
      document.querySelector(".s19").addEventListener("click",function(){
        insertName(songNmaeArr[19]);
      })
      document.querySelector(".s20").addEventListener("click",function(){
        insertName(songNmaeArr[20]);
      })
      document.querySelector(".s21").addEventListener("click",function(){
        insertName(songNmaeArr[21]);
      })
}
async function songsPlayList() {
  let songs = await getsongs();
  let songName;
  let songNmaeArr=[];
  let playlist = document.querySelector(".CreatePlaylist");
  let i=0;
  for (const songLink of songs) {
    songName = songLink.split("/songs/")[1];
    songName = songName.replaceAll("%20", " ");
    songName = songName.replace("_64(PagalWorld.com.sb)", "");
    songName = songName.replace("320(PagalWorld.com.pe)", "");
    songName = songName.replace("_", "");
    songNmaeArr.push(songName);
    playlist.innerHTML =
      playlist.innerHTML +
      `<div class="Playlist-Song flex">
                        <div class="margin-4px">
                            <img class="music-logo invert" src="music.svg" alt="Image not found">
                        </div>
                        <div class="song-name margin-4px font3 ">
                            ${songName}
                        </div>
                        <div class="play-pause-Container s${i} position-last margin-4px">
                            <a href="${songLink}" target="frame1"><img class="play-pause" src="playlogo.svg" alt="Image not found"></a>
                        </div>
                     </div>`;
    i++;
  }
  console.log(songNmaeArr);
  songInfo(songNmaeArr);
}

async function main() {
  let songs = await getsongs();
  console.log(songs);
  audio.addEventListener("loadeddata", () => {
    let duration = audio.duration;
    console.log(duration);
    // The duration variable now holds the duration (in seconds) of the audio clip
  });
  songsPlayList();
}
main();

var audio = new Audio("http://127.0.0.1:3000/songs/Afterhours%20-%20BIR.mp3");
audio.play();
