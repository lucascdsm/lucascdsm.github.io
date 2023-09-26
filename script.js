function criptografar() {
    var texto = document.getElementById("texto").value;
    var senha = document.getElementById("senha").value;
    var textoCriptografado = CryptoJS.AES.encrypt(texto, senha).toString();
    document.getElementById("resultado").value = textoCriptografado;
}

function descriptografar() {
    var textoCriptografado = document.getElementById("resultado").value;
    var senha = document.getElementById("senha").value;
    var textoDescriptografado = CryptoJS.AES.decrypt(textoCriptografado, senha).toString(CryptoJS.enc.Utf8);
    document.getElementById("resultado").value = textoDescriptografado;
}
