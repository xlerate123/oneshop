const drop = document.getElementById("drop");
const most = document.getElementById("most");
const btnshort = document.getElementById("btnshort");
const btncords = document.getElementById("btncords");
const shorts = document.getElementById("shorts");
const cords = document.getElementById("cords");
const div1 = document.getElementById("new");
const div2 = document.getElementById("trend");
const login = document.getElementById("login");
const register = document.getElementById("register");
const btnlogin = document.getElementById("btnlogin");
const btnregister = document.getElementById("btnregister");

if (btnlogin && btnregister) {//for separate pages check if the buttons exist to ensure dom loads correctly

    function changelogreg(e)
{
    e.preventDefault();
        if(e.target === btnlogin){
            login.style.display="block";
            register.style.display="none";
            btnregister.style.backgroundColor="white";
            btnregister.style.color="black";
            btnlogin.style.backgroundColor="black";
            btnlogin.style.color="white";
        }
        else if(e.target === btnregister){
            register.style.display="block";
            login.style.display="none";
            btnlogin.style.backgroundColor="white";
            btnlogin.style.color="black";
            btnregister.style.backgroundColor="black";
            btnregister.style.color="white";
        }
        
}

btnlogin.addEventListener('click', changelogreg);
btnregister.addEventListener('click', changelogreg);

}
        


function changecontent(e){
if(e.target === drop){
    div1.style.display="block";
    div2.style.display="none";
    most.style.backgroundColor="white";
    most.style.color="black";
    drop.style.backgroundColor="black";
    drop.style.color="white";
}
else if(e.target === most){
    div2.style.display="block";
    div1.style.display="none";
    drop.style.backgroundColor="white";
    drop.style.color="black";
    most.style.backgroundColor="black";
    most.style.color="white";
}

}

drop.addEventListener('click', changecontent);
most.addEventListener('click', changecontent);

function lastchange(e){
    if(e.target === btnshort){
        shorts.style.display="block";
        cords.style.display="none";
        btncords.style.backgroundColor="white";
        btncords.style.color="black";
        btnshort.style.backgroundColor="black";
        btnshort.style.color="white";
    }
    else if(e.target === btncords){
        cords.style.display="block";
        shorts.style.display="none";
        btnshort.style.backgroundColor="white";
        btnshort.style.color="black";
        btncords.style.backgroundColor="black";
        btncords.style.color="white";
    }
}



const btns = [document.getElementById("btnshirt"), document.getElementById("btntshirt"), document.getElementById("btnjeans"), document.getElementById("btntrousers")];
const sections = [document.getElementById("shirts"), document.getElementById("tshirts"), document.getElementById("jeans"), document.getElementById("trousers")];

function showSection(index) {
    sections.forEach((section, i) => {
        section.style.display = (i === index) ? "block" : "none";
    });
    btns.forEach((btn, i) => {
        btn.style.backgroundColor = (i === index) ? "black" : "white";
        btn.style.color = (i === index) ? "white" : "black";
    });
}

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => showSection(index));
    
});

btnshort.addEventListener('click', lastchange);
btncords.addEventListener('click', lastchange);

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
      const productId = this.getAttribute('data-product-id');
      window.location.href = `productDetails.html?product=${productId}`;
    });
  });