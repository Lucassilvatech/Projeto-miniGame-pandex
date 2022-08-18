const $panda = document.querySelector('.panda')
const $obstacle = document.querySelector('.obstacle')
const $conteiner = document.querySelector('.conteiner')
let $contador = document.querySelector('.contador')
let play = document.querySelector('.start')
const $iniciar = document.querySelector('.pressStart')
$obstacle.style.display = 'none'
const $cloud = document.querySelector(".cloud")
const $cloud002 = document.querySelector(".cloud002")
$cloud.style.animation = 'none'
$cloud002.style.animation = 'none'
// inicia a animação do tronco quando o botão "Start" é clicado
$iniciar.addEventListener('click', () => {
    play.style.display = 'none'
    $cloud.style.animation = 'cloudAnimation 4.9s linear infinite'
    $cloud002.style.animation = 'cloudAnimation002 5.3s linear infinite'
    $obstacle.style.display = 'block'
    $obstacle.style.animation = 'obtAN 2.5s linear infinite'

    // loop para verifica se o jogador perdeu
    const loop = setInterval(() => {

        const obstacle = $obstacle.offsetLeft;
        const panda = +window.getComputedStyle($panda).bottom.replace('px', '')
        let tamanhoTela = screen.height
        
        // verifica se a tela tem altura menor que 500px
        if (tamanhoTela < 501) {
            $obstacle.style.animation = 'obtAN 1.8s linear infinite'
            // função para o panda pular com o click 
            $conteiner.addEventListener('mousedown', () => {
                $panda.classList.add('pandaAnimation')
                setTimeout(() => {
                    $panda.classList.remove('pandaAnimation')
                }, 700)
            })

            // se for verdadeiro significa que o panda colidiu com o tronco finalizando as animações.
            if (obstacle <= 163 && obstacle > 78 && panda < 60) {
                $obstacle.style.animation = 'none';
                $obstacle.style.left = `${obstacle}px`
                $panda.style.animation = 'none'
                $panda.style.bottom = `${panda}px`

                // Finaliza os loops
                clearInterval(loop)
                clearInterval(contador)

                // recarrega a pagina após 1.2 segundos para reiniciar o jogo
                setTimeout(() => {
                    document.location.reload()
                }, 1200)

            }

        } else {
            
            
            // Função para o panda pular quando preciona a tecla Space/Espaço
            const pulopanda = document.addEventListener('keypress', event => {

                if (event.key === " ") {
                    $panda.classList.add('pandaAnimation')
                    // função para remover animação do panda
                    setTimeout(() => {
                        $panda.classList.remove('pandaAnimation')
                    }, 700)
                }

            })

            // se for verdadeiro significa que o panda colidiu com o tronco finalizando as animações.
            if (obstacle <= 210 && obstacle > 90 && panda < 83) {
                $obstacle.style.animation = 'none';
                $obstacle.style.left = `${obstacle}px`
                $panda.style.animation = 'none'
                $panda.style.bottom = `${panda}px`

                // Finaliza os loops
                clearInterval(loop)
                clearInterval(contador)

                // recarrega a pagina após 1.2 segundos para reiniciar o jogo
                setTimeout(() => {
                    document.location.reload()
                }, 1200)


            }
        }
    }, 50)
    // Loop para contar pontos 
    let pontos = 0
    const contador = setInterval(() => {
        pontos++
        
        $contador.textContent = `${pontos}`

    }, 50)

})
