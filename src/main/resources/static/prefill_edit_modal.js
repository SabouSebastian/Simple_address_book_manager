$('.editButton').click(function() {
    var $row = $(this).closest('tr');

    var id = $row.find('td').eq(0).text();
    var firstName = $row.find('td').eq(1).text();
    var lastName = $row.find('td').eq(2).text();
    var address = $row.find('td').eq(3).text();
    var phoneNumber = $row.find('td').eq(4).text();

    $('#edit-modal input[name="id"]').val(id);
    $('#edit-modal input[name="firstName"]').val(firstName);
    $('#edit-modal input[name="lastName"]').val(lastName);
    $('#edit-modal input[name="address"]').val(address);
    $('#edit-modal input[name="phoneNumber"]').val(phoneNumber);
  });
