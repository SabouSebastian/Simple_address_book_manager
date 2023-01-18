$("input:checkbox").click(function() {
    $("input:checkbox").not(this).prop("checked", false);
});

$('#searchInput').keyup(function(event) {
                    $.ajax({
                        type: "GET",
                        url: "http://localhost:8080/contacts",
                        success: function(result) {

                                 filter_value = $("#search_filter :selected").val();
                                 let arr = [];
                                 if($('#byFirstName').prop("checked"))
                                 for(let i = 0; i < result.length; ++i) arr.push(result[i].firstName);
                                 else if($('#byLastName').prop("checked"))
                                 for(let i = 0; i < result.length; ++i) arr.push(result[i].lastName);
                                 else if($('#byAddress').prop("checked"))
                                 for(let i = 0; i < result.length; ++i) arr.push(result[i].address);

                                 autocomplete(arr);

                        },
                        error : function() {
                            console.log("Failed request");
                        }
                    });
               });

 $('#searchButton').click(function(event) {

                input_text = $("#searchInput").val();
                rows = $("tr");
                filter = input_text.toUpperCase();
                filter_value = $("#search_filter :selected").val();
                for(i = 0; i < rows.length;++i) {
//                    if(filter_value == 1)
//                        td = rows[i].getElementsByTagName("td")[2];
//                    if(filter_value == 2)
//                        td = rows[i].getElementsByTagName("td")[3];
//                    if(filter_value == 3)
//                        td = rows[i].getElementsByTagName("td")[4];
                    if ($('#byFirstName').is(":checked")) {
                          td = rows[i].getElementsByTagName("td")[1];
                          $( "#byLastName" ).prop( "checked", false );
                          $( "#byAddressName" ).prop( "checked", false );
                      } else
                        if ($('#byLastName').is(":checked")) {
                           td = rows[i].getElementsByTagName("td")[2];
                           $( "#byFirstName" ).prop( "checked", false );
                           $( "#byAddressName" ).prop( "checked", false );
                      }
                      else
                        if ($('#byAddressName').is(":checked")) {
                            td = rows[i].getElementsByTagName("td")[3];
                            $( "#byFirstName" ).prop( "checked", false );
                            $( "#byFirstName" ).prop( "checked", false );
                      }

                    if (td) {
                          txtValue = td.textContent || td.innerText;
                          if (txtValue.toUpperCase().indexOf(filter) > -1) {
                            rows[i].style.display = "";
                          } else {
                            rows[i].style.display = "none";
                          }

                          }

                     }
               });

  function autocomplete(arr) {
    let searchInput = document.getElementById("searchInput");

    var currentFocus;

    searchInput.addEventListener("input", function(e) {

        var a, b, i, val = this.value;

        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;

        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        this.parentNode.appendChild(a);

        for (i = 0; i < arr.length; i++) {

          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

            b = document.createElement("DIV");

            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);

            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

                b.addEventListener("click", function(e) {

                searchInput.value = this.getElementsByTagName("input")[0].value;

                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });

    function addActive(x) {

      if (!x) return false;

      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);

      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(element) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (element != x[i] && element != searchInput) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

autocomplete();