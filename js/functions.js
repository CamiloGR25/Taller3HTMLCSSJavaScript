$("#nuevoLibro").click(function() {
    var nombre = $("#nombre").val(); //capturar el valor del campo con id nombre
    var autor = $("#autor").val(); 
    var genero = $("#genero").val();
    var codigo = $("#codigo").val();
    var año = $("#año").val();
    var cantidad = $("#cantidad").val();
    var costo= $("#costo").val();
    var editorial = $("#editorial").val();
    //agrega un nuevo registro a la tabla, después del último tr:
    $('#libro tr:last').after('<tr><td>' + nombre + '</td><td>' + autor + '</td><td>' + genero +'</td><td>' + codigo + '</td><td>' +año+'</td><td>'+ cantidad +'</td><td>' + costo + '</td><td>' + editorial + '</td></tr>'); 
    $('#nuevoLibroModal').modal('toggle'); //cierra el modal
});
