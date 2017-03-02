+++
title = "Temas no Nikola"
slug = "temas-no-nikola"
date = "2017-01-27"
tags = ["nikola", "temas", "bootstrap3", "icomoon"]
draft = false
+++

O meu objetivo não é ser webdesiner ou coisa parecida. Apenas ter um local onde possa ser facilmente ser armazenadas e disponibilizadas as informações. A escolha no `Nikola <https://getnikola.com/>`__ se deu, em parte, pela facilidade de uso. Até para entregar no GitHub é simples.

Como resolvi fazer alguns ajustes no site, resolvi colocar aqui o que foi feito para facilitar qualquer trabalho futuro. Não eram necessários Basicamente alguns ícones no menu e alguns botões sociais no rodapé.

.. TEASER_END
   
.. sidebar:: Nikola - Fluxo de tarefas

   **Criação do site**
   
   :code:`nikola init site`
	 
   **Criação/edição de entradas**
   
   :code:`nikola new_post -e`
	 
   **Criação e teste o site localmente**
   
   :code:`nikola build`
	 
   :code:`nikola serve -b`
	 
   **Colocar site GitHub**
   
   :code:`nikola github_deploy`


De qualquer forma, queremos um site com uma apresentação simples mas que seja visualmente agradável (não precisa ser aqueles sites da década de 40; até o site do `Emacs <https://www.gnu.org/software/emacs/>`__ está mais moderno) mas não queremos aprender a criar novos temas, alterar CSS ou JavaScript. Nosso foco são os artigos. Abaixo, quatro formas de alterar a aparência do nosso site:

1. O Nikola utiliza como framework o `Bootstrap 3 <http://getbootstrap.com/>`__. A maneira mais simples de alterar cores e tipografia é visitar `Bootswatch <http://bootswatch.com/>`__  e escolher um tema que lhe agrade. No diretório do seu site digite :code:`nikola bootswatch_theme -s cerulean` caso você tenha escolhido o tema Cerulean. Será criado um subdiretório `custom` no diretório `themes`. Depois é só editar o arquivo `conf.py` e alterar o nome do tema em uso para `custom` que ficará :code:`THEME = "custom"`. É só criar e testar o site localmente. Se você conhece um pouco de CSS, poderá efetuar algum ajuste necessário.
   
2. A segunda maneira é escolher um tema diretamente do `site <https://themes.getnikola.com/>`__ do Nikola. Basta selecionar o tema da relação existente, ver como é a aparência e seguir as instruções que estão no site. [#]_
   
3. Você poderá criar um tema novo. Até pode ser interessante mas, se não for a sua área, deverá ler um pouco a respeito para aprender sobre CSS, templates, etc..

4. Resolvi colocar o quarto, pois achei interessante compartilhar. Gostaria de colocar uns ícones junto com as palavras do menu superior e em outros locais mas possibilidades disponíveis no Nikola não eram suficientes. Poderia utilizar alguma fonte `Font Awesom <http://fontawesome.io/>`__ mas eu considero que é muito byte para o pouco que eu precisava. Um canhão para matar uma formiga. Os procedimentos são os seguintes:
   
   4.1 Ir no site `IcoMoon <https://icomoon.io/app/>`__ e selecionar os ícones desejados (selecionei do IcoMoon Free).
   
   4.2 Clicar em Gerar Fonte.
   
   4.3 Clicar em Download.
   
   4.4 Abrir o arquivo `icomoon.zip`, copiar as fontes do diretório `fonts` para o diretório `seublog/themes/custom/assets/fonts` e copiar o arquivo `style.css` para o diretório `seublog/themes/custom/assets/css`

   4.5 Renomeie o arquivo `style.css` para `custom.css`.

   4.6 Edite o arquivo `custom.css` é coloque `../` no caminho para os arquivos de fontes (melhor manter a estrutura original criada de diretórios criada pelo Nikola).

   4.7 Ok. Sempre que você precisar de um dos símbolos |icon-tux| basta incluir :code:`<span class="icon-tux"></span>` (troque `icon-tux` pelo ícone desejado). Descompactando o arquivo icomoon.zip, tem um arquivo `demo.html`. Abrindo-o você poderá visualizar todos os símbolos existentes. Se for em um texto, use a diretova :code:`.. |icon-tux| raw: html` com o código html acima.

   4.8 Para incluir mais algum ícone, siga os passos 4.1 até 4.6.

   
.. |icon-tux| raw:: html
		    
	<span class="icon-tux"></span>


.. [#] Nem todos os temas são responsivos, isto é, são apresentados adequadamente em computadores, smartphones, etc.. Pode ser interessante testar antes de adotar o tema. Não é muito legal você abrir um site em um smartphone e ver aquelas letras minúsculas, sendo obrigado a dar um zoom e ficar movendo o site para um lado e outro para ler. 

     
.. role:: text-danger

.. role:: bg-success

	  
Por curiosidade, o meu menu no :code:`conf.py` ficou assim:


.. code:: python

	  NAVIGATION_LINKS = {
	      DEFAULT_LANG: (
                  ("/archive.html", "<span class='icon-folder-open'></span> Arquivos"),
                  ("/categories/", "<span class='icon-price-tags'></span> Tags"),
                  ("/rss.xml", "<span class='icon-rss'></span> RSS"),
              ),
          }


O rodapé, com a inclusão dos ícones. Tem uma variável `SOCIAL_BUTTONS_CODE` que poderia ser utilizada. Pode ser que, futuramente, veja melhor como ela funciona e alguns ajustes.

.. code:: python

	  CONTENT_FOOTER = """
	  <span class="social-menu">
	  <a href="mailto:{email}" title="e-mail"><span class="icon-envelop"> </span></a> 
	  <a href="" title="Google Plus"><span class="icon-google-plus"> </span></a> 
	  <a href="https://www.facebook.com/guaracybm" title="Facebook"> <span class="icon-facebook2"> </span></a> 
	  <a href="https://twitter.com/guaracybm" title="Twitter"> <span class="icon-twitter"> </span></a> 
	  <a href="https://github.com/guaracy" title="GitHub"><span class="icon-github"> </span></a> 
	  </span>
	  <br/>
	  Contents &copy; {date} {author} - Powered by	       
	  <a href="https://getnikola.com" rel="nofollow">Nikola</a>	    {license}"""


Também adicionei no `custom.css` um pouco de código para formatar os ícones do rodapé. Ficou assim:

.. code:: css

	  .social-menu a {
              color: black;
              text-decoration: none;
              font-size: x-large;
          }

Por enquanto é só.	  
