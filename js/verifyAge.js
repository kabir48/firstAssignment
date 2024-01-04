const head = document.head
console.log(head)
head.children[2].setAttribute('content', 'Assignment Project Descriptions');
head.children[6].textContent = "First Assignment";
head.children[7].href = "images/logo.png";
head.children[5].setAttribute('content', 'Md.Humayun Kabir', '01796010084');
const showSwitcher = document.getElementById('showSwitcher');
const switcher = document.getElementById('switcher');
const hideSwitcher = document.getElementById('hideSwitcher');
document.getElementById('h4-calender').textContent = "Age Verification"

showSwitcher.addEventListener('click', function() {
    switcher.setAttribute('style', 'display:block;margin-left:0px');
    this.classList.add('d-none')
});
hideSwitcher.addEventListener('click', function() {
    switcher.setAttribute('style', 'display:none');
    showSwitcher.classList.remove('d-none')
});

//=====Age Verification starts from here====//
document.getElementById('verify').addEventListener('click', function(e) {
    e.preventDefault();
    const number = parseFloat(document.getElementById('number').value)
        //console.log(number)
    var modalP = document.getElementById("modalP")
    if (number >= 18) {
        var myModal = new bootstrap.Modal(document.getElementById('verifyModal'));
        myModal.show();
        modalP.textContent = "You are an Adult"
        modalP.classList.add('text-success');
        //document.getElementById('demo').textContent = "You are an adult"
    } else {
        var myModal = new bootstrap.Modal(document.getElementById('verifyModal'));
        myModal.show();
        modalP.textContent = "You are a child"
        modalP.classList.add('text-primary');
        //document.getElementById('demo').textContent = "You are an child"
    }

})

// const heTag = document.getElementsByTagName('h2')
// console.log(heTag);
const heTag = document.getElementsByTagName('h2')
var element = document.querySelector('.section_heading h2:after');
//console.log(element)
const aTag = document.getElementsByTagName('a')
const h4Tag = document.getElementsByClassName('h4')
var element = document.getElementsByClassName('section_heading');

//=====color Switcher start from here====//
function setActiveStyleSheet() {

    for (let i = 0; i < heTag.length; i++) {
        heTag[i].style.color = "red";

    }

    for (let c = 0; c < element.length; c++) {
        element[c].classList.add('withRedColor');
        //var withBlueColor = document.getElementsByClassName('withBlueColor')
        //element[c].setAttribute('style', 'background:red')

    }

    for (let a = 0; a < aTag.length; a++) {
        aTag[a].style.color = "red";
    }

    for (let h = 0; h < h4Tag.length; h++) {
        h4Tag[h].style.color = "red";
    }

}

function refresh() {
    window.location.reload()

}

function setBlue() {
    for (let i = 0; i < heTag.length; i++) {
        heTag[i].style.color = "#8A2BE2";

    }

    for (let c = 0; c < element.length; c++) {
        element[c].classList.add('withVioletColor');
        //var withBlueColor = document.getElementsByClassName('withBlueColor')
        //element[c].setAttribute('style', 'background:red')

    }

    for (let a = 0; a < aTag.length; a++) {
        aTag[a].style.color = "#8A2BE2";
    }

    for (let h = 0; h < h4Tag.length; h++) {
        h4Tag[h].style.color = "#8A2BE2";
    }
}