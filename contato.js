// Inicialize o EmailJS com seu USER_ID (chave pública)
emailjs.init('5lAg36PWXiSkV6YET');

// Função para enviar o e-mail
function enviarEmail() {
    // Coleta os dados do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    // Parâmetros do e-mail
    var params = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    // Envio do e-mail
    emailjs.send('default_service', 'template_k9a29ht', params) // Usando 'default_service'
        .then(function(response) {
            console.log('E-mail enviado com sucesso!', response);
            alert('E-mail enviado com sucesso!');
        },
        function (error) {
            console.error('Erro ao enviar o e-mail:', error);
            alert('Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');
        });
}

function enviarEmail() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!nome || !email || !numero || !assunto || !mensagem) {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    errorMessage.textContent = '';
    // Aqui você pode adicionar o código para enviar o email ou processar o formulário.
    alert('Formulário enviado com sucesso!'); // Apenas para exemplo, substitua isso pela lógica de envio real.
}