let typing = document.getElementById('typing');

let typewriter = new Typewriter(typing, {
    loop: true
});

typewriter.typeString('Desarrollador Web')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Admin. Sistemas')
    .pauseFor(2500)
    .start();