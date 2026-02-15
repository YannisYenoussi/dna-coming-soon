// Date de lancement ici
const LAUNCH_DATE = "2026-03-15T10:00:00";

const $ = (id) => document.getElementById(id);
const pad = (n) => String(n).padStart(2, "0");

function tick(){
 const target = new Date(LAUNCH_DATE).getTime();
 const now = Date.now();
 let diff = target - now;

 if (isNaN(target)) return;

 if (diff <= 0){
 $("days").textContent = "00";
 $("hours").textContent = "00";
 $("minutes").textContent = "00";
 $("seconds").textContent = "00";
 return;
 }

 const s = Math.floor(diff / 1000);
 const days = Math.floor(s / 86400);
 const hours = Math.floor((s % 86400) / 3600);
 const minutes = Math.floor((s % 3600) / 60);
 const seconds = s % 60;

 $("days").textContent = String(days);
 $("hours").textContent = pad(hours);
 $("minutes").textContent = pad(minutes);
 $("seconds").textContent = pad(seconds);
}

tick();
setInterval(tick, 1000);

// Message simple côté formulaire (démo)
const form = document.getElementById("notifyForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
 e.preventDefault();
 msg.textContent = "Merci. On te notifiera dès l’ouverture.";
 form.reset();
});