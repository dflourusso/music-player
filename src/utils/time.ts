export function millisToMinutesAndSeconds(millis: number) {
  var minutes = `${Math.floor(millis / 60000)}`.padStart(2, "0");
  var seconds = `${((millis % 60000) / 1000).toFixed(0)}`.padStart(2, "0");
  return `${minutes}:${seconds}`;
}
