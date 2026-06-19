// Add your R2 public video URLs here after uploading to the bucket.
// Order determines playback sequence.
const playlist = [
  // 'https://pub-XXXX.r2.dev/clip1.mp4',
  // 'https://pub-XXXX.r2.dev/clip2.mp4',
];

const videos = [
  document.getElementById('vid-a'),
  document.getElementById('vid-b'),
];

let active = 0;
let clip = 0;

function crossfade() {
  const next = 1 - active;
  clip = (clip + 1) % playlist.length;
  const v = videos[next];
  v.src = playlist[clip];
  v.load();
  v.play().catch(() => {});
  v.classList.add('active');
  videos[active].classList.remove('active');
  active = next;
}

videos[0].addEventListener('ended', () => { if (active === 0) crossfade(); });
videos[1].addEventListener('ended', () => { if (active === 1) crossfade(); });

if (playlist.length > 0) {
  const v = videos[0];
  v.src = playlist[0];
  v.loop = playlist.length === 1;
  v.load();
  v.play().catch(() => {});
  v.classList.add('active');
}
