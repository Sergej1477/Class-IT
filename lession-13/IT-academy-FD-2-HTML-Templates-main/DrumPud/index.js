const visual = document.querySelector(".visual");
const pads = document.querySelectorAll(".pad");
// const theFirstPad = pads[0];

// const onClick = () => {
//     console.log('click!!!!!!!!!!')
// };

// theFirstPad.addEventListener('mousemove', onClick);

const SOUNDS = {
  KeyA: "sounds/kick.wav",
  KeyS: "sounds/cymbal.wav",
  KeyD: "sounds/snare.wav",
  KeyF: "sounds/openhat.wav",
  KeyG: "sounds/long-crash.wav",
  KeyH: "sounds/hihat.wav",
};

const KEY_MAP = {
  KeyA: "KeyA",
  KeyS: "KeyS",
  KeyD: "KeyD",
  KeyF: "KeyF",
  KeyG: "KeyG",
  KeyH: "KeyH",
};

const play = (code) => {
  const sound = SOUNDS[code];
  const audio = new Audio(sound);
  audio.load();
  audio.play();
};

const onKeyDown = (event) => {
  if (event.code in KEY_MAP) {
    play(event.code);
  } else {
    console.error("Кнопка не распознана!!!!!!");
  }
};

// const onKeyDown = (event) => {
//     const {a, s, d, f, g, h} = KEY_MAP;
//     switch (event.code) {
//         case a:
//             play(a);
//             break;
//         case s:
//             play(s);
//             break;
//         case d:
//             play(d);
//             break;
//         case f:
//             play(f);
//             break;
//         case g:
//             play(g);
//             break;
//         case h:
//             play(h);
//             break;

//         default:
//            console.error('Кнопка не распознана!!!!!!')
//     };

// console.log(event);

// theFirstPad.addEventListener('click', (event) => {
//     console.log(event.target);

// })

window.addEventListener("keydown", onKeyDown);

const btn = document.querySelector(".open-btn");
const sidebar = document.querySelector(".sidebar");
const btn2 = document.querySelector(".close-button");

// const openSidebar = () => {
//   sidebar.classList.add("sidebar-open");
// };
// const closeSidebar = () => {
//   sidebar.classList.remove("sidebar-open");
// };

const toogleSidebar = () => {
    sidebar.classList.toggle("sidebar-open");

};

btn.addEventListener("click", toogleSidebar);
btn2.addEventListener("click", toogleSidebar);
