
    // let config = {
    //     '.selectpicker': {},
    //     '.selectpicker-deselect': {
    //         allow_single_deselect: true
    //     },
    //     '.selectpicker-no-single': {
    //         disable_search_threshold: 10
    //     },
    //     '.selectpicker-no-results': {
    //         no_results_text: 'Oops, nothing found!'
    //     },
    //     '.selectpicker-width': {
    //         width: "95%"
    //     }
    // }
    // for (var selector in config) {
    //     $(selector).chosen(config[selector]);
    // }

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
            log(scoresArr);
            log(newFriend.name);
        });

        let currentURL = window.location.origin;
        //log(currentURL);
        $.post(`${currentURL}/api/friends`, newFriend, (data) => {
            //log(data);
            
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


document.getElementById('get_file').onclick = function() {
    document.getElementById('my_file').click();
};
$('input[type=file]').change(function (e) {
    $('#customfileupload').html($(this).val());
});
    
$('input[type=file]').change(function (e) {
    $('#customfileupload').html($(this).val());
});

$('#myModal').on('click', function() {
    window.location.reload(true);
    });











