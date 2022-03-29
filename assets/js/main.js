$(()=>{

    const rutaServidor = 'http://localhost:8080';

    $(document).on('click', '#btnRegistrar', function(){
        if(confirm('¿seguro que desea regisstrar una nuea persona?')){
            $.ajax({
                url: `${rutaServidor}/registrar`,
                method: 'get',
                dataType: 'html',
                success: function(respuesta){
                    alert(respuesta)
                    listar();
                }
            })
        }

    })

    let listar = ()=>{
        $.ajax({
            url: `${rutaServidor}/listado`,
            method: 'get',
            dataType: 'json',
            success: function(respuesta){
                $('#actualizacion').html(respuesta.ultima_modificacion)
                console.log(respuesta)
                $('#tablaPersonas tbody').html('')
                respuesta.personas.forEach(persona=>{
                    $('#tablaPersonas tbody').append(`
                        <tr>
                            <td>${persona.id}</td>
                            <td>${persona.name.title}</td>
                            <td>${persona.name.first}</td>
                            <td>${persona.name.last}</td>
                            <td>${persona.gender}</td>
                            <td><a href="" class="btn btn-info">Detalles<a></td>
                        <tr>
                    
                    
                    
                    `)
                })
            }
        })
        
    }
    listar()
})