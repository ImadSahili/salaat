let title = document.getElementById("title");
let time = document.getElementById("time");

const dateSalaat = [
  { title: "الصبح", time: "04:24" },
  { title: "الظهر", time: "13:34" },
  { title: "العصر", time: "17:14" },
  { title: "المغرب", time: "20:46" },
  { title: "العشاء", time: "22:19" },
];

function saveClock() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
//   hTo.innerHTML =
//     (hh < 10 ? "0" + hh : hh) +
//     " : " +
//     (mm < 10 ? "0" + mm : mm) +
//     " : " +
//     (ss < 10 ? "0" + ss : ss);
  for (let index = 0; index < dateSalaat.length; index++) {
    if (
      `${hh < 10 ? "0" + hh : hh}:${mm < 10 ? "0" + mm : mm}` == aryTime[index]
    ) {
      aryTime.splice(index, 1);
      lu[index].style.color = "aqua";
      const text = new SpeechSynthesisUtterance(textValue.value);
      for (let i = 1; i <= 3; i++) {
        speechSynthesis.speak(text);
      }

      // audio.play();
      setTimeout(() => {
        removeJsx();
      }, 30000);
    }
  }

  setTimeout(function () {
    saveClock();
  }, 1000);
}
saveClock();
function savef() {
  if (inputValue.value == "") return;
  aryTime.push(inputValue.value);
  ul.innerHTML += `<li>${inputValue.value}</li>`;

  inputValue.value = "";
}

function removeJsx() {
  ul.innerHTML = "";
  
}
