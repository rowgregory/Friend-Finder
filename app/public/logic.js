
$('#sbmtBtn').on('click', (event) => {
    let log = console.log;
    log(`Are we here`);
    event.preventDefault();

    // form validation
    const valididation = () => {
        let valid = true;
        $('.form-control').each(function () {
            if (!$(this).val()) {
                valid = false
            }
        });
        $('.chosen-select').each(function () {
            if (!$(this).val()) {
                valid = false;
            }

        });
        return valid;
    }

    if (valididation()) {

        let newFriend = {
            name: $('#name').val().trim(),
            photo: $('#photo').val().trim(),
            scores: []
        };

        let scoresArr = [];

        $('.chosen-select').each(function () {
            scoresArr.push(parseInt($(this).val()));
        }).promise().done(() => {
            newFriend.scores = scoresArr;
            log(scoresArr);
            log(newFriend.name);
        });

    } else {
        alert(`Please fill out form`);
    };


});

module.exports.compareFriend = () => {

}




