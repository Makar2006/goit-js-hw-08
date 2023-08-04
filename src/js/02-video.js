import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data.seconds));
  }),
  1000
);

const currentTime = localStorage.getItem(LOCAL_KEY) || 0;
player.setCurrentTime(currentTime);
