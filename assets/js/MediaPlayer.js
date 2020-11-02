function MediaPlayer(config) {
    this.media = config.el
}

MediaPlayer.prototype.play = () => this.media.play()
MediaPlayer.prototype.pause = () => this.media.pause()

MediaPlayer.prototype.togglePlay = () =>{
    if(this.media.pause()){
        this.play()
    }else{
        this.pause()
    }
}

export default MediaPlayer