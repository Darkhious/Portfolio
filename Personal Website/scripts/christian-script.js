const HEART = [false, false, false];
const COMMENT = [false, false, false];
const SHARE = [false, false, false];

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
            document.getElementById("commentIcon" + (i + 1)).src = "../img/icons/post/comment-outline.svg";
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

    for (var i = 0; i < achieveList.length; i++) {
        achieveList[i].classList.remove("focus");
        achieveList[i].classList.add("blur");
    }

    switch (num) {
        case 1:
            text.innerHTML = 'Earned by graduating Junior High School with a title of "With High Honors"';

            break;
        case 2:
            text.innerHTML = 'Earned by graduating Senior High School with a title of "With High Honors"';

            break;
        case 3:
            text.innerHTML = 'Graduated Senior High School recognized as the Best TVL - ICT Student';

            break;
        case 4:
            text.innerHTML = 'Start programming with Java as your first programming language';

            break;
        case 5:
            text.innerHTML = 'Create a Game using Java (You have created Java Heroes!)';

            break;
        case 6:
            text.innerHTML = 'Learn 3 different programming Language';
                
            break;
        case 7:
            text.innerHTML = 'Learn 5 different programming language';
                
            break;
        case 8:
            text.innerHTML = 'Create a basic game using Unity Game Engine';
                
            break;
        case 9:
            text.innerHTML = 'Use Arduino for the first time';
                
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
            changeRole("Arduino Programmer.");

            break;
        case 1:
            changeRole("Game Developer.");

            break;
        case 2:
            changeRole("Python Programmer.");

            break;
        case 3:
            changeRole("Java Programmer.");

            break;
        case 4:
            changeRole("Fullstack Developer.");

            break;
        case 5:
            changeRole("C++ Programmer.");

            break;
        }
    }, 3000);
    

    ctr++;

    if (ctr > 5) {
        ctr = 0;
    }

    setTimeout(() => {
        roleContainer.classList.remove("type-backward");
        roleContainer.classList.add("type-forward");
    }, 5000);
    
}, 10000);