var elementDate = document.querySelectorAll('.date');
var elementCovid = document.querySelector('#datecovid');
var dateHeader = new Date();
var getdayHeader = daystring(dateHeader.getDay());
var getdateHeader = dateHeader.getDate();
var getmonthHeader = dateHeader.getMonth() + 1;
var getyearHeader = dateHeader.getFullYear();

function daystring(day) {
    switch (day) {
        case 2:
            return 'Thứ hai'
            break;
        case 3:
            return 'Thứ ba'
            break;
        case 4:
            return 'Thứ tư'
            break;
        case 5:
            return 'Thứ năm'
            break;
        case 6:
            return 'Thứ sáu'
            break;
        case 7:
            return 'Thứ bảy'
            break;
        case 8:
            return 'CN'
            break;       
    }
}
if (elementDate){
    for (var i = 0; i < elementDate.length; i++) {
    elementDate[i].innerHTML = `
    <span> ${getdayHeader}, ngày ${getdateHeader} tháng ${getmonthHeader} năm ${getyearHeader}</span>
    `
    }
}

if (elementCovid) {
    elementCovid.innerHTML = `
    ngày ${getdateHeader} tháng ${getmonthHeader} năm ${getyearHeader}</span>
    `
}

