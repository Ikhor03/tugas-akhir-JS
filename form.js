function buat_login() {
    let elem = document.getElementById('x');
    elem.parentElement.removeChild(elem);
    let p = document.createElement('p');
    p.className = 'tulisan_login';
    p.innerHTML = 'Silahkan Log in';
    let element = document.getElementsByTagName('div')[0];
    element.appendChild(p);
    
    // Create Form
    let form = document.createElement('form');

    //label Nama User
    let label0 = document.createElement('label');
    label0.innerHTML = 'Nama User';
    let input_name = document.createElement('input');
    input_name.type = 'text'
    input_name.name = 'nama'
    input_name.placeholder = 'Nama User' 
    input_name.className = 'form_login'

    element.appendChild(form);
    form.appendChild(label0);
    form.appendChild(input_name);
   
    //label No.HP
    let label1 = document.createElement('label');
    label1.innerHTML = 'No. Handphone';
    let input_num = document.createElement('input');
    input_num.type = 'text'
    input_num.name = 'nama'
    input_num.placeholder = 'No. HP' 
    input_num.className = 'form_login'

    element.appendChild(form);
    form.appendChild(label1);
    form.appendChild(input_num);
    
    //label username
    let label = document.createElement('label');
    label.innerHTML = 'Username';
    let input_username = document.createElement('input');
    input_username.type = 'text'
    input_username.name = 'username'
    input_username.placeholder = 'username atau email'
    input_username.className = 'form_login'

    element.appendChild(form);
    form.appendChild(label);
    form.appendChild(input_username);
    
    //label password
    let label2 = document.createElement('label');
    label2.innerHTML = 'Password';
    let input_password = document.createElement('input');
    input_password.type = 'password'
    input_password.name = 'password'
    input_password.placeholder = 'password'
    input_password.className = 'form_login'

    element.appendChild(form);
    form.appendChild(label2);
    form.appendChild(input_password);

        //label submit
    let submit = document.createElement('input');
    submit.type = 'submit'
    submit.innerHTML = 'Daftar Sekarang'
    submit.className = 'tombol_login'

    form.appendChild(submit);
}

