let allButtons = $('#buttons>span')

for (let i = 0; i < allButtons.length; i++) {
	$(allButtons[i]).on('click',function(x){
		let index = $(x.currentTarget).index()
		let moveDistance = index *-300
		$('#images').css({
			transform:'translate('+moveDistance+'px)'	
		})
		num = index
		allButtons.eq(num).addClass('red').siblings('.red').removeClass('red')
	})
}


let length = allButtons.length;
let num = 0;
allButtons.eq(num%length).trigger('click').addClass('red').siblings('.red').removeClass('red')

let timer = setInterval(()=>{
	num = num+1;
	allButtons.eq(num%length).trigger('click').addClass('red').siblings('.red').removeClass('red')
},2000)



$('.window').on('mouseenter', function(){
	window.clearInterval(timer)
})

$('.window').on('mouseleave', function(){
	timer = setInterval(()=>{
		num = num+1;
		allButtons.eq(num%length).trigger('click').addClass('red').siblings('.red').removeClass('red')
	},2000)
})

