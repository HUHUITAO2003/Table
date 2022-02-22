$(function () {
  var dati = [
    {
      "id": 10001,
      "birthDate": "1953-09-01",
      "firstName": "Georgi",
      "lastName": "Facello",
      "gender": "M",
      "hireDate": "1986-06-25",
    },
    {
      "id": 10002,
      "birthDate": "1964-06-01",
      "firstName": "Bezalel",
      "lastName": "Simmel",
      "gender": "F",
      "hireDate": "1985-11-20",
    },
    {
      "id": 10003,
      "birthDate": "1959-12-02",
      "firstName": "Parto",
      "lastName": "Bamford",
      "gender": "M",
      "hireDate": "1986-08-27T22:00:00.000+0000",
    },
    {
      "id": 10004,
      "birthDate": "1954-04-30",
      "firstName": "Chirstian",
      "lastName": "Koblick",
      "gender": "M",
      "hireDate": "1986-11-30",

    },
    {
      "id": 10005,
      "birthDate": "1955-01-20",
      "firstName": "Kyoichi",
      "lastName": "Maliniak",
      "gender": "M",
      "hireDate": "1989-09-11T22:00:00.000+0000",

    }
  ];

  var NextID = 10006

  function printTable() {
    var row = "";
    for (var i = 0; i < dati.length; i++) {
      row = row + "<tr>";
      row = row + "<td>" + dati[i].id + "</td>";
      row = row + "<td>" + dati[i].firstName + "</td>";
      row = row + "<td>" + dati[i].lastName + "</td>";
      row = row + "<td data-id = " + dati[i].id + "> <button type='button' class='btn btn-danger elimina'>Elimina</button> </td>";
      row = row + "</tr>";
    }
    $("tbody").html(row);
  }
  
  $("body").ready(function () {
    printTable();
  });

  $("#aggiungi").bind("click", function (event) {
    

    var nome = $("#nome").val();
    var cognome = $("#cognome").val();
    
    dati.push({
      "id": NextID,
      "birthDate": "1953-09-01",
      "firstName": nome,
      "lastName": cognome,
      "gender": "M",
      "hireDate": "1986-06-25",
    })
    NextID++;
    printTable();
  });

  $(".elimina").bind("click", function (event) {
    for(var i = 0; i < dati.length ; i++){
      if(dati[i]==event.data(id)){
        alert(event.data(id));
        dati.splice(i,1);
      }
    }
    printTable();
  });

});
