$(function () {/*
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
*/
  var dati;

  function getDati(url){
    $.get( url, function(data) {
      dati = data;
      console.log(data);
      printTable(data['_embedded']['employees']);
      $("#self").html(data['page']['number']+1);
      if(data['page']['number']==0){
        $(".zero").css("display","none");
      }else{
        $(".zero").css("display","inline");
      }
      if(data['page']['number']+1==data['page']['totalPages']){
        $(".ultm").css("display","none");
      }else{
        $(".ultm").css("display","inline");
      }
    })
  };

  function printTable(dati) {
    var row = "";
    for (var i = 0; i < dati.length; i++) {
      row = row + "<tr>";
      row = row + "<td>" + dati[i].id + "</td>";
      row = row + "<td>" + dati[i].firstName + "</td>";
      row = row + "<td>" + dati[i].lastName + "</td>";
      row = row + '<td data-id = "' + dati[i].id + '"> <button type="button" class="btn btn-primary edit" data-bs-toggle="modal" data-bs-target="#editmodal" data-bs-whatever="@mdo">Modifica</button><button type="button" class="btn btn-danger elimina">Elimina</button> </td>';
      row = row + "</tr>";
    }
    $("tbody").html(row);
  }

  
  $(".pagina").bind("click", function (event) {
    console.log($(this).attr('id'));
    getDati(dati['_links'][$(this).attr('id')]['href']);
  });

  $("body").ready(function () {
    getDati("http://localhost:8080/employees");
  });
/*
  $("#aggiungi").bind("click", function (event) {
    

    var nome = $("#nome").val();
    var cognome = $("#cognome").val();
    
    dati.push({
      "id": NextID,
      "birthDate": "",
      "firstName": nome,
      "lastName": cognome,
      "gender": "Trans",
      "hireDate": "1986-06-25",
    })
    NextID++;
    printTable();
  });

  $("body").on("click", ".elimina", function (event) {
    for(var i = 0; i < dati.length ; i++){
      if(dati[i].id==$(this).parent().attr("data-id")){
        dati.splice(i,1);
        break;
      }
    }
    printTable();
  });

  $("body").on("click", ".edit", function (event) {

    for(var i = 0; i < dati.length ; i++){
      if(dati[i].id==$(this).parent().attr("data-id")){
        $("#editnome").val(dati[i].firstName);
        $("#editcognome").val(dati[i].lastName);
        $("#salva").val(dati[i].id);
        break;
      }
    }
    printTable();
  });


  $("#salva").bind("click", function (event) {
    
    var nome = $("#editnome").val();
    var cognome = $("#editcognome").val();
    for(var i = 0; i < dati.length ; i++){
      if(dati[i].id==$(this).val()){
        dati[i]={
          "id": $(this).val(),
          "birthDate": "",
          "firstName": nome,
          "lastName": cognome,
          "gender": "Trans",
          "hireDate": "1986-06-25",
        }
        break;
      }
    }
    printTable();
  });
*/
});
