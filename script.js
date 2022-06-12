const $panda = document.querySelector('.panda')
const $obt = document.querySelector('.obt')
const $conteiner = document.querySelector('.conteiner')
click = true
   
document.addEventListener('keydown', event =>{
     if(click === true){
        if(event.keyCode === 32){
            $panda.classList.add('pandaAn')
            setTimeout(() =>{
            $panda.classList.remove('pandaAn')
            },700) 
        }
    
    }

    setTimeout(() =>{
        click = false
        setTimeout(() => {
            click = true
        },700)
    },0)
})
$conteiner.addEventListener('click', () =>{
    $panda.classList.add('pandaAn')
    setTimeout(() =>{
    $panda.classList.remove('pandaAn')
    },700)
})
const loop = setInterval(() =>{
    const obt = $obt.offsetLeft;
    const panda = +window.getComputedStyle($panda).bottom.replace('px', '')
    console.log(obt)
    
    if(obt <= 210 && obt > 75 && panda < 50){
        $obt.style.animation = 'none';
        $obt.style.left = `${obt}px`

        $panda.style.animation = 'none'
        $panda.style.bottom = `${panda}px`
        clearInterval(loop)
    }
}, 10)