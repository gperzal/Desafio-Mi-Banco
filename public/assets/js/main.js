$(document).ready(function () {
    // Consultar saldo
    $('#form-saldo').on('submit', function (e) {
        e.preventDefault();
        const cuentaId = $('#cuentaIdSaldo').val();
        $.get(`/api/saldo/${cuentaId}`, function (data) {
            $('#saldoRespuesta').text(`Saldo: ${data.saldo}`);
        });
    });

    // Ingresar transacción
    $('#form-transaccion').on('submit', function (e) {
        e.preventDefault();

        const fechaFormateada = formatearFecha(new Date());

        //Recoger los valores del formulario y construir el objeto de la transacción.
        const transaccion = {
            descripcion: $('#descripcion').val(),
            cuentaOrigen: parseInt($('#cuentaOrigen').val(), 10),
            cuentaDestino: parseInt($('#cuentaDestino').val(), 10),
            monto: parseFloat($('#monto').val()),
            // Suponiendo que tienes un input para la fecha en tu formulario:
            fecha: fechaFormateada
        };

        // Configurar la solicitud AJAX
        $.ajax({
            url: '/api/transferencias',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(transaccion), // Convertir el objeto de la transacción a una cadena JSON
            success: function (response) {
                alert('Transacción realizada con éxito');
                // Limpia el formulario o actualiza la interfaz según sea necesario.
            },
            error: function (xhr, status, error) {
                alert('Error al realizar la transacción');
                // Puedes hacer más manejo de errores aquí basado en xhr.responseText o status
            }
        });


    });

    // Consultar últimas transacciones
    $('#form-ultimas-transacciones').on('submit', function (e) {
        e.preventDefault();
        const cuentaId = $('#cuentaIdTransacciones').val();
        $.get(`/api/transferencias/${cuentaId}`, function (data) {
            $('#tablaTransacciones').empty(); // Limpia la tabla antes de añadir nuevas filas
            data.forEach((transaccion, index) => {
                const fechaFormateada = formatearFecha(transaccion.fecha); // Formatea la fecha
                $('#tablaTransacciones').append(`
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${transaccion.descripcion}</td>
                        <td>${fechaFormateada}</td> <!-- Usa la fecha formateada aquí -->
                        <td>${transaccion.monto}</td>
                    </tr>
                `);
            });
        });
    });
});




function formatearFecha(fechaIso) {
    const fecha = new Date(fechaIso);
    const dia = `0${fecha.getDate()}`.slice(-2); // Añade un '0' si es necesario y toma los últimos 2 dígitos
    const mes = `0${fecha.getMonth() + 1}`.slice(-2); // Los meses empiezan desde 0, por eso el +1
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
}