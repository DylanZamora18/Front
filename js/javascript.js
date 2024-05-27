$(document).ready(() => {
    const [nombre, correo, celular, comentarios] = ["#nombre", "#correo", "#celular", "#comentarios"].map(id => $(id))
    let variables = [nombre, correo, celular, comentarios]
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    $("#S-errores").hide();
    $("#S-completado").hide();

    $("#btn-enviar").click( () => { 
        const formCompletado = $("#S-completado");
        const formIncompleto = $('#S-errores');
        console.log(`${nombre.val()}\n${correo.val()}\n${celular.val()}\n${comentarios.val()}`);
        if((nombre.val() !== "") && (correo.val() !== "") && (celular.val() !== "") && (comentarios.val() !== "")){
            formCompletado.show();
            formCompletado.text("Se ha ingresado los valores correctamente");
            formIncompleto.hide()
            variables.forEach(campo => campo.val(" "));
        }else{
            formIncompleto.show();
            formIncompleto.text("¡ERORR!, Uno de lo campos no esta completo");
            formCompletado.hide();
        }
    });
});