import axios from 'axios';
import {ACCESS_TOKEN} from '@env';
import cheerio from 'cheerio';

const fetchLyrics = async (artist, title) => {
  const sontDetailsOptions = {
    method: 'GET',
    url: 'https://genius-song-lyrics1.p.rapidapi.com/search/',
    params: {
      q: `${artist} ${title}`,
    },
    headers: {
      'X-RapidAPI-Key': ACCESS_TOKEN,
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
    },
  };

  const {data} = await axios.request(sontDetailsOptions);
  const {hits} = data;

  if (!hits || hits.length === 0) {
    return [];
  }

  const songDetails = hits[0].result;

  const lyricsOptions = {
    method: 'GET',
    url: 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/',
    params: {
      id: songDetails.id,
    },
    headers: {
      'X-RapidAPI-Key': ACCESS_TOKEN,
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
    },
  };

  const {data: lyricsData} = await axios.request(lyricsOptions);
  const html = lyricsData.lyrics.lyrics.body.html;

  // remove html tags
  let lyrics = cheerio.load(html).text();
  // remove tags
  lyrics = lyrics.replace(/<[^>]*>?/gm, '');

  return lyrics;
};

export default fetchLyrics;
