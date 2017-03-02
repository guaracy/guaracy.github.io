+++
date = "2017-01-25"
title = "Seu blog no GitHub"
tags = ["github", "blog", "nikola", "emacs"]
categories = ["tutoriais"]
slug = "seu-blog-no-github"
draft = false
+++

Para quem está impaciente (**TL;DR**), basta seguir os 8 passos abaixo para ter seu blog funcionando. Mas é interessante ler o resto do texto.


1. Crie um repositório no `GitHub <https://github.com/>`__ com o nome **usuário**.github.io
2. Clone o repositório localmente
   ::
 
      git clone https://github.com/usuário/usuário.github.io.git ~/blog
3. Crie seu blog com o `Nikola <https://getnikola.com>`__
   ::
      
       cd ~/blog
       nikola init meublog
       mv meublog/* .
       rm -r meublog
4. Crie uma entrada e edite o texto
   ::

      nikola new_post -e
5. Gere o blog e teste localmente
   ::

      nikola build
      nikola serve -b
6. Coloque o blog no github
   ::

      nikola github_deploy
7. Repita as etapas 4 a 6 para criar outras entradas no blog
8. Seja feliz.

  
.. TEASER_END
   
----

:PRIMEIROS PASSOS:
   O GitHub permite que o usuário armazene páginas estáticas para servir como um site ou blog pessoal. Eles indicam utilizar o Jekyll mas eu vou usar o `Nikola <https://getnikola.com>`__. Se você deseja informações de como criar o site com o Jekyll, o Wanderson criou um `artigo <https://wandersonwhcr.github.io/github/2017/01/20/paginas-pessoais-no-github.html>`__ sobre criação de páginas pessoais no GitHub e Jekyll

   Basicamente o usuário apenas deverá criar um repositório com o nome **usuário**.github.io que abrigará o conteúdo do site. O site ficará disponível no endereço **`https://usuário.github.io`**.

----

:CLONANDO O SITE LOCALMENTE:
   O próximo passo é clonar o repositório para que você possa efetuar a criação, alterações, testes no site localmente antes de enviar para o GitHub. Para tanto, digite na linha de comando :code:`git clone https://github.com/usuário/usuário.github.io.git ~/blog`. Isto deverá clonar seu repositório em um diretório chamado `blog`.

----

:CRIANDO O SITE LOCAL:   
   Parto do princípio de que você já tenha seguido os passos do `site <https://getnikola.com/getting-started.html>`__ e instalado o Nikola. É necessário criar a estrutura do seu site digitando:
   ::
      	  
      cd ~/blog
      nikola init meublog
      mv meublog/* .
      rm -r meublog   

   O que fizemos aqui foi:

   1. Com :code:`cd ~/blog` para irmos ao diretório de trabalho que foi clonado do GitHub e contém o seu site.
   2. Após :code:`nikola init meublog`, responda as perguntas corretamente e será criado a estrutura do site em um subdiretório chamado `meublog`.
   3. Usamos :code:`mv meublog/* .` para mover a estrutura criada pelo Nikola do subdiretório `meublog` para o raiz (`blog`).
   4. Finalmente, :code:`rm -r meublog` irá remover o subdiretório `meublog` que não é mais necessário.

   Agora podemos começar a entrar com as páginas para, depois, entregar o nosso blog ao público.
   
----

:CRIANDO AS PÁGINAS:
   Para criar uma nova página para o blog, basta o comando :code:`nikola new_post -e`. Será perguntado o título da página e o parâmetro **-e** irá abrir o editor padrão para a edição da página. Você poderá editar quando desejar para complementá-la ou efetuar qualquer alteração. Ela estará disponível no subdiretório `posts`.

   É importante salientar que, o formato padrão em caso de omissão, é **.rst** (reStructuredText) e não **.md** (Markdown) como é padrão no GitHub. Não é nenhum problema pois no GitHub apenas as páginas **.html** geradas que interessam. O **rst** é um formato de marcação mais poderoso que o **md** e cmais chatinho para algumas coisas. Você pode olhar a `introdução rápida <https://getnikola.com/quickstart.html>`__ para ter uma pequena ideia de como funciona. Se você acha que está velho ou está com preguiça para aprender alguma coisa nova e só editará páginas se for em Markdow, então você terá que editar o arquivo **conf.py** e adicionar as duas linhas abaixo.
   ::

      POSTS = POSTS + (("posts/*.md", "posts", "post.tmpl"),)
      PAGES = PAGES + (("stories/*.md", "stories", "story.tmpl"),)

   Agora você deverá informar ao nikola que deseja a criação de uma página no formato Markdown. O comando será :code:`nikola news_post -e -f markdown`. Pronto.
   
----

:TESTANDO O SITE LOCALMENTE:
   A próxima etapa será criar o site estático e testar para ver se tudo está funcionando. Para criar o site basta você entrar com o comando :code:`nikola build`. Serão geradas as páginas html, os tag com os respectivos links, RSS (estou ficando velho; acho RSS a melhor forma de acompanhar as novidades de um determinado site).
   Para testar o site no navegador, digite :code:`nicola serve -b`. Este é um comando para velho preguiçoso. Ele inicia e aponta o servidor para o seu site e já abre o site no navegador padrão. Nada de ficar digitando localhost:8000 ou algo parecido.

----   

:ENTREGANDO O SEU SITE PARA O MUNDO:
   Ok. Você já criou o se repositório, clonou localmente, criou a estrutura do blog, adicionou algumas entradas interessantes. Está na hora de você mostrar para o mundo o seu trabalho. Digite :code:`nikola github_deploy`, responda algumas perguntas como nome e senha e pronto. Já pode avisar para seus amigos acessarem *https://usuário.github.io* para ver o seu trabalho.

----

:CONSIDERAÇÕES FINAIS:
   Foi apresentado apenas uma pequena visão do que pode ser feito com o Nikola. Alguns tópicos que podem ser explorados:
   
   - **Criação** : É possível criar blogs ou sites. Aconselho a criar um site demo `nikola init --demo site` e seguir os links que possuem algums exemplos interessante de páginas como galeria ou outros formatos. Veja também os sites criados por `usuários <https://users.getnikola.com/>`__ para ter uma ideia das diversas apresentações possíveis. 
   - **Configuração** : Olhe o arquivo *conf.py* para uma ideia do que é possível configurar.
   - **Temas** : Existem diversos `temas <https://themes.getnikola.com/>`__ que você pode baixar e configurar.
   - **Plugins** : Existem diversos `plugins <https://plugins.getnikola.com/>`__ para diversas finalidades. Dê uma olhada e, se achar algum interessante, clique no link para ver mais informações.
   - **Nikola** : Digite `nikola help` para uma ideia do que o Nikola pode fazer

----

Ainda não configurei nem decidi por um sistema para comentário nem o fomato final do blog. Por hora era isto e obrigado se você leu até aqui.
