var moreButton = document.getElementById('more-work');
var secondRow= document.getElementById('second-row');
var lessButton = document.getElementById('less-work');

moreButton.addEventListener('click', () => {
    secondRow.style.display = "flex";
    moreButton.style.display = "none";
    lessButton.style.display = "block";
});

lessButton.addEventListener('click', () => {
    secondRow.style.display = "none";
    moreButton.style.display = "block";
    lessButton.style.display = "none";
});

