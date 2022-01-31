function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}   

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.querySelectorAll('nav a')
  .forEach(e => e.addEventListener('click', _ => colorToggle(e.dataset.value)))


function colorToggle(color){
    switch (color) {
    case "red":
        backgroundColor = "red";
        break;
    case "orange":
        backgroundColor = "orange";
        break;
    case "purple":
        backgroundColor = "purple";
        break;
    case "green":
        backgroundColor = "green";
    }

    document.body.style.backgroundColor = backgroundColor;
    this.closeNav();
}