let allButtons = $('#buttons>span')

for (let i = 0; i < allButtons.length; i++) {
	$(allButtons[i]).on('click',function(x){
		let index = $(x.currentTarget).index()
		let moveDistance = index *-300
		$('#images').css({
			transform:'translate('+moveDistance+'px)'	
		})
		num = index
		makeItRed(allButtons.eq(num))
	})
}




let length = allButtons.length;
let num = 0;
playWhich(num%length)

let timer = setTimer()




function makeItRed($button){
	$button.addClass('red').siblings('.red').removeClass('red')
}

function playWhich(index){
	allButtons.eq(index).trigger('click')
}

function setTimer(){
	return setInterval(()=>{
		num = num+1;
		playWhich(num%length)
	},2000)
}




$('.window').on('mouseenter', function(){
	window.clearInterval(timer)
})

$('.window').on('mouseleave', function(){
	timer = setTimer()
})

