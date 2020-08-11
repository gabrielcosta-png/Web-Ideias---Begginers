## :bookmark_tabs: To do list
## Projeto inspirado na aula starter de javascript do Rockseat e no designer do Carlos da Costa [Carlos da Costa](https://blog.usejournal.com/develop-a-to-do-list-app-in-vanilla-javascript-95377ec370c5)


### HTML
(index.html)
| Elemento | Função | Conteudo
| ------ | ------ | ------|
| Meta charset  | Definir conjunto de caracteres| UTF-8
| Title | Titulo da pagina | To do List
| h1 | Definir cabeçalhos HTML |To do List
| Id / Class| Especificar algum elemento | app / background
| Input type="text"| Caixa de texto | 
| Placeholder | Uma dica ao usuário  | Digite uma tarefa
| Button | Cria um botão clicável  | ADD
| ul | lista não ordenada de itens  | Tarefas
| script | Usada para incorporar um script  | "todos.js"
[Fonte](https://www.tutorialrepublic.com/html-reference)


### JavaScript
(todos.js)
| Variavel/Função | Função | Comando
| ------ | ------ | ------|
| var listElement  | Procurar no html o elemento ul| document.querySelector('#app ul');
| var inputElement | Procurar no html o elemento input | document.querySelector('#app input');
| var buttonElement | Procurar no html o elemento botão |document.querySelector('#app button')
| var todos| Transformar os dados salvos em Json para uma array/Busca a array em Json salvos   | JSON.parse(localStorage.getItem('list_todos')) ou []
| Input type="text"| Caixa de texto | 
| function renderTodos | Rendezirar as tarefas  | function renderTodos
| listElement.innerHTML| Remover todo conteudo do listElement para não repitir as tarefas | listElement.innerHTML ='';
|  for (todo of todos) | loops ou repitição sobre objetos iteráveis, como arrays, strings, etc |  for (todo of todos)
|  var todoElement | Cria o elemento li  | document.createElement('li')
| var todoText | Cria elemento de texto  | document.createTextNode(todo);
| var linkElement | Cria elemento a  | document.createElement('a');
| linkElement.setAttribute | Adicionando elemento href(link)  | linkElement.setAttribute('href','#');
| var linkText | Cria elemento de texto  | document.createTextNode('Excluir');
| var pos | Procurar a posição de cada item no array | todos.indexOf(todo);
| linkElement.setAttribute | Adiciona atributo(no clique) mais uma função + concatenar strings | ('onclick','deleteTodo('+ pos +')')
|  linkElement.appendChild(linkText) | adiciona o novo elemento no final de um elemento |  linkElement.appendChild(linkText)
| todoElement.appendChild(todoText); | adiciona o novo elemento no final de um elemento | todoElement.appendChild(todoText);
|  todoElement.appendChild(linkElement); | adiciona o novo elemento no final de um elemento |  todoElement.appendChild(linkElement);
|  listElement.appendChild(todoElement); | adiciona o novo elemento no final de um elemento |  listElement.appendChild(todoElement);
|  function addTodo | Adicionar uma tarefa  | function addTodo(){}
|  var todoText | Adicionar um valor em uma variavel  | inputElement.value
|  todos.push(todoText) | Adiciona um final de um array  | todos.push(todoText)
|  savetoStorage | Armazena os dados na memoria local  | savetoStorage
|  buttonElement.onclick | Adiciona uma função no elemento botão  | buttonElement.onclick = addTodo;
|  function deleteTodo(pos){} | Função delete tarefa  | document.createElement('li')
|  todos.splice | Recebe a posição no valor e remove um valor na proxima posição   | todos.splice(pos,1);
|  function savetoStorage(){}| Armazenamento local   | function savetoStorage(){}
|   localStorage.setItem('list_todos', JSON.stringify(todos))| Armazenar elementos no formato json   |  localStorage.setItem('list_todos', JSON.stringify(todos))
