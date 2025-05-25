//Neste desafio, vamos aprender sobre as matrizes! As matrizes são vetores bidimensionais, você consegue armazenar nelas vários vetores ao mesmo tempo, ... 
//...facilitando assim para localizar um vetor específico ou até mesmo uma parte específica de um vetor específico.

let classePersonagem = ["Cavaleiro", "Mago", "Bandido", "Feiticeiro"] //Aqui, estamos criando um vetor e atribuindo a ele as classes do personagem.

let personagem = [ //Aqui estamos criando a matriz que contém as classes e suas características
    ["Cavaleiro", "M", "Buiuia"], //Nesta linha, definimos que o personagem da classe cavaleiro é de gênero masculino e seu nome é Buiuia.
    ["Mago", "F", "Gata Claudete"], //Nesta linha, definimos que o personagem da classe mago é de gênero feminino e seu nome é Gata Claudete.
    ["Bandido", "M", "Pyrolito"], //Nesta linha, definimos que o personagem da classe bandido é de gênero masculino e seu nome é Pyrolito.
    ["Feiticeiro", "F", "Sara Sarada"] //Nesta linha, definimos que o personagem da classe feiticeiro é de gênero feminino e seu nome é Sara Sarada.
]

console.log(personagem[0][0]) //Se você quer selecionar uma variável específica do vetor específico, ... 
                             //...também é bem fácil! Basta somente escrever dois colchetes de posição, um ao lado do outro!... 
                             //...O primeiro servirá para selecionar o vetor (linha), o segundo para a variável (coluna)!