const h1 = document.getElementById("hours");
const m1 = document.getElementById("minutes");
const s1 = document.getElementById("seconds");
const a1 = document.getElementById("ampm");

function getClock() {
  let curr = new Date();

  let h = curr.getHours();
  let m = curr.getMinutes();
  let s = curr.getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h1.innerText = h;
  m1.innerText = m;
  s1.innerText = s;
  a1, (innerText = ampm);

  setTimeout(() => {
    getClock();
  }, 1000);
}
getClock();
