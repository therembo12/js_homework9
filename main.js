// task 1
let $random = document.createElement('DIV')
    $random.id = 'random'

    h4 = document.createElement('h4')
    h4.textContent = 'Random number:'

    $random.appendChild(h4)


    $generate = document.createElement('BUTTON')
    $generate.textContent = 'Generate random number'

    $show_num = document.createElement('p')
    $show_num.textContent = '0'
    $random.appendChild($show_num)
    $random.appendChild($generate)
    $generate.addEventListener('click',()=>{
        $show_num.textContent = `${Math.floor(Math.random()*100)}`
    })

    style('20px auto','center','#fbf2e9','300px','10px')
        document.body.appendChild($random)

    function style(margin,textAlign,backgroundColor,width,padding){
        $random.style.margin = margin
        $random.style.textAlign = textAlign
        $random.style.backgroundColor = backgroundColor
        $random.style.width = width
        $random.style.padding = padding
    }
//  task 2
    let $mouse_div = document.createElement('DIV')
        $mouse_div.id = 'mouse_div'
        document.body.appendChild($mouse_div)
        $mouse_div.style.width = '100vw'
        $mouse_div.style.height = '100vh'
        $mouse_div.style.backgroundColor = '#fbf2e9'
        $mouse_div.style.textAlign = 'center'
        let x,y
        $corr = document.createElement('P')
        $mouse_div.appendChild($corr)
        $mouse_div.addEventListener('mousemove',(event)=>{
           x = event.clientX 
           y = event.clientY 
           $corr.textContent = `X = ${x} , Y = ${y}`  


        }) 
        let $click_text = document.createElement('P')
        $mouse_div.appendChild($click_text)

        document.body.addEventListener('click',()=>{
            $click_text.textContent = 'Лівий Клік'
        })
        document.body.addEventListener('contextmenu',(event)=>{
            event.preventDefault()
            $click_text.textContent = 'Правий Клік'
        })







// task3
let $text = document.createElement('DIV')
document.body.appendChild($text)
$text.style.padding = '20px'
$text.style.backgroundColor = '#fbf2e9'

$btn = document.createElement('button')
$btn.textContent = 'Hide/Show'
$text.appendChild($btn)
$text_content = document.createElement('P')
$text_content.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae optio perferendis dolorem, ab, repudiandae odit nihil aliquid reiciendis iure repellendus deserunt velit qui sequi ratione veritatis consequuntur dolor ipsum deleniti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum dolores, esse atque ipsum laudantium! Laborum esse, non magni nulla eveniet eligendi, alias doloribus consequuntur obcaecati temporibus officiis architecto possimus.Ullam repellat ipsum atque. Officiis sit sapiente alias nisi, facilis culpa accusantium omnis? Dolor laborum nihil, suscipit atque architecto, maxime aliquid quos magnam recusandae aliquam quis voluptatem iusto. Obcaecati, distinctio?'


$text.appendChild($text_content)
$btn.addEventListener('click', () => {
    $text_content.classList.toggle('disable')
})

//  task 4

let $list_toggle = document.querySelectorAll('.toggle article ul li'),
    $section = document.querySelectorAll('.toggle section'),
    prev = 0

for (let i = 0;i < $list_toggle.length;i++){
$list_toggle[i].style.padding = '5px'
$list_toggle[i].style.border = '1px solid blue'
$list_toggle[i].style.cursor = 'pointer'


$list_toggle[i].addEventListener('click',(event)=>{
    $section[prev].classList.remove('active')
    $list_toggle[prev].classList.remove('hovered')
    prev = i
    $section[i].classList.add('active')
    $list_toggle[i].classList.add('hovered')

})

}


// task 5
let $remove_btn = document.querySelectorAll('.remove section article button'),
    $remove_section = document.querySelectorAll('.remove section')

for (let i = 0; i < $remove_btn.length;i++){
    $remove_btn[i].addEventListener('click',()=>{
        $remove_section[i].remove()
    })
}


// task 6
let $progress = document.querySelector('.input_task6 progress')
    $progress_btn = document.querySelector('.input_task6 button')
$progress_btn.addEventListener('click',()=>{
    $progress.setAttribute('value',parseInt($progress.getAttribute('value'))+ 5)

})
