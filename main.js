const form = document.forms.entrada;
        form.addEventListener('subimit', envia);

        let estado = 0;

        atualiza();

        function envia(evento){
            evento.preventDefault();
            console.log('Formulario enviado!');
            estado++;
            atualiza();
        }
        function atualiza(){
           const ol = document.querySelector('ol');
            ol.innerHTML = <li>$(estado)</li>;
        }