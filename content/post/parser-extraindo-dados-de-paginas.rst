+++
title = "Parser - extraindo dados de páginas"
slug = "parser-extraindo-dados-de-paginas"
date = "2017-02-23"
tags = ["red", "rebol", "er", "expressões regulares", "parser"]
draft = false
+++
   
O :code:`parser` é a versão de **Rebol** (consequentemente de `Red <http://www.red-lang.org/>`__) para as `expressões regulares <https://pt.wikipedia.org/wiki/Express%C3%A3o_regular>`__ (RE). A maior diferença é que o parser de Red é perfeitamente integrado a linguagem, possuindo uma maior verbosidade mas sendo menos criptográfico (YMMV). Não posso deixar de mencionar o `string scanning <https://en.wikipedia.org/wiki/Icon_(programming_language)#String_scanning>`__ de Icon já que foi a segunda forma que conheci. Infelizmente o pessoal de Icon resolveu fazer uma nova versão em Go (outra linguagem baseada em Icon) e deixaram de fora esta parte que era uma das mais interessantes da linguagem e passaram a utilizar RE).

O parser de Red nada mais é do que uma DSL `escrita <https://github.com/red/red/blob/master/runtime/parse.reds>`__ na própria linguagem.

Basicamente é um ponteiro que percorre um determinado texto seguindo determinadas regras e geralmente utilizado para:

- seleção e extração de textos;
- validação de textos;
- alteração de textos.

.. TEASER_END
  
Introdução
----------
  
A estrutura do `parser` é :code:`parser entrada regras` onde **regras** é um bloco contendo as regras que serão aplicadas na entrada. Antes de nos aventurarmos em alguns exemplos, é necessário conhecer algumas diretivas que podem ser utilizadas nas regras.

1. **to <val>** : Procura por <val> e posiciona o ponteiro no início da ocorrência ou no final da entrada, se não encontrar. `end` indica para posicionar no final do arquivo.
::
   
   red>> parse "111-AAA" [to "-" collect keep to end]
   == ["-AAA"]

2. **thru <val>** : Procura por <val> e posiciona o ponteiro após a ocorrência
::
   
  red>> parse "111-AAA" [thru "-" collect keep to end]
  == ["AAA"]

  
3. **collect** e **keep** : O `collect` indica que deverão ser coletados em um bloco os dados posteriores que forem precedidos por `keep` como pode ser visto nos exemplos acima (note que no exemplo abaixo não estamos trabalhando com texto e sim com um bloco em Red; é a vantagem da integração do `parse`).
::
   
   red>> collect [1 2 keep 3 keep 4 5 keep 6]
   == [3 4 6]

4. **any**, **some** e **inteiro** : O `any` repete a regra zero ou mais vezes, o `some` uma ou mais vezes e o `inteiro` repete a regra um número especificado de vezes.
::
   
   red>> parse "AA-BBCDEF" [2 "A" some "-" collect keep to end]
   == ["BBCDEF"]  
   red>> parse "AA-BBCDEF" [any "x" collect keep to end]
   == ["AA-BBCDEF"]

5. **[n] skip** : Avança o ponteiro uma ou mais posições
::

   red>> parse "111++222" [to "+" collect keep to end]
   == ["++222"]
   red>> parse "111++222" [to "+" 2 skip collect keep to end]
   == ["222"]

6. **copy** <var> : Copia o valor que casar para a variável especificada. Diferente de ERs, não existem variáveis predefinidas como $1, $2, etc.. 
::
      
   red>> parse "122.444.666" [thru "." copy v to "." (print ["2º :" v])]
   2º : 444

Bem, existem diversas outras diretivas e combinações, mas já é possível brincar com o que foi apresentado aqui.

Exemplo do Aurélio
------------------

O `Aurélio <http://aurelio.net>`__, se não é o cara que mais entende de ER, é o que melhor sabe explicar este assunto complexo. Vou pegar a vídeo-aula que ele fez de `Como extrair e formatar texto usando Expressões Regulares <http://aurelio.net/blog/2011/05/05/como-extrair-e-formatar-texto-usando-expressoes-regulares/>`__ e adaptá-la para o Red e o parse. Na primeira parte, iremos copiar a página para analisar. Na segunda iremos ler diretamente da página html.

Primeira parte
==============

Para esta parte, como no vídeo acima, iremos copiar (da linha *quot* até a linha *diams* e pode ser todas as colunas) os dados `desta <https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML>`__ tabela da wikipedia e gravar em uma arquivo ``page.txt`` no mesmo diretório onde irá rodar o nosso programa em Red.
O arquivo .txt terá o seguinte conteúdo:
::

   quot	 " 	U+0022 (34) 	HTML 2.0 	HTMLspecial 	ISOnum 	quotation mark (APL quote)
   amp 	 & 	U+0026 (38) 	HTML 2.0 	HTMLspecial 	ISOnum 	ampersand
   apos	 ' 	U+0027 (39) 	XHTML 1.0 	HTMLspecial 	ISOnum 	apostrophe (apostrophe-quote); see below
   lt 	 < 	U+003C (60) 	HTML 2.0 	HTMLspecial 	ISOnum 	less-than sign
   .....
   diams ♦ 	U+2666 (9830) 	HTML 4.0 	HTMLsymbol 	ISOpub 	black diamond suit[f]


O script para processar o bloco de texto e pegar apenas quatro valores das três primeiras colunas (nome, caractere, valor hexadecimal e valor decimal) fica como abaixo:

.. code:: red
   :number-lines:
      
    Red []
     
    page: read %page.txt

    rule: [
       any [
     	 copy nome to tab skip
     	 copy caractere to tab
     	 thru "+" any ["0" skip]
     	 copy hexadecimal to sp
     	 thru "(" copy decimal to ")"
     	 (print [nome tab caractere tab hexadecimal tab decimal])
     	 thru newline
       ]
    ]
    
    parse page rule

Após a execução, teremos uma saída assim (eliminamos as colunas indesejadas e separamos os valores decimal e hexadecimal referente ao caractere):
::
   
   quot    "       22      34
   amp     &       26      38
   apos    '       27      39
   lt      <       3C      60
   ...
   diams   ♦       2666    9830

Vejamos o que faz cada linha do script.

1) **Red []** é o cabeçalho necessário para que scripts possam ser executados. No interior do bloco [] podemos ter diversas informações e diretivas.
   
3) Lê o conteúdo do arquivo ``page.txt`` e o coloca na variável ``page``.
   
5) Inicializa o bloco de regras com o nome de ``rule``.
   
6) Diz para executar o próximo bloco 0 ou mais vezes.
   
7) Copia para a variável ``nome`` o conteúdo da entrada até encontrar um ``tab`` (tabulação) e avança o ponteiro.
   
8) O mesmo da linha 7 para a variável caractere. Eu poderia colocar nomes mais curtos nas variáveis como v1, v2, etc. mas preferi legibilidade (nem sei se poderia chegar a concisão de uma ER).

9) Posiciona o ponteiro após o "+" e incrementa o ponteiro enquanto achar algum "0" (zero)

10) Copia o conteúdo para a variável hexadecimal até encontrar um espeço (sp).

11) Posiciona o ponteiro após o "(" e copia para a variável decimal o conteúdo até o ")"

12) Imprime uma linha com o conteúdo das variáveis separados por uma tabulação. Aqui também mostra a integração do parse com a linguagem permitindo que as variáveis sejam processadas da forma que o usuário desejar (poderia até converter para klingon).     
   
13) Posiciona o ponteiro após o final da linha.

14) Fecha o ``any`` aberto na linha 6 e, se ainda tiver algum conteúdo na entrada, o processamento será repetido.

15) Fecha o bloco da regra aberto na linha 5.

17) Aplica a regra da linha 5 no texto lido na linha 3.

Parece complicado mas é bem simples. Algumas vezes parece complicado e realmente é mais complicado do que parece.

Segunda parte
=============

O processo anterior pode ser válido em diversos casos. Existem outros como, por exemplo, os valores sofrem alteração no decorrer de um período ou são diversas páginas e fica impraticável copiar e colar cada vez. No próximo artigo veremos um exemplo real e mais complexo. Por enquanto ficaremos com o mesmo para facilitar mas com uma abordagem um pouco diferente.

Iremos ler o conteúdo da página .html, aplicaremos as regras e coletaremos todas as informações para ser trabalhada posteriormente. Para você criar uma regra para extrair dados de um determinado texto ou outro documento, é necessário que você analise antes para poder aplicar os padrões. 

Analisando a página da wikipedia, podemos ver que a tabela que queremos é a terceira (existem outra formas de encontrar a tabela). Como pode ser visto no trecho abaixo, após a tag `<table>` temos uma `<th>` que é o cabeçalho e, após, diversas tags `<tr>` que iniciam as linhas com as informações que desejamos. Nossas informações estarão entre `<td>` e `</td>`. No início já é possível perceber que teremos um problema que deverá ser resolvido posteriormente. Em `amp` a página contém `&amp;` já que o & não pode ser usado isoladamente. Poderemos ter uma função para efetuar essas conversões que não seria tão difícil ou usar um programa externo como :code:`cat arquivo | recode html..ascii`.

.. code:: html

     <table class="wikitable">
     <tr style="background: #efefef;">
     <th>Name</th>
     <th>Character</th>
     <th>Unicode code point (decimal)</th>
     <th>Standard</th>
     <th>Description</th>
     </tr>
     <tr>
     <td>quot</td>
     <td>"</td>
     <td>U+0022 (34)</td>
     <td>XML 1.0</td>
     <td>double <a href="/wiki/Quotation_mark" title="Quotation mark">quotation mark</a></td>
     </tr>
     <tr>
     <td>amp</td>
     <td>&amp;</td>
     <td>U+0026 (38)</td>
     <td>XML 1.0</td>
     <td><a href="/wiki/Ampersand" title="Ampersand">ampersand</a></td>
     </tr>
	  
O nosso programa poderia ficar assim:

.. code:: red
   :number-lines:

   Red []

   page: read https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references
   
   rule-html: [
      3 thru "<table"
      collect any [
         collect [
            thru <td> keep to </td> ; name
            thru <td> keep to </td> ; char
            thru "+" any ["0" skip] keep to " " ; hexa
            thru "(" keep to ")" ; decimal
            thru <tr>
         ]
      ]
      to end
   ]
   
   tabela: parse page rule-html


O programa nem ficou tão diferente do primeiro (o ; indica início de comentário), que analisa apenas um arquivo texto, e ainda podemos ver algumas características da linguagem. A primeira é que foi usado **read** para ler um arquivo texto e uma página https. A segunda, por ser uma linguagem rica em tipos de dados, usamos apenas <td> e não "<td>" para a verificação de conteúdo. Aqui também usamos **collect** pois queremos que todos os dados sejam extraídos e armazenados para futuro processamento.

Inicialmente inicializamos o ponteiro na terceira ocorrência de `<table`, usamos um `collect` para que as informações sejam armazenadas em um bloco e, um segundo `collect` para que cada linha tenha seu próprio bloco.  O resultado após rodar o programa é que tabela conterá algo assim:

::

   [["quot" #"^"" "22" "34"] ["amp" "&amp;" "26" "38"] ["apos" #"'" "27  ....  ]]


É claro que eu não poderia deixar o leitor a ver navios e ficar saber como tratar os casos onde o segundo elemento não é um caractere. Como o quarto elemento de cada linha é o código do caractere, basta percorrer todas as linhas da tabela e trocar o segundo elemento pelo caractere cujo o código está no quarto elemento. Podemos aproveitar e converter o quarto elemento de string para inteiro. O loop abaixo faz isso (O Red [] é necessário para que o pygmentize colorize o código corretamente). 



.. code:: red

   Red []

   foreach linha tabela [
       linha/4: to-integer linha/4
       linha/2: to-char linha/4
   ]

Após ler o artigo e entender as semelhanças e diferenças entre a regra para extrair os dados do texto e da página, você está apto a encarar novos desafios.

Conclusão
---------

Podemos ver que o parser como alternativa de Red/Rebol para expressões regulares é bastante poderoso e, se possui a desvantagem de ser mais verboso, possui a vantagem de ser mais legível (se você não souber ER, é claro). Sem desmerecer as expressões regulares, a integração do *parse* com a linguagem deixa visualmente mais agradável, não parecendo uma prótese alienígena no seu código.
