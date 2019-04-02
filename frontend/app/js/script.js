VK.init({
    apiId: 6922792
});
VK.Auth.login(function(response) {
    if (response.session) {
        console.log('всё ок!');
    } else {
        alert('Не удалось авторизоваться');
    }
}, 8);