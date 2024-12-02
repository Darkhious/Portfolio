const HEART = [false];
const COMMENT = [false];
const SHARE = [false];

let myRole = document.getElementById("role");
let roleContainer = document.getElementById("type");
let ctr = 0;
let index;

var achievementDesc = document.getElementById("achieve-desc");
var text = document.getElementById("info");
var achieveList = document.querySelectorAll(".achievement");

function showNEUST() {
    document.getElementById("college").style.display = "block";
}

function showZNHS() {
    document.getElementById("high-school").style.display = "flex";
}

function heartControl(num) {
    var heartBtn = document.getElementById("heart" + num);
    var nextPost = document.getElementById("post" + (num + 1))

    index = num - 1;

    if (HEART[index] === false) {
        heartBtn.src = "../img/icons/post/heart-fill.svg";
        if (nextPost) {
            nextPost.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
        
        HEART[index] = true;
    } else {
        heartBtn.src = "../img/icons/post/heart-outline.svg";

        HEART[index] = false;
    }
}

function commentControl(num) {
    var commentBtn =  document.getElementById("commentIcon" + num);
    index = num - 1;

    if (COMMENT[index] === false) {
        commentBtn.src = "../img/icons/post/comment-fill.svg";
        document.getElementById("comment" + num).style.display = "flex";

    for (var i = 0; i < COMMENT.length; i++) {
        if (i != index) {
            COMMENT[i] = false;
            document.getElementById("commentIcon" + (i + 1)).src = "..img/icons/post/comment-outline.svg";
            document.getElementById("comment" + (i + 1)).style.display = "none";
        }
    }

        COMMENT[index] = true;
    } else {
        commentBtn.src = "../img/icons/post/comment-outline.svg";
        document.getElementById("comment" + num).style.display = "none";

        COMMENT[index] = false;
    }
}

function shareControl(num) {
    var shareBtn = document.getElementById("share" + num);
    index = num - 1;

    if (SHARE[index] === false) {
        shareBtn.src = "../img/icons/post/share-fill.svg";

        SHARE[index] = true;
    } else {
        shareBtn.src = "../img/icons/post/share-outline.svg";

        SHARE[index] = false;
    }
}

function showDescription(num) {
    achievementDesc.classList.remove("pop-down");
    achievementDesc.classList.add("pop-up");
    achievementDesc.style.display = "flex";

    for (var i = 0; i < achieveList.length; i++) {
        achieveList[i].classList.remove("focus");
        achieveList[i].classList.add("blur");
    }

    switch (num) {
        case 1:
            text.innerHTML = 'Earned by graduating Pre-Elementary with a title of "Salutatorian"';

            break;
        case 2:
            text.innerHTML = 'Earned by graduating Elementary with a title of "Valedictorian"';

            break;
        case 3:
            text.innerHTML = 'Earned by graduating Junior High School with a title of "With High Honor"';

            break;
        case 4:
            text.innerHTML = 'Earned by graduating Senior High School with a title of "With High Honor"';

            break;
        case 5:
            text.innerHTML = 'Earned by receiving the title of "BEST IN FEASIBILITY STUDY ABM 2023"';

            break;
        case 6:
            text.innerHTML = 'Earned by receiving the title of "GRADE 12 ABM Representative YES-O Club"';

            break;
        case 7:
            text.innerHTML = 'Become the PPT Head Operator at Social Communications Ministry - St. Nicholas Of Tolentine Parish Cathedral';

            break;
        case 8:
            text.innerHTML = 'Earned by receiving the title of Best in Layout for Feature and Editorial Page DSPC 2019';

            break;
        case 9:
            text.innerHTML = 'Become the Vice President of the SP-ICT Council of Batch 2019-2020';

            break;
        case 10:
            text.innerHTML = 'Become the SP-ICT Classroom President from 2017 - 2020';

            break;
        case 11:
            text.innerHTML = 'Become the Treasurer of the Local Student Government of the CICT 2024-2025';

            break;
        case 12:
            text.innerHTML = 'Become the Managing Editor and Layout Artist of The Pixel S.Y 2024-2025';

            break;
    }
    
}

function hideDescription() {
    achievementDesc.classList.remove("pop-up");
    achievementDesc.classList.add("pop-down");

    for (var i = 0; i < achieveList.length; i++) {
        achieveList[i].classList.remove("blur");
        achieveList[i].classList.add("clear");
    }
}

function changeRole(text) {
    myRole.innerHTML = text;
}

setInterval(() => {
    roleContainer.classList.remove("type-forward");
    roleContainer.classList.add("type-backward");

    setTimeout(() => {
        switch (ctr) {
        case 0:
            changeRole("Layout Artist.");

            break;
        case 1:
            changeRole("Designer.");

            break;
        case 2:
            changeRole("Writer.");

            break;
        case 3:
            changeRole("C++ Programmer.");

            break;
        case 4:
            changeRole("Web Developer.");

            break;
        case 5:
            changeRole("Photographer.");

            break;
        }
    }, 1000);
    

    ctr++;

    if (ctr > 5) {
        ctr = 0;
    }

    setTimeout(() => {
        roleContainer.classList.remove("type-backward");
        roleContainer.classList.add("type-forward");
    }, 2000);
    
}, 5000);
