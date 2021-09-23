window.onload = function() {
    let listAmenities = $("DIV.amenities DIV.popover ul li");
    let checkedOnes = [];

    for (let li of listAmenities) {
        $(li).first().click(function() {
            let amenCheckState = $(li).first();
            let amenName = $(li).text();
            let h4 = $('DIV.amenities h4');

            console.log(amenCheckState.prop('checked'));

            if (this.checked) {
                //amenCheckState.prop('checked', false);
                // console.log("falso");
                let idx = array.indexOf(amenName);
                if (idx !== -1) {
                    array.splice(idx, 1);
                }
            } else {
                //amenCheckState.prop('checked', true);
                // console.log("true");
                checkedOnes.push(amenName);
            }

            h4.text(checkedOnes.join(', '));
        });
    }
};
