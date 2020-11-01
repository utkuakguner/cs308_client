export function getScreenSize () {
    const { clientWidth } = document.body;
    if (clientWidth <= 576) {
        return 1;
    } else if (clientWidth <= 768) {
        return 2;
    } else if (clientWidth <= 992) {
        return 3;
    } else if (clientWidth <= 1200) {
        return 4;
    } else {
        return 5;
    }
}

export function shuffle (a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

export function getSession () {
    return JSON.parse(localStorage.getItem("session")) || "";
}

export function setSession (token) {
    localStorage.setItem("session", JSON.stringify(token));
}

export function alertMessage (message) {
    window.alert(message);
}

export function alertConfirm (message) {
    return window.confirm(message);
}

export function getParam (value) {
    return new URL(window.location.href).searchParams.get(value)
}

export function setParam (key, value) {
    key = encodeURI(key); value = encodeURI(value);

    var kvp = document.location.search.substr(1).split("&");

    var i=kvp.length; var x; while(i--) {
        x = kvp[i].split("=");

        if (x[0]===key) {
            x[1] = value;
            kvp[i] = x.join("=");
            break;
        }
    }

    if(i<0) {kvp[kvp.length] = [key,value].join("=");}

    document.location.search = kvp.join("&"); 
}