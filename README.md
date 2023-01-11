# full_node_nginx
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.

## Principais comandos 

para iniciar o projeto precisamos do docker-compose, com o docker-compose utilize o seguinte comando para buildar e subir o projeto
```
docker-compose up -d
```
Caso queira fazer o build novamente use o segundo comando
```
docker-compose up -d build
```
Após a finalização dos comandos você já pode acessar o [node](http://localhost:8080/)
## Para listar a conexão do banco de dados Mysql
Primeiro crie uma pasta mysql

Listando a conexão com o banco de daos mysql [list](http://localhost:8080/list)