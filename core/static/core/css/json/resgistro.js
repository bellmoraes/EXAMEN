$(function()
{
    let numeros = '1234567890';
    let letras  = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM ';
    
    $('.txtRut').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;
    })
    $('.txtDv').keypress(function(e)
    {
        let patron = numeros + 'kK';
        let caracter = String.fromCharCode(e.which);
        if(patron.indexOf(caracter) < 0)
            return false;
    })
    $('.txtNombre').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;
    })
    $('.txtEmail').keypress(function(e)
    {
        let patron = letras + numeros + '@._-';
        let caracter = String.fromCharCode(e.which);
        if(patron.indexOf(caracter) < 0)
            return false;
    })

    $('.txtFono').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;
    })

    $('.btnLimpiar').click(function()
    {
        $('.txtRut, .txtDv, .txtNombre,.txtApellido ,.txtEmail ,.txtFono ').val('');
        $('.txtRut').focus();
    });


    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/

    $('.btnRegistrar').click(function()
    {
        if(!$.trim($('.txtRut').val()))
        {
            alert("Debe especificar rut");
            $('.txtRut').focus();
        }
        else  if(!$.trim($('.txtDv').val()))
        {
            alert("Debe especificar dv");
            $('.txtDv').focus();
        }
        else  if(! esValidoElRut($('.txtRut').val(),$('.txtDv').val()))
        {
            alert("El rut no es válido");
            $('.txtRut , .txtDv').focus();
        }
        else  if(!$.trim($('.txtNombre').val()))
        {
            alert("Debe especificar nombre");
            $('.txtNombre').focus();
        }
        else  if(!$.trim($('.txtEmail').val()))
        {
            alert("Debe especificar email");
            $('.txtEmail').focus();
        }
        else  if(!emailRegex.test(($('.txtEmail').val())))
        {
            alert("El formato del correo no es válido");
            $('.txtEmail').focus();
        }
        else  if(!$.trim($('.txtFono').val()))
        {
            alert("Debe especificar numero de contacto");
            $('.txtFono').focus();
        }

    })

    function esValidoElRut(Rut,Digito)
    {
		let factor          = 2;
		let sumaProducto    = 0;
		let con             = 0;
		let caracter     	= 0;
 
		for( con=Rut.length-1; con>=0; con--)
		{
			caracter = Rut.charAt(con);
			sumaProducto += (factor * caracter);
			if (++factor > 7)
				factor=2;		
		}
 
        let digitoCaracter= "-123456789K0".charAt(11-(sumaProducto % 11));
        return digitoCaracter == Digito.toUpperCase();            
    }    

});