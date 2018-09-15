let buttons = $('#buttons>span')

for (let i = 0; i < buttons.length; i++) {
	$(buttons[i]).on('click',function(x){
		let target = x.currentTarget
		let index = $(target).index()
		let movingDistance = index*-300
		$('.images').css('transform','translate('+movingDistance+'px)')
		$(target).addClass('red').siblings('.red').removeClass('red')
		j=index
	})
}


let j = 0
let length = buttons.length

function setTimer(){
	return setInterval(function(){
		buttons.eq(j%length).trigger('click')
		j=j+1
	}, 1000)
}

let timer = setTimer()

$('.window').on('mouseenter', function(){
	window.clearInterval(timer)
})

$('.window').on('mouseleave', function(){
	timer = setTimer()
})