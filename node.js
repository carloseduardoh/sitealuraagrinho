// Exemplo de JavaScript para adicionar interatividade
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const commentForm = document.getElementById('commentForm');
    const commentList = document.getElementById('commentList');

    // Evento de login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = loginForm.elements['username'].value;
        alert(`Bem-vindo(a), ${username}!`);
        // Aqui você pode adicionar lógica para verificar o login (não implementado neste exemplo básico)
    });

    // Evento de comentário
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = commentForm.elements['name'].value;
        const comment = commentForm.elements['comment'].value;
        
        // Cria um novo elemento para exibir o comentário
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
        
        // Adiciona o comentário à lista de comentários
        commentList.appendChild(newComment);

        // Limpa o formulário após enviar o comentário
        commentForm.reset();
    });
});
