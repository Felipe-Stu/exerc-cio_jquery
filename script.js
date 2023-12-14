$('button').click('submit', function(e){
    e.preventDefault();
    //criei a variável do valor do input
    const tarefaInformada=$('input').val()

    //Crio variável que adicionar linha com a tarefa que veio do input
    const novaLinha=$(`<li class="tarefa-item">${tarefaInformada}</li>`);
    
    //Pego essa variável e acrescento no ul
    $(novaLinha).appendTo('ul')

    //Limpo o input
    $('input').val('')
})

$(document).on('click', 'li:not(.titulo-tarefas)', function() {
    $(this).toggleClass('tarefa-concluida');
});



