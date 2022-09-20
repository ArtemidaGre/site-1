function login_f(console_user){
    var login_input = document.getElementById('login_i');
    var login_text = login_input.value;
    var users = {
        developer: login_text=='dev',
        test: login_text=='test',
        putin: login_text=='putin'
    }
    var to_go = 'user/'+login_text+'.html'
    window.open(to_go, '_self')
    console.log(users)
}


