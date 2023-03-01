// a function that gets youtube music title format downloaded in mp3 and extract the artist and title from it
const getArtistAndTitle = path => {
  if (!path) {
    return {artist: '', title: ''};
  }
  let fileName = path.split('/').pop();
  // remove extension
  fileName = fileName.split('.').slice(0, -1).join('.');
  // remove feat. and ft. and ft and things inside brackets
  fileName = fileName.replace(
    /(\(.*?\))|(\[.*?\])|(\{.*?\})|(\s*feat.*$)|(\s*ft.*$)/gi,
    '',
  );
  // check if there is a dash
  if (fileName.includes('-')) {
    // split the string by dash
    const splitByDash = fileName.split('-');
    // get the artist and title
    const artist = splitByDash[0].trim();
    const title = splitByDash[1].trim();
    return {artist, title};
  }
  // if there is no dash, get the artist and title
  const artist = fileName.split(' ').slice(0, -1).join(' ');
  const title = fileName.split(' ').pop();
  return {artist, title};
};

export default getArtistAndTitle;
