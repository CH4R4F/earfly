function duration(ms) {
  // convert milliseconds to seconds
  let seconds = Math.floor(ms / 1000);

  // calculate the minutes and seconds
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  // pad the seconds with a leading zero if necessary
  if (remainingSeconds < 10) {
    remainingSeconds = '0' + remainingSeconds;
  }

  // return the formatted time string
  return minutes + ':' + remainingSeconds;
}

export default duration;
