﻿apswweb  
**#vinícius**  
   
*últimas modificações:*   
nomes das páginas foram atualizadas   
login ocorre na pagina inicial 'index.html', nas outras páginas há um botão "Sair" que leva o usuário de uma página de volta à primeira.   
script para o login foi adicionado como 'script-login.js'   
arquivos usados foram renomeados e não usados foram deletados
   
*modificações prévias:*   
'script-header-html.js' foi adicionado. Nele está o código HTML para o header das páginas e pode ser reutilizado.
'index.html', 'index-2.html' e 'index calculadora.html' foram atualizados para refletir essa mudança.

'index-4.html' agora é 'index calculadora.html' e inclui a estrutura para a calculadora de imc  
style.css agora é usado como o estilo css padrão em todas as páginas  
style.css foi atualizado para incluir a calculadora  
'script-4.js' agora é 'script-calc-imc.js', inclui a lógica da calculadora imc e a lógica do menu mobile foi excluida (para fim de diminuir a quantidade de código reescrito em arquivos diferentes)  
script.js agora é o script para a lógica do menu mobile exclusivamente. Seu código foi removido de script-calc-imc.js e deve ser usado em cada arquivo html para a o uso dos botões mobile  

*o que fazer:*  
~Fazer a página de login que é acessada com o botão "Entrar".~ **Feito!**  
~Após o login, fazer com que o botão "Entrar" se torne o nome do usuário, ou algo do tipo.~ **Feito, agora o botão diz "Sair" e retora para o início.**  
~Restringir o acesso ao cálculo de imc apenas para um usuário logado.~ **FEITO!**   
Adicionar mais informações / conteúdo nas páginas correspondentes a "Início" e "Sobre".  
Melorar a aparência do CSS da calculadora de imc.  
~O código html do header é reutilizado em todos os arquivos .html. Deve existir uma forma de criar o código apenas uma vez em um só arquivo e reutilizá-lo em todas as páginas, mas não sei como fazer isso.~ **FEITO!**   
