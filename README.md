# [FullCycle](https://fullcycle.com.br/)-test

## Tecnologias

* React
* TypeScript
* Docker


OBS: Devido a uma sequência de erros com typescript na parte do front-end o projeto foi finalizado em javascrip.<br>

As imagens dos containers: node-image ou id 7ce4c0a2a7b2. <br/>
As imagens foram criadas somente para o back-end.<br/>

 Para rodar o back-end: npm start.

* Criar uma imagem: docker build -t <nomedaimagem> <./caminhodoseuarquivo>
* Listar as imagens: docke image ls.
* Criar container da imagem: docker run -d -p <qualquer:porta> --name <nomedocontainer> <nomedaimagem>
* Listar os containers: docker ps.
* Parar um container: docker stop <nomeou id docontainer>.
* Apagar constainer: docker rm <nome ou id> --force
* Apagar imagem: docker rmi <nome ou id> --force
* Startar o container novamente: docker start <nomedoconatiner ou id>
* Usar imagem da internet docker run -it <nomedaimagem ou id>
 
 Video do projeto funcionando: https://www.loom.com/share/e363a1ce62464837b2617b8ac2c7372e <br>

 Para rodar o front-end: npm start.
