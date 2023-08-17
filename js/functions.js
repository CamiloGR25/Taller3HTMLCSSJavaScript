$("#nuevoLibro").click(function() {
    var nombre = $("#nombre").val(); //capturar el valor del campo con id nombre
    var autor = $("#autor").val(); 
    var genero = $("#genero").val();
    var codigo = $("#codigo").val();
    var año = $("#año").val();
    var cantidad = $("#canitidad");
    $('#libro tr:last').after('<tr><td>' + nombre + '</td><td>' + autor + '</td></tr>'); //agrega un nuevo registro a la tabla, después del último tr
    $('#nuevoLibroModal').modal('toggle'); //cierra el modal
});
