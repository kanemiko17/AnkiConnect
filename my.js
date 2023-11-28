function testGS(){
    var sheeturl = "https://script.google.com/macros/s/AKfycbxy3wJeYn-I6ZJ2uI-IFd8kZ-JB--nDycxF9-WzvjcqTA8M63X1BJJZNJh-XNgSHmsEgA/exec";

fetch(sheeturl)
    .then(d => d.json())
    .then(d => {
        
        document.getElementById("app").textContent = d[0].status;
    });

}

document.getElementById("btn").addEventListener("click",testGS);