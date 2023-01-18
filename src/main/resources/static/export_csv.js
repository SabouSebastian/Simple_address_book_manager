
        function downloadCSVFile(csv_data) {

            CSVFile = new Blob([csv_data], {
                type: "text/csv"
            });
            console.log(CSVFile);
            var temp_link = document.createElement('a');

            temp_link.download = "contacts.csv";
            var url = window.URL.createObjectURL(CSVFile);
            temp_link.href = url;

            temp_link.style.display = "none";
            document.body.appendChild(temp_link);

            temp_link.click();
            document.body.removeChild(temp_link);
        }

$('#export_csv_button').click(function () {
                    var csv_data = [];

                    var rows = document.getElementsByTagName('tr');
                    for (var i = 0; i < rows.length; i++) {
                        var cols = rows[i].querySelectorAll('td:not(.row_buttons),th:not([id])');
                        var csv_row = [];
                        for (var j = 0; j < cols.length; j++) {
                            csv_row.push(cols[j].innerHTML);
                        }
                        csv_data.push(csv_row.join(","));
                    }
                    csv_data = csv_data.join('\n');
                    downloadCSVFile(csv_data);

                });