// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.showPlaylist();
    this.collection.on('addSong', this.addSong, this);
  },

  render: function() {
    this.$el.html('<tr><th>Artist</th><th>Song</th></tr>');
    // this.collection.each(function(song){
    //   this.addSong(song);
    // }, this);
    return this.$el;
  },

  showPlaylist: function(){
    _.each(this.collection.models, function(song){
      this.addSong(song);
    }, this);
  },

  addSong: function(song) {
    this.$el.append( new SongQueueEntryView({model: song}).render() );
  },

  removeSongQueueEntry: function() {
    console.log('SongQueueView: remove first song', this.collection);
    this.$el.find('tr:nth-child(2)').remove();
    var songToRemove = this.collection.at(0);
    this.collection.remove( songToRemove );
  }


});
