var playlist = {
  artistName: 'songTitle';
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistNamename = 'songTitle';
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
