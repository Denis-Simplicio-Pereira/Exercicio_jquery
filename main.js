$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefas = $('#tarefa').val();
        const listaTarefa = $('<li></li>');
        $(`<ul>${tarefas}</ul>`).appendTo(listaTarefa);
        $(listaTarefa).appendTo('ul');
        $('#tarefa').val('');
        $('trf').click(()=>{
            $('trf').css({"text-decoration":"line-through"});
        })
    })
})