## :bookmark_tabs: To do list
## Projeto inspirado na aula starter de javascript do Rockseat e no designer do Carlos da Costa [Carlos da Costa](https://blog.usejournal.com/develop-a-to-do-list-app-in-vanilla-javascript-95377ec370c5)


### HTML
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
| Variavel/Função | Função | Comando
| ------ | ------ | ------|
| var listElement  | Procurar no html o elemento ul| document.querySelector('#app ul');
| var inputElement | Procurar no html o elemento input | document.querySelector('#app input');
| var buttonElement | Procurar no html o elemento botão |document.querySelector('#app button')
| var todos| Transformar os dados salvos em Json para uma array/Busca a array em Json salvos   | JSON.parse(localStorage.getItem('list_todos')) ou []
| Input type="text"| Caixa de texto | 
| function renderTodos | Uma dica ao usuário  | Digite uma tarefa
| Button | Cria um botão clicável  | ADD