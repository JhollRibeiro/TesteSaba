Notification.requestPermission().then(permission => {
  return;
});


if (Notification.permission === 'granted') {
  new Notification("Gracias por enviar", {
    body: "Ahora que ha actualizado sus datos, está listo para empezar.",
    icon: "public-relation.png",
    vibrate: [100, 50, 100],
    tag: "onboarding",
  })
}
