$(document).ready(function () {
    // Mobile Menu Trigger
    $('.gh-burger').click(function () {
        $('body').toggleClass('gh-head-open');
    });

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    $('.early-access-form').on('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        var form = $(this);
        var email = event.target[0].value;
        if (validateEmail(email)) {
            form.find('.invalid-feedback').hide();
            $.ajax({
                url: "https://formspree.io/xqkygevg",
                method: "POST",
                data: { _replyto: email },
                dataType: "json",
                success: function() {
                    $('#earlyAccessForm').hide();
                    $('#earlyAccessTY').show();
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    form.find('.alert-danger').show();
                }
            });
        } else {
            form.find('.invalid-feedback').show();
        }
    })
});
