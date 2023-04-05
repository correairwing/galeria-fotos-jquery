$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const newImgAdress = $('#newImgAdress').val();
        const newItem = $('<li style="display: none></li>');
        $(`<img src="${newImgAdress}"/>`).appendTo(newItem);
        $(`
        <div class="imageLink">
            <a href="${newImgAdress}" target=_blank title="Verimgaem em tamanho real">Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(2000);
        $('#newImgAdress').val('')
    })
})