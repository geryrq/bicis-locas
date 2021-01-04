function validateForm() {
	/* Escribe tú código aquí */
	var name = $('#name').val();
	if (name=="") {
		$('#name').parent().append('<span>Ingrese Nombre</span>');
	}
	else if(sonLetrasSolamente(name) ==false) {
		$('#name').parent().append('<span>Solo caracteres de la A-Z</span>');
	}
	var lastname = $('#lastname').val();
	if (lastname=="") {
		$('#lastname').parent().append('<span>Ingrese Apellido</span>');
	}
	else if(sonLetrasSolamente(lastname) ==false) {
		$('#lastname').parent().append('<span>Solo caracteres de la A-Z</span>');
	}
	var inputemail = $('#input-email').val();
	if (inputemail=="") {
		$('#input-email').parent().append('<span>Ingrese Email</span>');
	}
	else if(validarEmail(inputemail) ==false) {
		$('#input-email').parent().append('<span>Ingrese email válido</span>');
	}
	var inputpassword = $('#input-password').val();
	if (inputpassword=="") {
		$('#input-password').parent().append('<span>Ingrese Password</span>');
	}
	if (inputpassword == null || inputpassword.length == 0 || inputpassword == "") {
		alert("Ingresa una contraseña.");
	} else if (inputpassword.length < 6){
		$('#input-password').parent().append('<span>Contraseña no válida, debe tener como mínimo 6 caracteres</span>');
	}

	if (inputpassword== "123456" || inputpassword== "098754" || inputpassword== "password") {
		$('#input-password').parent().append('<span>Su password debe ser distinto de "123456", "098754" y "password", intenta de nuevo por favor</span>');
	};
}

function validarEmail(valor) {
  if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
   return true;
  } else {
   return false;
  }
}

function sonLetrasSolamente(valori){
	if(/^[a-zA-Z ]+$/.test(valori)){
	return true;}
	else {
			return false;
	}
	}