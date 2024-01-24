import Component from "./Component.js";
import Input from "./Inputs.js";
import Label from "./Label.js";
import Form from "./Form.js";

const title = new Component('h1', 'body', { textContent: 'Teste' });
title.render();

const form = new Form('body');

const label = new Label('Nome: ', form, { htmlFor: 'nameInput' });
const input = new Input(form, { id: 'nameInput', name: 'birthday' });

form.render()

label.render()
input.render()

form.addChildren(input)
form.addChildren(
    new Component('br', ''),
    new Component('br', ''),
    new Label('data de Nascimento: ', form, { htmlFor: 'birthdayInput' }),
    new Input(form, { type: 'date' })
)