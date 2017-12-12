var playlist = {
  artistName1: 'songTitle1',
  artistName2: 'songTitle2'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistNamename = 'songTitle';
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
