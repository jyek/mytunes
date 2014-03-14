// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    this.model.on('changeCurrentSong', function(){
      this.playerView.setSong(this.model.get('currentSong'));
    }, this);

    this.model.on('songAdded', function(){
      var sq = this.model.get('songQueue');
      var song = sq.models[sq.models.length-1];
      this.songQueueView.addSong(song);
    }, this);

    this.model.on('stop', function(){
      this.playerView.songStop();
    }, this);

    this.playerView.on('nextSong', function(){
      this.songQueueView.removeSongQueueEntry();
    }, this);

    // start playing first song in loaded queue once view is ready
    this.songQueueView.collection.load();

  },

  render: function(){
    $('.player').append(this.playerView.$el);
    $('.playlist').append(this.songQueueView.$el);
    $('.library').append(this.libraryView.$el);
    return this.$el.html();
  }

});
