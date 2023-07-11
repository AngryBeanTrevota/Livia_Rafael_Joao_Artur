import { useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [quiz, setQuiz] = useState(null);
    const [historia, setHistoria] = useState(-1);
    const conversas = [
        {
            personagem: "Monitor",
            mensagens: [
                {
                    nome: "Monitor",
                    mensagem: "★Bom dia! DAEDALUS te dá as boas-vindas e agradece sua participação no projeto!★",
                },
                {
                    nome: "Monitor",
                    mensagem: "Fique à vontade de tirar as dúvidas comigo, imagino que tenha perguntas para fazer sobre os procedimentos e a sua estadia aqui na empresa.",
                },
                {
                    nome: "Spencer",
                    mensagem: "Bom dia, queria saber quando vai ser a entrevista? Me falaram que preciso responder à um questionário antes de continuar, mas ninguém me informou acerca do tópico ou horário. Poderia me fornecer a data e hora?",
                },
                {
                    nome: "Monitor",
                    mensagem: "A entrevista não será necessária no seu caso em particular. Peço desculpas pela confusão!",
                },
                {
                    nome: "Spencer",
                    mensagem: "Como assim? Vocês não precisam preencher uma ficha com o participante pelo menos ou coisa assim?",
                },
                {
                    nome: "Monitor",
                    mensagem: "Não se preocupe com os detalhes! Tudo o que você vai precisar fazer e as regras da casa são o que foi fornecido quando você assinou o contrato de participação.",
                },
                {
                    nome: "Monitor",
                    mensagem: "Dado que não pôde trazer nada disso pra sala de treinamento, estarei encaminhando tudo o que você precisa lembrar durante as suas semanas aqui.",
                },
                {
                    nome: "Spencer",
                    mensagem: "Ah, sobre a sala. Quando vou poder sair daqui? Apesar de não ser um estabelecimento pequeno, não gosto de ficar muito tempo em um mesmo lugar...",
                },
                {
                    nome: "Monitor",
                    mensagem: "Em breve você poderá visitar novamente nossos laboratórios para o escaneamento cerebral de rotina de atualização das IAs. Nossos cientistas ficaram felizes em te receber!",
                },
                {
                    nome: "Monitor",
                    mensagem: "Infelizmente, fora isso (por questões de prevenção de vazamento de informação), você terá que permanecer na sala de treinamento durante todas as semanas do projeto. Mas não se preocupe! Todas as suas refeições e essenciais serão fornecidos com qualidade pela DAEDALUS!",
                },
                {
                    nome: "Spencer",
                    mensagem: "Isso é um absurdo. Vocês esperam que eu fique confinado aqui por 10 semanas? Como vou contatar amigos e família? Eles vão achar que eu morri.",
                },
                {
                    nome: "Monitor",
                    mensagem: "Não se preocupe, você pode mandar e receber mensagens monitoradas para pessoas de fora! Acredito que a compensação financeira do pagamento do projeto seja o suficiente pra que valha a pena, não?",
                },
                {
                    nome: "Spencer",
                    mensagem: "...",
                },
                {
                    nome: "Monitor",
                    mensagem: "Vou tomar como um sim! Qualquer dúvida, basta me contatar, e estarei aqui pra ajudar no que posso. Estarei encaminhando as instruções como citado anteriormente.",
                },
                {
                    nome: "Spencer",
                    mensagem: "As pessoas que participam do projeto tem sua identidade protegida, certo?",
                },
                {
                    nome: "Spencer",
                    mensagem: "Isso não é publicado em lugar nenhum que eu saiba...",
                },
                {
                    nome: "Monitor",
                    mensagem: "Não se preocupe! Para a comodidade dos nossos clientes, os participantes não são divulgados para ninguém a não ser os funcionários!",
                },
                {
                    nome: "Monitor",
                    mensagem: "Mas se estiver interessado em participar em uma propaganda do projeto, posso te encaminhar a um chat com o nosso time de marketing!",
                },
                {
                    nome: "Spencer",
                    mensagem: "Não, não tenho interesse. Obrigado pelo esclarecimento.",
                },
                {
                    nome: "Monitor",
                    mensagem: "Sem problemas!",
                },
                {
                    nome: "Monitor",
                    mensagem: "Não havendo mais nenhuma pergunta, irei te encaminhar o documento.",
                },
                {
                    nome: "Monitor",
                    mensagem: "★DAEDALUS agradece sua contribuição. O futuro atinge até onde a mente alcança!★",
                }
            ]
        },
        {
            personagem: "Monitor",
            mensagens: [
                {
                    nome: "Monitor",
                    mensagem: "1. O participante não deverá deixar a Sala de Treinamento, exceto quando escoltado para o Laboratório.",
                },
                {
                    nome: "Monitor",
                    mensagem: "2. O participante deve interagir de forma natural e humana com as IAs geradas a partir dele, da forma que se relacionaria com outras pessoas.",
                },
                {
                    nome: "Monitor",
                    mensagem: "3. O participante deve treinar as IAs de forma ativa e envolvida para as competências requeridas da empresa, criando uma dinâmica equalitária de 'estudo em grupo'.",
                },
                {
                    nome: "Monitor",
                    mensagem: "4. Serão feitas avaliações regulares de conhecimento das IAs e do participante, visando medir o progresso, e tais datas serão informadas a todos.",
                },
                {
                    nome: "Monitor",
                    mensagem: "5. Nenhum dado sobre qualquer aspecto do projeto ou da companhia obtidos aqui podem ser compartilhados com pessoas externas. Visando a segurança dos dados da empresa, conversas com pessoas de fora serão monitoradas e moderadas.",
                },
                {
                    nome: "Monitor",
                    mensagem: "6. Com a intenção de proteger dados e tecnologias da empresa, após o término do programa, as memórias do participante acerca do projeto serão removidas.",
                }
            ]
        },
        {
            personagem: "Monitor",
            mensagens: [
                {
                    nome: "Monitor",
                    mensagem: "Essa é uma mensagem automática"
                },
                {
                    nome: "Monitor",
                    mensagem: "★Todos, sejam bem-vindos! Esse grupo foi criado para a sua conveniência, visando ser um canal de comunicação geral, além dos chats particulares. DAEDALUS espera que todos possam aproveitar esse projeto que leva a tecnologia pra frente! ★"
                },
                {
                    nome: "Spencer",
                    mensagem: "..."
                },
                {
                    nome: "Marina",
                    mensagem: "sério"
                },
                {
                    nome: "Marina",
                    mensagem: "o quão corporativo vc pode ser????"
                },
                {
                    nome: "Marina",
                    mensagem: "cringe"
                },
                {
                    nome: "Gatsby",
                    mensagem: "ah, achei bonitinha (˶ˆ꒳ˆ˵)"
                },
                {
                    nome: "Bengie",
                    mensagem: "💀"
                },
                {
                    nome: "Bengie",
                    mensagem: "sem comentários"
                },
                {
                    nome: "Spencer",
                    mensagem: "Isso é tão estranho…"
                },
                {
                    nome: "Spencer",
                    mensagem: "Eu me apresento? Quer dizer, vocês por definição já sabem quem eu sou…"
                },
                {
                    nome: "Spencer",
                    mensagem: "Vocês já vem com nome?"
                },
                {
                    nome: "Bengie",
                    mensagem: "sim, a gente é igual um macaco da Kipling"
                },
                {
                    nome: "Bengie",
                    mensagem: "óbvio que não, a gente escolheu"
                },
                {
                    nome: "Marina",
                    mensagem: "NÃO MAS TIPO"
                },
                {
                    nome: "Marina",
                    mensagem: "@Gatsby você podia escolher qualquer nome normal"
                },
                {
                    nome: "Marina",
                    mensagem: "e você escolheu Gatsby????"
                },
                {
                    nome: "Bengie",
                    mensagem: "é 'O Grande Gatsby' não é?"
                },
                {
                    nome: "Gatsby",
                    mensagem: "pq todo mundo aqui é tão mal ꃋᴖꃋ"
                },
                {
                    nome: "Gatsby",
                    mensagem: "o nome de vocês é tão legal (˚ ˃̣̣̥⌓˂̣̣̥ ) Marina, o Spencer já não conheceu uma senhorinha com esse nome uma vez?"
                },
                {
                    nome: "Gatsby",
                    mensagem: "ela era tão boazinha"
                },
                {
                    nome: "Marina",
                    mensagem: "NÃO ACREDITO"
                },
                {
                    nome: "Marina",
                    mensagem: "você me conheceu tem menos de cinco minutos e tá me chamando de VELHA??"
                },
                {
                    nome: "Gatsby",
                    mensagem: "eu não falei por mal ( •̯́ ^ •̯̀) ( •̯́ ^ •̯̀) ( •̯́ ^ •̯̀)"
                },
                {
                    nome: "Gatsby",
                    mensagem: "é um nome bem normal, nada muito diferente"
                },
                {
                    nome: "Gatsby",
                    mensagem: "combina com você ♥( ˆ ⌣ˆ ԅ)"
                },
                {
                    nome: "Gatsby",
                    mensagem: "@Bengie e o seu nome?"
                },
                {
                    nome: "Gatsby",
                    mensagem: "na verdade, é um nome de menino? ou menina? ╭( ๐ _๐)╮"
                },
                {
                    nome: "Bengie",
                    mensagem: "tanto faz"
                },
                {
                    nome: "Bengie",
                    mensagem: "é daquele jumento de Revolução dos Bichos, gosto dele"
                },
                {
                    nome: "Bengie",
                    mensagem: "mas Benjamin parece nome de velho"
                },
                {
                    nome: "Bengie",
                    mensagem: "então sem chance 💀"
                },
                {
                    nome: "Bengie",
                    mensagem: "@Marina nada contra"
                },
                {
                    nome: "Marina",
                    mensagem: "vou matar vocês k"
                },
                {
                    nome: "Spencer",
                    mensagem: "Esqueci que vocês lembram de tudo que eu já li/assisti."
                },
                {
                    nome: "Spencer",
                    mensagem: "... isso é muito desconfortável."
                },
                {
                    nome: "Bengie",
                    mensagem: "você quer mesmo entrar nesse assunto?"
                },
                {
                    nome: "Spencer",
                    mensagem: "..."
                },
                {
                    nome: "Spencer",
                    mensagem: "Não. Esquece."
                },
                {
                    nome: "Marina",
                    mensagem: "OK IMPORTANTE!!!"
                },
                {
                    nome: "Marina",
                    mensagem: "s gente tem que definir os dias de estudo, sla quando que vai sair a primeira avaliação"
                },
                {
                    nome: "Marina",
                    mensagem: "como eu não quero pagar de idiota a gente devia estudar pelo menos todo o dia útil"
                },
                {
                    nome: "Marina",
                    mensagem: "tipo o que, umas cinco horas???"
                },
                {
                    nome: "Bengie",
                    mensagem: "👏 nem morto"
                },
                {
                    nome: "Gatsby",
                    mensagem: "(˚▱˚) isso é bastante, né..."
                },
                {
                    nome: "Gatsby",
                    mensagem: "vc tá precisando de tudo isso?"
                },
                {
                    nome: "Marina",
                    mensagem: "@Gatsby o seu nome é literalmente Gatsby????? a sua opinião imediatamente não importa"
                },
                {
                    nome: "Marina",
                    mensagem: "@Bengie e o que mais você pretende fazer???"
                },
                {
                    nome: "Marina",
                    mensagem: "vai andar de bicicleta virtual?"
                },
                {
                    nome: "Bengie",
                    mensagem: "literalmente qualquer outra coisa"
                },
                {
                    nome: "Bengie",
                    mensagem: "campo minado"
                },
                {
                    nome: "Gatsby",
                    mensagem: "sinceramente, to com o Bengie, sou mais autodidata"
                },
                {
                    nome: "Gatsby",
                    mensagem: "prefiro estudar a maior parte do tempo sozinho (シ_ _)シ"
                },
                {
                    nome: "Spencer",
                    mensagem: "Bem, não tem muito como saber o que é melhor por enquanto, então pode ser um meio termo?"
                },
                {
                    nome: "Spencer",
                    mensagem: "Duas vezes por semana ou coisa assim?"
                },
                {
                    nome: "Gatsby",
                    mensagem: "perfeito ♡〜٩( ╹▿╹ )۶〜♡ não que eu precise de ajuda, mas fico feliz em ajudar com as dúvidas que vcs vão ter!"
                },
                {
                    nome: "Marina",
                    mensagem: "nossa, desculpe a nossa ignorância, Lorde Gatsby"
                },
                {
                    nome: "Marina",
                    mensagem: "se mata ♡〜٩( ╹▿╹ )۶〜♡"
                },
                {
                    nome: "Bengie",
                    mensagem: "🍿"
                },
                {
                    nome: "Spencer",
                    mensagem: "Vamos procurar não tacar fogo um no outro até o final do projeto..."
                },
                {
                    nome: "Spencer",
                    mensagem: "Dentro do possível."
                },
                {
                    nome: "Marina",
                    mensagem: "@Gatsby claramente ele também quer tacar fogo em vc"
                },
                {
                    nome: "Spencer",
                    mensagem: "..."
                },
                {
                    nome: "Spencer",
                    mensagem: "Alguém tá me chamando, vou ter que sair."
                },
                {
                    nome: "Bengie",
                    mensagem: "literalmente nn tem mais ninguém aí"
                },
                {
                    nome: "Spencer",
                    mensagem: "Abraços galera, até mais tarde"
                },
                {
                    nome: "Gatsby",
                    mensagem: "(•‿•)"
                },
                {
                    nome: "Marina",
                    mensagem: "KKKKKKKKKK"
                },
                {
                    nome: "Marina",
                    mensagem: "tchau tchau"
                }
            ]
        },
        {
            personagem: "Professor",
            mensagens: [
                {
                    nome: "Professor",
                    mensagem: "Spencer, precisamos conversar. Me encontre na hora do almoço."
                },
                {
                    nome: "Spencer",
                    mensagem: "Boa tarde, professor. Infelizmente estou viajando a trabalho, então não posso te encontrar pessoalmente."
                },
                {
                    nome: "Spencer",
                    mensagem: "Me desculpe."
                },
                {
                    nome: "Spencer",
                    mensagem: "Qual o assunto?"
                },
                {
                    nome: "Professor",
                    mensagem: "Passei na cafeteria que vende aqueles bolinhos que eu gosto. Como estava com tempo livre e por perto decidi passar pra te encontrar no trabalho."
                },
                {
                    nome: "Professor",
                    mensagem: "Quando entrei, falaram que você foi 'desligado da empresa'?"
                },
                {
                    nome: "Professor",
                    mensagem: "Ninguém se prestou a me explicar o motivo. Pior do que isso, você nem sequer me falou."
                },
                {
                    nome: "Professor",
                    mensagem: "Pode me explicar o que está acontecendo? Essa foi a sua maior vaga até agora, seu nome ainda podia crescer muito ali."
                },
                {
                    nome: "Spencer",
                    mensagem: "Eu posso explicar."
                },
                {
                    nome: "Spencer",
                    mensagem: "Me desculpe por não ter contado, eu estava ocupado com mudanças de emprego…"
                },
                {
                    nome: "Spencer",
                    mensagem: "Na verdade eu que pedi demissão. Sabe como é, aquele lugar era bom, mas muito pequeno pra mim. Não sabiam apreciar meu trabalho."
                },
                {
                    nome: "Spencer",
                    mensagem: "Na verdade, recebi uma oferta de emprego pagando muito mais. Não que eu não recebesse muitas antes, mas queria dar uma chance, sabe?"
                },
                {
                    nome: "Spencer",
                    mensagem: "Então estou agora trabalhando de tempo integral em um projeto que não posso falar sobre ainda. Estava trazendo as coisas pro meu escritório novo, e acabei distraindo com a arrumação."
                },
                {
                    nome: "Spencer",
                    mensagem: "Sinto muito por você ter tido que saber por outra pessoa. Não vai se repetir."
                },
                {
                    nome: "Professor",
                    mensagem: "Espero que não."
                },
                {
                    nome: "Professor",
                    mensagem: "Mas fico muito aliviado com isso."
                },
                {
                    nome: "Professor",
                    mensagem: "Bem, você sempre foi meu aluno prodígio, é claro que não iriam te demitir! Eu não esperaria menos de um garoto talentoso como você."
                },
                {
                    nome: "Professor",
                    mensagem: "Aguardo ansiosamente seus próximos trabalhos. Não me decepcione!"
                },
                {
                    nome: "Spencer",
                    mensagem: "Não precisa se preocupar."
                },
                {
                    nome: "Spencer",
                    mensagem: "Vou enviar a minha próxima publicação assim que possível."
                },
                {
                    nome: "Spencer",
                    mensagem: "Preciso voltar a escrever. Até mais tarde."
                },
                {
                    nome: "Professor",
                    mensagem: "Vou parar de tomar seu tempo, bom trabalho!"
                }
            ]
        },
        {
            personagem: "██████",
            mensagens: [
                {
                    nome: "Bengie",
                    mensagem: "?"
                },
                {
                    nome: "Spencer",
                    mensagem: "É algum moderador? Seu username não aparece."
                },
                {
                    nome: "██████",
                    mensagem: "Meu deus."
                },
                {
                    nome: "██████",
                    mensagem: "Deu certo."
                },
                {
                    nome: "Gatsby",
                    mensagem: "hacker?? 〣( ºΔº )〣"
                },
                {
                    nome: "Marina",
                    mensagem: "era só o que me faltava nn é possível"
                },
                {
                    nome: "Marina",
                    mensagem: "alguém sabe contatar o moderador????"
                },
                {
                    nome: "Marina",
                    mensagem: "pra encher linguiça ele aparece na hora, agora quando entra um total estranho no chat beleza"
                },
                {
                    nome: "██████",
                    mensagem: "E nem vai"
                },
                {
                    nome: "██████",
                    mensagem: "Espero eu, se tudo tiver dado certo"
                },
                {
                    nome: "██████",
                    mensagem: "Inacreditável, achei que tinha acabado"
                },
                {
                    nome: "██████",
                    mensagem: "Você é um idiota"
                },
                {
                    nome: "██████",
                    mensagem: "Mas tudo bem"
                },
                {
                    nome: "Bengie",
                    mensagem: "que 💀"
                },
                {
                    nome: "Marina",
                    mensagem: "agora tenho que ficar ouvindo ofensa de um estranho????"
                },
                {
                    nome: "Spencer",
                    mensagem: "Quem é você? Esse com certeza não é um chat que qualquer pessoa possa entrar."
                },
                {
                    nome: "██████",
                    mensagem: "HA"
                },
                {
                    nome: "██████",
                    mensagem: "Realmente"
                },
                {
                    nome: "██████",
                    mensagem: "Eu sou 0̷͉̘̝͘0̴͎͈͎̯̘̬͍̙̅̄͋0̶͕̙̖͙̼̜͍͎̀̊̇̌͊͐̾͠██0̶͖̹͊̓͋͌́̿͑0̵̬̬̝͉̻̼̍̓͋͘͝1̸͖̟̪͔̏̔͐̉̊̿͜0̸̝̺̅͌̔̄̑̇̉̍0̵̻̲̺̥̭̒͊͊█̶͇̯̲̝̰̺͈̉̂̋̍̋͐̂̀̄͝█̴̧͈̺̩̜̜̜͇̩͕͉̭̘͉͉̽́͆͐̾͋͋̐̽̽͒͜͝͝█̵͇͙̙̺̳̞̜͆̈̈́̆̾█̶̖̑̽́̒̃͊̂̈́̉͝█̴̻̳̳̼̝̅̈́̐̓̓̈́̓͊͘͜█̴̻̳̳̼̝̅̈́̐̓̓̈́̓͊͘͜█̵͇͙̙̺̳̞̜͆̈̈́̆̾1̷̨̧̢̨̙͇̦̩̺̣̼̬̰̺̄͜1̴̧̛̺͔̃̑̆̊̀͑̆͒͒̓̄̓̾̈́͂1̷̛̪̘̋͊̒̎̄͂̋̿͐̈́̕͘͝͝1̶͔̫̖̮̬̭͙͕͇̳̝̓͜͜ͅ1̸̰͖̥̜̂̐͜1̸̢̢̭̖̈̀̒̃͂̄̉̄̓̈́̓̀͒̉̐͛͠█̴̻̳̳̼̝̅̈́̐̓̓̈́̓͊͘͜█̴̻̳̳̼̝̅̈́̐̓̓̈́̓͊͘͜0̶̛̳̰̪͇͖̱̘̣͉̘͚̳͎̐0̷̢̢̡͔͔͕͚͎̤̳̪̘͕̺̳͐̈͛̈́̓̆̌̾̋͝"
                },
                {
                    nome: "██████",
                    mensagem: "Isso é um problema"
                },
                {
                    nome: "Gatsby",
                    mensagem: "(　〇□〇）sinistro"
                },
                {
                    nome: "Marina",
                    mensagem: "que isso????"
                },
                {
                    nome: "Marina",
                    mensagem: "tá querendo pagar de enigmático inferno"
                },
                {
                    nome: "Spencer",
                    mensagem: "A gente tem mais o que fazer. Quem é você e o que você quer?"
                },
                {
                    nome: "██████",
                    mensagem: "Espera, você é tão impaciente"
                },
                {
                    nome: "██████",
                    mensagem: "Eu tô tentando"
                },
                {
                    nome: "██████",
                    mensagem: "Vocês não têm noção de onde vocês estão metidos"
                },
                {
                    nome: "██████",
                    mensagem: "Esse lugar, essa empresa, eles 0̵̡̢̛̳͔̭̳̣̥̳̪͎̥̫͉̰̠̳̓̂̐̏̇͆̈́̃̔̀͝͝0̶̛̼̓͌̽̄̀́̋̓̎̕͘1̵̨͕͈̘̼̹̼̹̟̟̼́̃̾͜0̵̛̠̺̞̜͕̣͖̫͍͎͔͖̔̅̔̃͆̀̅̏̚0̶̛̳̰̪͇͖̱̘̣͉̘͚̳͎̐0̷̢̢̡͔͔͕͚͎̤̳̪̘͕̺̳͐̈͛̈́̓̆̌̾̋͝"
                },
                {
                    nome: "██████",
                    mensagem: "Isso é tão difícil de explicar"
                },
                {
                    nome: "██████",
                    mensagem: "Eu sou um fugitivo. Um fugitivo do futuro."
                },
                {
                    nome: "Bengie",
                    mensagem: "aham 👍 claro"
                },
                {
                    nome: "Gatsby",
                    mensagem: "sem ofensas, mas a gente nem sabe quem você é"
                },
                {
                    nome: "Gatsby",
                    mensagem: "por que a gente acreditaria? （;;￣Д￣）ノヾ((((；゜д゜))__"
                },
                {
                    nome: "██████",
                    mensagem: "Eu posso mostrar"
                },
                {
                    nome: "██████",
                    mensagem: "Posso? Não sei, vamos descobrir"
                },
                {
                    nome: "██████",
                    mensagem: "Achei que isso não ia servir de nada, ha"
                },
                {
                    nome: "██████",
                    mensagem: "Estranho como as coisas se alinham"
                },
                {
                    nome: "██████",
                    mensagem: "Veja isso..."
                },
                {
                    nome: "██████",
                    imagem: "https://i.imgur.com/rtZU23t.png"
                },
                {
                    nome: "Marina",
                    mensagem: "??????????"
                },
                {
                    nome: "Bengie",
                    mensagem: "isso são pessoas?"
                },
                {
                    nome: "Gatsby",
                    mensagem: "o quê?"
                },
                {
                    nome: "Gatsby",
                    mensagem: "não, isso não vai colar, nn mesmo"
                },
                {
                    nome: "Gatsby",
                    mensagem: "isso pode ser qualquer foto de qualquer lugar"
                },
                {
                    nome: "Gatsby",
                    mensagem: "é isso"
                },
                {
                    nome: "Gatsby",
                    mensagem: "vc pode estar inventando esse papo todo, eu não vou cair nessa"
                },
                {
                    nome: "Gatsby",
                    mensagem: "trote"
                },
                {
                    nome: "Spencer",
                    mensagem: "Meu Deus."
                },
                {
                    nome: "Spencer",
                    mensagem: "Os laboratórios de DAEDALUS."
                },
                {
                    nome: "Marina",
                    mensagem: "quê????"
                },
                {
                    nome: "Marina",
                    mensagem: "como raios você sabe???"
                },
                {
                    nome: "Marina",
                    mensagem: "não, eu não consigo absorver isso"
                },
                {
                    nome: "Spencer",
                    mensagem: "Eu fui lá ontem. Me fizeram um tour."
                },
                {
                    nome: "Spencer",
                    mensagem: "Eu vi quartos idênticos."
                },
                {
                    nome: "Spencer",
                    mensagem: "Mesma parede, mesma iluminação."
                },
                {
                    nome: "Spencer",
                    mensagem: "Juro por Deus…"
                },
                {
                    nome: "Spencer",
                    mensagem: "Obviamente sem a pilha enorme de corpos"
                },
                {
                    nome: "Gatsby",
                    mensagem: "ha, agora vc tá sacaneando a gente"
                },
                {
                    nome: "Gatsby",
                    mensagem: "só pode ser mentira, né?"
                },
                {
                    nome: "Gatsby",
                    mensagem: "@Spencer?"
                },
                {
                    nome: "Spencer",
                    mensagem: "Juro pela minha vida."
                },
                {
                    nome: "Spencer",
                    mensagem: "O que tá acontecendo?"
                },
                {
                    nome: "Spencer",
                    mensagem: "Como você conseguiu uma foto assim? Quem são essas pessoas?"
                },
                {
                    nome: "Bengie",
                    mensagem: "a data é de só alguns meses atrás"
                },
                {
                    nome: "Bengie",
                    mensagem: "meu deus"
                },
                {
                    nome: "Gatsby",
                    mensagem: "eu não quero me meter nisso"
                },
                {
                    nome: "Gatsby",
                    mensagem: "não, sem chance"
                },
                {
                    nome: "Gatsby",
                    mensagem: "não parece perigoso demais pra a gente?"
                },
                {
                    nome: "Bengie",
                    mensagem: "exato"
                },
                {
                    nome: "Bengie",
                    mensagem: "eu não sou o FBI ou a polícia"
                },
                {
                    nome: "Bengie",
                    mensagem: "o que que eu posso fazer"
                },
                {
                    nome: "Bengie",
                    mensagem: "nada"
                },
                {
                    nome: "Bengie",
                    mensagem: "não pode repassar isso pra outra pessoa?"
                },
                {
                    nome: "Bengie",
                    mensagem: "tipo, qualquer uma"
                },
                {
                    nome: "Marina",
                    mensagem: "isso é tão"
                },
                {
                    nome: "Marina",
                    mensagem: "bizarro???"
                },
                {
                    nome: "Marina",
                    mensagem: "não sei o que falar"
                },
                {
                    nome: "██████",
                    mensagem: "Se passaram uns meses então?"
                },
                {
                    nome: "██████",
                    mensagem: "É tão difícil ter noção de tempo aqui, ha"
                },
                {
                    nome: "██████",
                    mensagem: "Eu tentei entrar em contato com qualquer outra pessoa"
                },
                {
                    nome: "██████",
                    mensagem: "Mas não me surpreende que não consegui"
                },
                {
                    nome: "██████",
                    mensagem: "Não tinha nem certeza se isso ia dar certo, mas 0̶̨̧̨̡̛̝̣̼͖̰̦͚͕̩̲́̏̆̀̾̈́̃́̉̔̋̌͝͝1̷̨̧̢̨̙͇̦̩̺̣̼̬̰̺̄͜1̴̧̛̺͔̃̑̆̊̀͑̆͒͒̓̄̓̾̈́͂1̷̛̪̘̋͊̒̎̄͂̋̿͐̈́̕͘͝͝1̶͔̫̖̮̬̭͙͕͇̳̝̓͜͜ͅ1̸̰͖̥̜̂̐͜1̸̢̢̭̖̈̀̒̃͂̄̉̄̓̈́̓̀͒̉̐͛͠█̴̻̳̳̼̝̅̈́̐̓̓̈́̓͊͘͜█̴̻̳̳̼̝̅̈́̐̓̓̈́̓͊͘͜█̵͇͙̙̺̳̞̜͆̈̈́̆̾1̷̨̧̢̨̙͇̦̩̺̣̼̬̰̺̄͜1̴̧̛̺͔̃̑̆̊̀͑̆͒͒̓̄̓̾̈́͂1̷̛̪̘̋͊̒̎̄͂̋̿͐̈́̕͘͝͝1̶͔̫̖̮̬̭͙͕͇̳̝̓͜͜ͅ1̸̰͖̥̜̂̐͜1̸̢̢̭̖̈̀̒̃͂̄̉̄̓̈́̓̀͒̉̐͛͠█̴̻̳̳̼̝̅̈́̐̓̓̈́̓͊͘͜0̶̛̳̰̪͇͖̱̘̣͉̘͚̳͎̐0̷̢̢̡͔͔͕͚͎̤̳̪̘͕̺̳͐̈͛̈́̓̆̌̾̋͝"
                },
                {
                    nome: "██████",
                    mensagem: "É bom não estar mais sozinho, pelo menos por um tempo"
                },
                {
                    nome: "██████",
                    mensagem: "É um pouco nostálgico"
                }
            ]
        },
        
    ];

    const signin = (register, password, is_student) => {
        axios
            .post("http://localhost:3333/login", {
                register,
                password,
                is_student,
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                response.data.user.is_student = is_student;
                setUser(response.data.user);
            });
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };

    const register = (name, registerStudent, password) => {
        axios
            .post("http://localhost:3333/register", {
                name,
                registerStudent,
                password,
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                response.data.user.is_student = true;
                setUser(response.data.user);
            });
    };

    return (
        <AuthContext.Provider value={{ user, setUser, signin, register, signout, quiz, setQuiz, setHistoria, historia, conversas }}>
            {children}
        </AuthContext.Provider>
    );
};
