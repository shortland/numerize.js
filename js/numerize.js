/*
* Ilan Kleiman
* numerize.js
* Initial: 05/07/2018
*
* https://github.com/davidsa03/numerize/
*/

function round_num(n, decimals) {
	if (n == parseInt(n)) {
		return parseInt(n)
	}
	else {
		var places = Math.pow(10, decimals);
		return Math.round(parseFloat(n) * places) / places;
	}
}

function drop_zero(n) {
	return parseFloat(n.toString());
}

function numerize(n, decimals = 2) {
	var is_negative_string = "";
	n = parseFloat(n);
	if (n < 0) {
		is_negative_string = "-";
	}
	else if (isNaN(n)) {
		return "NaN.";
	}

	n = Math.abs(n);
	if (n < 1000) {
		return is_negative_string + drop_zero(round_num(n, decimals));
	}
	else if (n >= 1000 && n < 1000000) {
		if (n % 1000 == 0) {
            return is_negative_string + parseInt(n / 1000) + "K";
        }
        else {
            n = parseFloat(n / 1000);
            return is_negative_string + drop_zero(round_num(n, decimals)) + "K";
        }
	}
	else if (n >= 1000000 && n < 1000000000) {
        if (n % 1000000 == 0) {
            return is_negative_string + parseInt(n / 1000000) + "M";
        }
        else {
            n = n / 1000000;
            return is_negative_string + drop_zero(round_num(n, decimals)) + "M";
        }
    }
    else if (n >= 1000000000 && n < 1000000000000) {
        if (n % 1000000000 == 0) {
            return is_negative_string + parseInt(n / 1000000000) + "B";
        }
        else {
            n = n / 1000000000;
            return is_negative_string + drop_zero(round_num(n, decimals)) + "B";
        }
    }
    else if (n >= 1000000000000 && n < 1000000000000000) {
        if (n % 1000000000000 == 0) {
            return is_negative_string + parseInt(n / 1000000000000) + "T";
        }
        else {
            n = n / 1000000000000;
            return is_negative_string + drop_zero(round_num(n, decimals)) + "T";
        }
    }
    else {
        return is_negative_string + n;
    }
}

function numerize_class() {
	var n = document.getElementsByClassName("numerize");
	for (var i = 0, len = n.length; i < len; i++) {
		n[i].innerHTML = numerize(n[i].innerHTML);
	}
}