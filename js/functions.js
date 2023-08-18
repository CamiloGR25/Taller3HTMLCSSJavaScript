$("#nuevoLibro").click(function() {
    var nombre = $("#nombre").val(); //capturar el valor del campo con id nombre
    var autor = $("#autor").val(); 
    var genero = $("#genero").val();
    var codigo = $("#codigo").val();
    var año = $("#año").val();
    var cantidad = $("#cantidad").val();
    var costo= $("#costo").val();
    var editorial = $("#editorial").val();
    var descuento = $("#descuento").val();
    
    //agrega un nuevo registro a la tabla, después del último tr:
    $('#libro tr:last').after('<tr><td>' + nombre + '</td><td>' + autor + '</td><td>' + genero +'</td><td>' + codigo + '</td><td>' +año+'</td><td>'+ cantidad +'</td><td>' + costo + '</td><td>' + editorial + '</td><td>' + descuento + '</td></tr>'); 
    $('#nuevoLibroModal').modal('toggle'); //cierra el modal
});

$("#limpiar").click(function() {
    document.getElementById("nombre").value= '';
    document.getElementById("autor").value= '';
    document.getElementById("genero").value= '';
    document.getElementById("codigo").value= '';
    document.getElementById("año").value= '';
    document.getElementById("cantidad").value= '';
    document.getElementById("costo").value= '';
    document.getElementById("editorial").value= '';
    document.getElementById("descuento").value= '';


});