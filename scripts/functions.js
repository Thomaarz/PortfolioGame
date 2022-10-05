
function printLetterByLetter(element_id, message, speed) {
    let i = 0;
    let interval = setInterval(function() {
        let target = document.getElementById(element_id);

        target.innerHTML += '<span id="' + element_id + '-' + i + '">' + message.charAt(i++).replace('_', '<br/>') + '</span>';
        if (i > message.length) clearInterval(interval);

    }, speed);

}
function coloredLetter(element_start_id, color, after, delai) {
    for (let i = 0; i < 10000; i++) {
        const interval = setInterval(function() {

            let target = document.getElementById(element_start_id + '-' + i);

            if (target === null) clearInterval(interval);
            else target.style.color = color;

        }, after + delai * i);
    }
}

function show_text(element_id) {
    let target = document.getElementById(element_id);
    if (target === null) return null;

    let parent = target.parentNode;
    if (window.innerWidth < 2900) parent.style.padding = '0 80px';
    let text;
    if (element_id === 'link-presentation') {
        if (window.innerWidth >= 1600) parent.style.left = '803px';
        text = 'Présentation';
    }
    else if (element_id === 'link-experience') {
        if (window.innerWidth >= 1600) parent.style.left = '986px';
        text = 'Expérience';
    }
    else if (element_id === 'link-projets') {
        if (window.innerWidth >= 1600) parent.style.left = '1169px';
        text = 'Projets';
    }
    else if (element_id === 'link-contact') {
        if (window.innerWidth >= 1600) parent.style.left = '1352px';
        text = 'Contact';
    }

    target.innerHTML = text;
}

function hide_text(element_id) {
    let target = document.getElementById(element_id);
    if (target === null) return null;

    let parent = target.parentNode;
    parent.style.padding = null;
    if (element_id === 'link-presentation') {
        parent.style.left = null;
    }
    else if (element_id === 'link-experience') {
        parent.style.left = null;
    }
    else if (element_id === 'link-projets') {
        parent.style.left = null;
    }
    else if (element_id === 'link-contact') {
        parent.style.left = null;
    }

    target.innerHTML = '?';

}