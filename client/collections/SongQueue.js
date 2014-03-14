// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.enqueue, this);
    this.on('remove', this.dequeue, this);
  },

  enqueue: function(song){
    this.trigger('addSong', song);
    if (this.models.length === 1){
      song.play();
    }
    this.save();
  },

  dequeue: function(song, songQueue, options){
    if (options.index === 0) {
      song.stop();
      if (songQueue.length > 0) this.nextSong();
    }
  },

  nextSong: function(){
    this.at(0).play();
  },

  load: function(){
    var storedSongs = JSON.parse(window.localStorage.getItem('playlist'));

    _.each(storedSongs, function(song){
      this.add(song);
    }, this);
  },

  save: function(){
    var playlist = JSON.stringify(this.models);
    window.localStorage.setItem('playlist', playlist);
  }

});