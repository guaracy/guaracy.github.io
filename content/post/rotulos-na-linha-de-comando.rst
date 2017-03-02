+++
title = "Rótulos na linha de comando"
slug = "rotulos-na-linha-de-comando"
date = "2017-01-31"
tags = ["zsh", "bash", "shell", "tags", "emacs"]
draft = false
+++
Vamos discorrer sobre dois tópicos:

1. Edição de linha de comando complexa e;
2. Colocar rótulos na linha de comando para que possa ser chamada posteriormente

.. TEASER_END

Edição
======

Algumas vezes temos uma sequência de comandos que queremos executar. Podemos digitar os comandos individualmente, podemos criar um script e salvar os comandos e até podemos separá-los com :code:`;` em alguns casos. Mas existe outra forma simples que seria utilizar o nosso editor padrão que deverá estar no *.[bash\zsh]rc* como *$EDITOR=seueditor*. Para tal, basta Pressionar :code:`Ctrl+x Ctrl+e`.

Com isto, será aberto o editor com um nome de arquivo temporário e você poderá utilizar seu editor para informar a sequência de comandos desejada. Veja o vídeo abaixo [#]_
Ao término, basta salvar e fechar o editor. No caso do `zsh <http://www.zsh.org/>`__, a sequência de comandos estará disponível na shell só esperando você pressionar um *enter*. No bash já executa os comandos um a um (motivo 1 para trocar de shell).

Tags
====

Algumas vezes precisamos executar um ou uma sequência de comandos diversas vezes (mas não é o suficiente para criar um script, chmod +x, etc.). Uma forma prática é utilizar o método anterior e colocar no final um rótulo para que possamos recuperar os comandos a qualquer momento com o :code:`Ctrl+r` para efetuar a busca. Poderíamos colocar no final do nosso arquivo anterior um comentário como *#script*. Aí é só digitar Ctrl+r e script que ele irá aparecer. É só pressionar Enter para executar novamente ou, Ctrl+x Ctrl+e para editá-lo afinal, humanos podem errar. Como o bash executa os comandos individualmente, no histórico irá ficar só o comentário (motivo 2 para trocar de shell).

.. [#] Vídeo ascii exemplificando o post

.. raw:: html

   <script type="text/javascript" src="https://asciinema.org/a/101484.js" id="asciicast-101484" async></script>


