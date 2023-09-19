let btnEmpezar;
//btnEmpezar = document.getElementById('continuarOnboarding');

Notification.requestPermission().then(permission => {
  return;
});

btnEmpezar.onclick = function (event) {
  if (Notification.permission === 'granted') {
    new Notification("Gracias por enviar sus datos",
      {
        body: "Ahora que ha actualizado sus datos, está listo para empezar.",
        icon: "public-relation.png",
        vibrate: [100, 50, 100],
      }
    );
  }
}
