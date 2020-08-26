function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    let hour;
    let minute;
    let second;

    if (h == 1) {
        hour = 'tl';
    } else if (h == 2) {
        hour = 'fol';
    } else if (h == 3) {
        hour = ';=k';
    } else if (h == 4) {
        hour = 'y;r';
    } else if (h == 5) {
        hour = 'my';
    } else if (h == 6) {
        hour = 'yh';
    } else if (h == 7) {
        hour = 'y;';
    } else if (h == 8) {
        hour = 'wg';
    } else if (h == 9) {
        hour = 'kjh';
    } else if (h == 10) {
        hour = 'oyh';
    } else if (h == 11) {
        hour = 'tfld<y';
    } else if (h == 12) {
        hour = 'fod<y';
    }

    if (m == 0) {
        minute = 'ìxÿj';
    }
    else if (m == 1) {
        minute = 'tl';
    } else if (m == 2) {
        minute = 'fol';
    } else if (m == 3) {
        minute = ';=k';
    } else if (m == 4) {
        minute = 'y;r';
    } else if (m == 5) {
        minute = 'my';
    } else if (m == 6) {
        minute = 'yh';
    } else if (m == 7) {
        minute = 'y;';
    } else if (m == 8) {
        minute = 'wg';
    } else if (m == 9) {
        minute = 'kjh';
    } else if (m == 10) {
        minute = 'oyh';
    } else if (m == 11) {
        minute = 'tfld<y';
    } else if (m == 12) {
        minute = 'fod<y';
    } else if (m == 13) {
        minute = 'oy;=k';
    } else if (m == 14) {
        minute = 'oyy;r';
    } else if (m == 15) {
        minute = 'myf<dj';
    } else if (m == 16) {
        minute = 'oyih';
    } else if (m == 17) {
        minute = 'oyy;';
    } else if (m == 18) {
        minute = 'oywg';
    } else if (m == 19) {
        minute = 'oykjh';
    } else if (m == 20) {
        minute = 'úiai';
    } else if (m > 20 && m <= 29) {
        minute = 'úis ';

        if (m == 21) {
            minute = minute.concat('tl');
        } else if (m == 22) {
            minute = minute.concat('fol');
        } else if (m == 23) {
            minute = minute.concat(';=k');
        } else if (m == 24) {
            minute = minute.concat('y;r');
        } else if (m == 25) {
            minute = minute.concat('my');
        } else if (m == 26) {
            minute = minute.concat('yh');
        } else if (m == 27) {
            minute = minute.concat('y;');
        } else if (m == 28) {
            minute = minute.concat('wg');
        } else if (m == 29) {
            minute = minute.concat('kjh');
        }
    } else if (m == 30) {
        minute = ';sy';
    } else if (m > 30 && m <= 39) {
        minute = ';sia ';

        if (m == 31) {
            minute = minute.concat('tl');
        } else if (m == 32) {
            minute = minute.concat('fol');
        } else if (m == 33) {
            minute = minute.concat(';=k');
        } else if (m == 34) {
            minute = minute.concat('y;r');
        } else if (m == 35) {
            minute = minute.concat('my');
        } else if (m == 36) {
            minute = minute.concat('yh');
        } else if (m == 37) {
            minute = minute.concat('y;');
        } else if (m == 38) {
            minute = minute.concat('wg');
        } else if (m == 39) {
            minute = minute.concat('kjh');
        }
    } else if (m == 40) {
        minute = 'y;<sy';
    } else if (m > 40 && m <= 49) {
        minute = 'y;<sia ';

        if (m == 41) {
            minute = minute.concat('tl');
        } else if (m == 42) {
            minute = minute.concat('fol');
        } else if (m == 43) {
            minute = minute.concat(';=k');
        } else if (m == 44) {
            minute = minute.concat('y;r');
        } else if (m == 45) {
            minute = minute.concat('my');
        } else if (m == 46) {
            minute = minute.concat('yh');
        } else if (m == 47) {
            minute = minute.concat('y;');
        } else if (m == 48) {
            minute = minute.concat('wg');
        } else if (m == 49) {
            minute = minute.concat('kjh');
        }
    } else if (m == 50) {
        minute = 'mky';
    } else if (m > 50 && m <= 59) {
        minute = 'mkia ';

        if (m == 51) {
            minute = minute.concat('tl');
        } else if (m == 52) {
            minute = minute.concat('fol');
        } else if (m == 53) {
            minute = minute.concat(';=k');
        } else if (m == 54) {
            minute = minute.concat('y;r');
        } else if (m == 55) {
            minute = minute.concat('my');
        } else if (m == 56) {
            minute = minute.concat('yh');
        } else if (m == 57) {
            minute = minute.concat('y;');
        } else if (m == 58) {
            minute = minute.concat('wg');
        } else if (m == 59) {
            minute = minute.concat('kjh');
        }
    }
    if (s == 0) {
        second = 'ìxÿj';
    }
    else if (s == 1) {
        second = 'tl';
    } else if (s == 2) {
        second = 'fol';
    } else if (s == 3) {
        second = ';=k';
    } else if (s == 4) {
        second = 'y;r';
    } else if (s == 5) {
        second = 'my';
    } else if (s == 6) {
        second = 'yh';
    } else if (s == 7) {
        second = 'y;';
    } else if (s == 8) {
        second = 'wg';
    } else if (s == 9) {
        second = 'kjh';
    } else if (s == 10) {
        second = 'oyh';
    } else if (s == 11) {
        second = 'tfld<y';
    } else if (s == 12) {
        second = 'fod<y';
    } else if (s == 13) {
        second = 'oy;=k';
    } else if (s == 14) {
        second = 'oyy;r';
    } else if (s == 15) {
        second = 'myf<dj';
    } else if (s == 16) {
        second = 'oyih';
    } else if (s == 17) {
        second = 'oyy;';
    } else if (s == 18) {
        second = 'oywg';
    } else if (s == 19) {
        second = 'oykjh';
    } else if (s == 20) {
        second = 'úiai';
    } else if (s > 20 && s <= 29) {
        second = 'úis ';

        if (s == 21) {
            second = second.concat('tl');
        } else if (s == 22) {
            second = second.concat('fol');
        } else if (s == 23) {
            second = second.concat(';=k');
        } else if (s == 24) {
            second = second.concat('y;r');
        } else if (s == 25) {
            second = second.concat('my');
        } else if (s == 26) {
            second = second.concat('yh');
        } else if (s == 27) {
            second = second.concat('y;');
        } else if (s == 28) {
            second = second.concat('wg');
        } else if (s == 29) {
            second = second.concat('kjh');
        }
    } else if (s == 30) {
        second = ';sy';
    } else if (s > 30 && s <= 39) {
        second = ';sia ';

        if (s == 31) {
            second = second.concat('tl');
        } else if (s == 32) {
            second = second.concat('fol');
        } else if (s == 33) {
            second = second.concat(';=k');
        } else if (s == 34) {
            second = second.concat('y;r');
        } else if (s == 35) {
            second = second.concat('my');
        } else if (s == 36) {
            second = second.concat('yh');
        } else if (s == 37) {
            second = second.concat('y;');
        } else if (s == 38) {
            second = second.concat('wg');
        } else if (s == 39) {
            second = second.concat('kjh');
        }
    } else if (s == 40) {
        second = 'y;<sy';
    } else if (s > 40 && s <= 49) {
        second = 'y;<sia ';

        if (s == 41) {
            second = second.concat('tl');
        } else if (s == 42) {
            second = second.concat('fol');
        } else if (s == 43) {
            second = second.concat(';=k');
        } else if (s == 44) {
            second = second.concat('y;r');
        } else if (s == 45) {
            second = second.concat('my');
        } else if (s == 46) {
            second = second.concat('yh');
        } else if (s == 47) {
            second = second.concat('y;');
        } else if (s == 48) {
            second = second.concat('wg');
        } else if (s == 49) {
            second = second.concat('kjh');
        }
    } else if (s == 50) {
        second = 'mky';
    } else if (s > 50 && s <= 59) {
        second = 'mkia ';

        if (s == 51) {
            second = second.concat('tl');
        } else if (s == 52) {
            second = second.concat('fol');
        } else if (s == 53) {
            second = second.concat(';=k');
        } else if (s == 54) {
            second = second.concat('y;r');
        } else if (s == 55) {
            second = second.concat('my');
        } else if (s == 56) {
            second = second.concat('yh');
        } else if (s == 57) {
            second = second.concat('y;');
        } else if (s == 58) {
            second = second.concat('wg');
        } else if (s == 59) {
            second = second.concat('kjh');
        }
    }

    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;
    var t = setTimeout(startTime, 900);

    console.log('e');
}
function checkTime(i) {
    if (i < 10) {
        i = '0' + i;
    } // add zero in front of numbers < 10
    return i;
}
