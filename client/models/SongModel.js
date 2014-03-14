// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults: {
    url: '',
    title: '',
    artist: ''
  },

  play: function(){
    this.trigger('play', this);
  },

  enqueue: function(){
    console.log('enqueue triggered');
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  }

});
