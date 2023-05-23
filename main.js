const form = document.forms.entrada;
        form.addEventListener('subimit', envia);

        function envia(evento){
            evento.preventDefault();
            console.log('Formulario enviado!');