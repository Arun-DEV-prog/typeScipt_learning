//abstraction
// 1> interface
// 2> abstract class


interface MediaPlayer{
     playI(): void;
     pause(): void;
     stop(): void;
}

class MusicPlayer implements MediaPlayer{
     playI(){
         console.log(" Playing Music>>>")
     }
     pause(): void {
         console.log("Pasused")
     }
     stop(): void {
         console.log("Stopped")
     }
}


const myPlayer=new MusicPlayer();
myPlayer.playI();


//using abstract class

abstract class VedioPlayer{
     abstract play(): void;
     abstract pause(): void;
     abstract stop(): void;
}

class AbulPlayer extends VedioPlayer{
     play(): void {
         console.log("Playing")
     }
     pause(): void {
         console.log("pause")
     }
     stop(): void {
          console.log("stop")
     }
}

const abulPlayer1=new AbulPlayer();
abulPlayer1.play();