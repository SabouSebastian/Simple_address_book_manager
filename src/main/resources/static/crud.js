 let csrf_token = $("meta[name='_csrf']").attr("content");
 let csrf_header = $("meta[name='_csrf_header']").attr("content");

$('.removeButton').click(function(event) {

                     var $row = $(this).closest('tr');
                     var id = $row.find('td').eq(0).text();

                    $('.confirm-remove-button').click(function(event) {

                    $.ajax({
                        type: "DELETE",
                        url: "http://localhost:8080/contacts/delete/" + id,
                        headers: {
                                [csrf_header]: csrf_token
                            },
                        success: function() {

                            location.reload();

                        },
                        error : function(error) {
                            console.log(error);
                        }
                    });

                    });



               });