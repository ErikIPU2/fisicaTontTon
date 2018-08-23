function calcular() {
    
    if (!pickValue("#variComprimento")) {

        if (emptyInputs("#variComprimento")) {
            toast("Campos faltando")
        }
        else {
            let inicComprimento =  pickValue("#inicialComprimento");
            let coef = pickValue("#coef");
            let temp = pickValue("#temp");

            let result = inicComprimento*coef*temp;
            putValue("#variComprimento", result);
        }
        
    }
    else if (!pickValue("#inicialComprimento")) {
        
        if (emptyInputs("#inicialComprimento")) {
            toast("Campos faltando");
        }
        else {
            let variComprimento = pickValue("#variComprimento");
            let coef = pickValue("#coef");
            let temp = pickValue("#temp");
            
            let result = (variComprimento)/(coef*temp);
            putValue("#inicialComprimento", result);
        }

    }
    else if (!pickValue("#coef")) {

        if (emptyInputs("#coef")) {
            toast("Campos faltando")
        }
        else {
            let variComprimento = pickValue("#variComprimento");
            let inicComprimento = pickValue("#inicialComprimento");
            let temp = pickValue("#temp");

            let result = (variComprimento)/(inicComprimento*temp);
            putValue("#coef", result);
        }

    }
    else if (!pickValue("#temp")) {

        if (emptyInputs("#temp")) {
            toast("Campos faltando");
        }
        else {
            let variComprimento = pickValue("#variComprimento");
            let inicComprimento = pickValue("#inicialComprimento");
            let coef = pickValue("#coef");

            let result = (variComprimento)/(inicComprimento*coef);
            putValue("#temp", result);
        }
    }
    else {
        toast('Deixe em branco o campo que você quer calcular')
    }
}




function pickValue(element) {
    return document.querySelector(element).value;
}

function putValue(element, value) {
    document.querySelector(element).value = value;
}

function emptyInputs(ignore) {
    if (!pickValue("#variComprimento") && ignore != "#variComprimento") return true;
    if (!pickValue("#inicialComprimento") && ignore != "#inicialComprimento") return true;
    if (!pickValue("#coef") && ignore != "#coef") return true;
    if (!pickValue("#temp") && ignore != "#temp") return true;

    return false;
}

function toast(mesage) {
    M.toast({html : mesage})
}