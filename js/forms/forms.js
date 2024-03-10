const init = function(){
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-send').addEventListener('click', send);
}

const reset = function(ev){
    //HTML will automatically put the form back to its initial state
    //unless we do
    ev.preventDefault();
    //programmatically we can reset it document.getElementById('form-user').reset()
    document.getElementById('form-user').reset();
    //if you want to do anything else... input type='reset'
}

const send = function(ev){
    ev.preventDefault();
    ev.stopPropagation();
    let fails = validate();

    if(fails.length === 0){
        document.getElementById('form-user').submit();
    } else {
        fails.forEach(function(obj){
            let field = document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data-errormsg', obj.msg);
        })

        let err = document.querySelector('.error');
        let input = err.querySelector('input');
        err.setAttribute('data-errormsg', `  ...Missing ${input.placeholder}`)
    }
}

const validate = function(){
    let failures = [];

    let chk = document.getElementById('input-alive');

    if(!chk.checked){
        failures.push({input: 'input-alive', msg: 'Must be alive to submit.'});
    }

    let select = document.getElementById('input-age');
    //.selectedIndex >?.selectedValue == .value  .options === array .length

    if (select.selectedIndex === 0){
        failures.push({input: 'input-age', msg:'Too younge'});
    }

    let first = document.getElementById('input-first');
    let password = document.getElementById('input-password');
    let email = document.getElementById('input-email');
    if(first.value === ""){
        failures.push({input: 'input-first', msg: 'Required Field'});
    }

    let reg = new RegExp('^[A-Za-z@\\-\\*\\+1-9]+$')
    if(password.value === "" || password.value.legth < 8 || !reg.test(password.value)){
        failures.push({input: 'input-password', msg:'Must be at least 8 chars'});
    }

    let reg2 = /^[A-Za-z1-9@]+$/
    if(email.value === "" || !reg2.test(email.value)){
        failures.push({input: 'input-email', msg: 'Required Field'});
    }

    return failures;
}

document.addEventListener('DOMContentLoaded', init);