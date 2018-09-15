let buttons = $('#buttons>span')

for (let i = 0; i < buttons.length; i++) {
	$(buttons[i]).on('click',function(x){
		let target = x.currentTarget
		let index = $(target).index()
		let moving = index*-300
		$('.images').css('transform','translate('+moving+'px)')
		$(target).addClass('red').siblings('.red').removeClass('red')
		// 另一种写法：buttons.eq(i).addClass('red').siblings('.red').removeClass('red')
		// 另一种写法：$(buttons[i]).addClass('red').siblings('.red').removeClass('red')
		j = index
	})
}

let j =0
let length = buttons.length

let timer = setTimer()

function setTimer(){
	return setInterval(function(){
		buttons.eq(j%length).trigger('click')
		j=j+1
	},1000)
}

$('.window').on('mouseenter', function(){
	window.clearInterval(timer)
})

$('.window').on('mouseleave', function(){
	timer = setTimer()
})