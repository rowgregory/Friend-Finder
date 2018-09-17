

$('#sbmtBtn').on('click', (event) => {
    let log = console.log;
    log(`Are we here`);
    event.preventDefault();

    // form validation
    const valididation = () => {
        let valid = true;
        $('.form-control').each(function () {
            if ($(this).val() === '') {
                valid = false
            }
        });
        $('.chosen-select').each(function () {
            if ($(this).val() === '') {
                valid = false;
            }

        });
        return valid;
    }

    if (valididation() == true) {

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
            //log(scoresArr);
            log(newFriend.name);
        });

        let currentURL = window.location.origin;
        //log(currentURL);
        $.post(`${currentURL}/api/friends`, newFriend, (data) => {
            //log(data);
            
            $('#title').text('This is your best match!');
            $('#matchName').text(data.name);
            $('#matchImg').attr('src', data.photo);
            

        })
        


    } else {
        alert(`Please fill all entries`);
    };


    return false;

    

});








