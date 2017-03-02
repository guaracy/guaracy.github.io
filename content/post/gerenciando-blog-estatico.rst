+++
title = "Gerenciando Blog Estático"
slug = "gerenciando-blog-estatico"
date = "2017-02-08"
tags = ["blog-admin", "emacs", "github", "org-mode", "nikola"]
draft = false
+++

Introdução
----------

Fora a facilidade de uso, o outro motivo importante de escolher o Nikola como gerenciador de blog estático foi a possibilidade de editar as entradas no formato `org-mode <http://orgmode.org/>`__ diretamente, isto é, edito direto no formato org e mando o Nikola gerar o blog. Poderia converter para .rst ou .md mas as etapas intermediárias são chatas e podem resultar em erros difíceis de serem resolvidos ou localizados. Não, não é apenas mais uma linguagem de marcação. É a linguagem de marcação definitiva.

Usar o emacs não é nenhum bicho de sete cabeças. Para quem usa o vim, existe o `spacemacs <http://spacemacs.org/>`__ que foi feito pensando nesses usuários. Mesmo funcionamento do teclado (nunca usei i vim para confirmar) com o coração do emacs. Muitos profissionais de outras áreas (principalmente educação) fizeram a troca apenas para usar o org-mode. O `John Kitchin <http://kitchingroup.cheme.cmu.edu/blog/2014/08/08/What-we-are-using-org-mode-for/>`__, por exemplo, utiliza org-mode para escrever artigos científicos e livros, agenda profissional/pessoal, apresentações e até para lecionar indo desde a preparação do material até a avaliação dos alunos como pode ser visto neste `vídeo <https://www.youtube.com/watch?v=cRUCiF2MwP4>`__.

.. TEASER_END

blog-admin
----------

O `blog-admin <https://github.com/guaracy/blog-admin>`__ facilita a administração de um blog criado pelo hexo, org-page e Nikola (que é o que me interessa) utilizando o emacs. A aparência é assim:

.. image:: /images/blog-admin.png

As operações ficam a uma tecla de distância e as entradas disponíveis na tabela sendo facilmente visualizadas (data, rascunho, título). Só pela visualização já seria um facilitador e é como está sendo usado neste momento. Já fiz um fork do repositório do GitHub e pretendo efetuar as alterações necessárias para que se ajuste ao meu fluxo de trabalho e corrigir alguns probleminhas.

- **s** : Altera entre o modo rascunho e publicação
- **d** : Funcionou corretamente. Provavelmente seria utilizados apenas para apagar posts marcados como ``draft``.
- **c** : Não testei mas também não sei quando iria duplicar um post.
- **w** : Funcionou corretamente mas deveria ter a opção para outros formatos e não apenas .rst.
- **RET** : Enter e o emacs abre o post corretamente.
- **r** : Apenas escaneia o diretório para refazer a estrutura.
- **B** : Não funcionou com posts .org que necessitem de uma intervenção.
- **C** : Apenas abre o arquivo de configuração ``conf.py``.
- **D** : Preciso verificar melhor se existe uma configuração para entregar direto no GitHub.
- **F** : Filtrou corretamente as entradas quando um título tinha o termo indicado.

Pretendo criar mais uma opção. Talvez um **L** para testar localmente. Iria executar `nikola build ; nikola serve -b` para gerar e abrir no navegador padrão do sistema. Apesar do **w3m** oferecer uma boa visualização de sites, não é uma opção.

Conclusão
---------

Precisa de umas alterações mas já mostrou ser uma boa opção para quem trabalha com sites estáticos e emacs. Resolvi fazer um vídeo mostrando um pouco o funcionamento do blog-admin mas, talvez, com um pouco de enfase na digitação de um documento usando o org-mode. Especificamente na digitação de trechos de código em três linguagens sendo o resultado calculado e apresentado diretamente, evitando o problema de digitar o resultado incorretamente ou ter que rodar o programa externamente, copiar o resultado e colar no documento.

.. raw:: html
	 
	 <script type="text/javascript" src="https://asciinema.org/a/ehgwjtapwsytr0txgr7h6v36x.js" id="asciicast-ehgwjtapwsytr0txgr7h6v36x" async></script>


Atualizações
------------

1. Adicionei a possibilidade de utilizar :code:`nikola github_deploy` para facilitar a entrega no GitHub.
2. Adicionei a opção **"O"** no menu para abrir o site em um navegar externo. Falta incluir a opção para o usuário escolher o navegador (está o `firefox`). Necessita do `emacs-web-server <https://github.com/skeeto/emacs-web-server>`__. Funciona como ``nikola serve -b``

As alterações ainda não estão no GitHub mas esta postagem já foi feita com a versão loca atualizada do blog-admin. É só pressionar "B" para recriar o site, "O" para testar no firefox se está tudo ok e um "D" para enviar para o GitHub.

.. image:: /images/ba-git.png
   
