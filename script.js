const $panda = document.querySelector('.panda')
const $obt = document.querySelector('.obt')
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

const loop = setInterval(() =>{
    const obt = $obt.offsetLeft;
    const panda = +window.getComputedStyle($panda).bottom.replace('px', '')
    console.log(obt)
    
    if(obt <= 215 && obt > 87 && panda < 55){
        $obt.style.animation = 'none';
        $obt.style.left = `${obt}px`
    }
}, 10)