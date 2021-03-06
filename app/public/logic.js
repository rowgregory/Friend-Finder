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
        $('#myModal').modal('show');

        let newFriend = {
            name: $('#name').val().trim(),
            photo: $('#photo').val(),
            scores: []
        };

        let scoresArr = [];

        $('.chosen-select').each(function () {
            scoresArr.push(parseInt($(this).val()));
        }).promise().done(() => {
            newFriend.scores = scoresArr;
        });

        let currentURL = window.location.origin;

        $.post(`${currentURL}/api/friends`, newFriend, (data) => {
            
            let $title = $(`<h3 class="title">`);
            $title.text('This is your best match!');
            $('#title').prepend($title);
            $('#matchName').text(data.name);
            $('#matchImg').attr('src', data.photo);
            $("#myModal").modal('toggle');
           
        })
        
    } else {
        alert(`Please fill all entries`);
    };

    return false;
});












