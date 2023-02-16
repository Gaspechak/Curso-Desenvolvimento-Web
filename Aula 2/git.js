/* 
O git é um software de controle, versionamento e integração de código que funciona totalmente local (Offline).
O github é a plataforma em nuvem onde fazemos a conexão com nosso repositório local e sincronizamos isso em nosso hub.
*/

var texto = "Exemplo de texto aleatório 1"

//git init (Inicializa um novo repositório local no diretório atual)
//git status (Mostra a condição atual do repositório)
//git add . (Adiciona todos os arquivos a lista de alterações, você pode colocar arquivo por arquivo, ou especificar multiplos arquivos)
//git commit -M "Descrição da atividade realizada" (Confirma as alterações e registra no histórico de alterações da branch atual)
//git branch <nome_da_branch> (Cria uma nova ramificação, cuidado.. pois esse comando apenas cria uma nova ramificação, mas te mantem na mesma branch)
//git checkout -b <nome_da_branch> (Cria uma nova branch e muda o ambiente para essa nova branch, todas as alterações serão diferentes da branch anterior)
//git branch -d <nome_da_branch> (Exclui uma branch, pode usar -D para forçar a exclusão, cuidado pois irá ocorrer perca de dados)
//git merge <nome_da_branch> (Faz a mesclagem da branch atual na branch especificada)
//git rebase <nome_da_branch> (Puxa todas as alterações da branch especificada e joga as alterações realizadas na branch atual a frente)