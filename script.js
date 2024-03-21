const pokemonCard = document.querySelectorAll('.cartao-pokemon')
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')

listaSelecaoPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        //seleciona o element html que possuir a classe aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        //remove a classe aberto deste pokemon para que as informações dele sejam ocultadas
        cartaoPokemonAberto.classList.remove('aberto')
        //pegando o nome  do id do elemento html dentro de uma constante
        const idPokemonSelelcionado = pokemon.attributes.id.value
        //concatenando o id do pokemon com o prefixo cartao
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelelcionado)
        //adicionando a classe aberto ao elemento  card
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        pokemon.classList.add('ativo')
    })
})

//selecionando a tag com a class .imagemLOGO
let logo = document.querySelector('.imagemLOGO')
//selecionando a tag com a class .imagemA
let pikachu = document.querySelector('.imagemA')
function aocarregar() {
    //altera o css fazendo com que a imagem do pikachu e do log alterem seu tamanho
    pikachu.style.transform = 'scale(1.1)'
    logo.style.transform = 'scale(1.1)'
}

//capturando a tag audio e colocando-a dentro de uma variável audioFundo
let audioFundo = document.querySelector('.audioFundo')
//capturando a imagem do play a adicionando-a dentro da variável audiPlay
let audioPlay = document.querySelectorAll('.play')

//função dará o play automaticamente
function play() {
    audioFundo.play()
}

//função que dará o pause de forma automática
function pause() {
    audioFundo.pause()
}

//guadra o elemento com a classe choque na variavel choque o elemento em questão é a tag vídeo
let choque = document.querySelector('.choque')

//
pikachu.addEventListener('click', () => {
    choque.style.display = 'block'
    choque.play()
})

let folha = document.querySelector('.folha')
let bulbasauro = document.querySelector('.imagemB')
bulbasauro.addEventListener('click', () =>{
    folha.style.display = 'block'
    folha.play()
})
 
let fogo = document.querySelector('.fogo')
let charmander = document.querySelector('.imagemC')
charmander.addEventListener('click', () =>{
    fogo.style.display = 'block'
    fogo.play()
})
 
let agua = document.querySelector('.agua')
let gyarados = document.querySelector('.imagemD')
gyarados.addEventListener('click', () =>{
    agua.style.display = 'block'
    agua.play()
})
 
let fanta = document.querySelector('.fantasma')
let gengar = document.querySelector('.imagemE')
gengar.addEventListener('click', ()=>{
    fanta.style.display = 'block'
    fanta.play()
})
 
let drago = document.querySelector('.drago')
let dragonite = document.querySelector('.imagemF')
dragonite.addEventListener('click', ()=>{
    drago.style.display = 'block'
    drago.play()
})
 
let aviso = document.querySelector('.aviso')
 
function mouseEntrar(){
    pikachu.style.transform = 'scale(1.2)'
    bulbasauro.style.transform = 'scale(1.3)'
    charmander.style.transform = 'scale(1.1)'
    gyarados.style.transform = 'scale(1.1)'
    gengar.style.transform = 'scale(1.2)'
    dragonite.style.transform = 'scale(1.1)'
    logo.style.transform = 'scale(1.2)'
    //alterando a opacidade do aviso para 1
    aviso.style.opacity = '1'
    //alterando a escala do aviso
    aviso.style.transform = 'scale(1)'
}
function mouseSair(){
    pikachu.style.transform = 'scale(1)'
    bulbasauro.style.transform = 'scale(1)'
    charmander.style.transform = 'scale(1)'
    gyarados.style.transform = 'scale(1)'
    gengar.style.transform = 'scale(1)'
    dragonite.style.transform = 'scale(1)'
    logo.style.transform = 'scale(1.1)'
    //alterando a opacidade do aviso para 1
    aviso.style.opacity = '0'
    //alterando a escala do aviso
    aviso.style.transform = 'scale(.8)'
}