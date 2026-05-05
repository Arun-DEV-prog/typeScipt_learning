"use strict";
//abstraction
// 1> interface
// 2> abstract class
Object.defineProperty(exports, "__esModule", { value: true });
class MusicPlayer {
    playI() {
        console.log(" Playing Music>>>");
    }
    pause() {
        console.log("Pasused");
    }
    stop() {
        console.log("Stopped");
    }
}
const myPlayer = new MusicPlayer();
myPlayer.playI();
//using abstract class
class VedioPlayer {
}
class AbulPlayer extends VedioPlayer {
    play() {
        console.log("Playing");
    }
    pause() {
        console.log("pause");
    }
    stop() {
        console.log("stop");
    }
}
const abulPlayer1 = new AbulPlayer();
abulPlayer1.play();
//# sourceMappingURL=abstraction.js.map