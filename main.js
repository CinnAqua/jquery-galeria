$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault();
        const novoItem = $('<li style="display: none"></li>');
        const novaTarefa = $('#tarefa-nova').val();
        $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('li').click(function(){
            $(this).addClass('check');
        })
        $('#tarefa-nova').val('');
    })
})