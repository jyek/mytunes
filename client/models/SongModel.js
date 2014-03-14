// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    console.log('SongModel: dequeue');
    this.trigger('dequeue', this);
  },

  stop: function(){
    console.log('SongModel: stop');
    this.trigger('stop', this);
  }

});
