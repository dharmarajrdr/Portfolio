$(document).ready(function(){
	var skills = [73,64,58,71,34,41,43,81];
	var socialColor = ['#ea4335','#dd2a7b','#0e76a8','#00acee','#4fce5d '];
	for(let i=0;i<8;i++){
		$('.progressBar:eq('+i+')').css('width',skills[i]+'%');
		$('.outerProgressBar').css('animation','showSkills 0.5s 0s linear 1 normal');
		$('.outerProgressBar').css('animation-fill-mode','forwards');
	}
	$('.sideNav > ul > li > a:eq(0)').css('background-color',$('.webProperty').css('background-color'));
	$('.color').click(function(){
		$('.color').css('transform','rotate(-45deg)');
		$(this).css('transition-duration','0.5s');
		$(this).css('transform','rotate(0deg)');
		$('.webProperty').css('background-color',$(this).css('color'));
		$('#moreInfo').css('background-color',$(this).css('color'));
		$('.sideNav > ul > li > .active').css('background-color',$(this).css('color'));
		$('.progressBar').css('background-color',$(this).css('color'));
		$('#greetName').css('color',$(this).css('color'));
		$('#contentBox1 h1 > .special').css('color',$(this).css('color'));
		$('#contentBox2 > h1 > span').css('color',$(this).css('color'));
		$('#contentBox3 > h1 > span').css('color',$(this).css('color'));
		$('#contentBox4 > h1 > span').css('color',$(this).css('color'));
		$('#navIcon').css('color',$(this).css('color'));
		$('#contentBox2 #bio .row label').css('color',$(this).css('color'));
		$('#contentBox2 #bio .row #languages .language').css('border-color',$(this).css('color'));
		$('#contentBox2 #bio .row #languages .language span > i').css('color',$(this).css('color'));
	});
	$('#endEffector').click(function(){
		if($(this).attr('class')=='fi fi-sr-angle-left'){
			$(this).attr('class','fi fi-sr-fill');
			$('.theme').css('animation','slidePalleteLeft 0.25s 0s linear 1 normal');
			$('.theme').css('animation-fill-mode','forwards');
			return;
		}
		if($(this).attr('class')=='fi fi-sr-fill'){
			$(this).attr('class','fi fi-sr-angle-left');
			$('.theme').css('animation','slidePalleteRight 0.25s 0s linear 1 normal');
			$('.theme').css('animation-fill-mode','forwards');
			return;
		}
	});
	$('.sideNav > ul > li').click(function(){
		$('.sideNav > ul > li').find('a').removeClass('active');
		$(this).find('a').addClass('active');
		$('.sideNav > ul > li > a').css('background-color','rgb(75,75,75,0.5)');
		$(this).find('a').css('background-color',$('.webProperty').css('background-color'));
		$('.rightHome').hide();
		if($('.sideNav > ul').css('flex-direction')=='row'){
			$('.sideNav > ul').slideUp();
		}
		$('#contentBox2 #bio .row #languages .language .ratings').hide();
		$('#contentBox2 #bio .row #languages .language span i').css('color','rgb(0,0,0,0)');
		switch($(this).index()){
			case 0:$('#contentBox4 #social .row').hide();$('#contentBox1').fadeIn(500);$('#contentBox1').css('display','flex');break;
			case 1:$('#contentBox4 #social .row').hide();$('#contentBox2').fadeIn(500);$('#contentBox2 #bio .row #languages .language .ratings').delay(500).slideDown(500);animateRatngs();$('#contentBox2').css('display','flex');break;
			case 2:$('#contentBox4 #social .row').hide();$('#contentBox3').fadeIn(500);$('#contentBox3').css('display','flex');break;
			case 3:$('#contentBox4').fadeIn(500);$('#contentBox4 #social .row').slideDown(500);$('#contentBox4').css('display','flex');$('#contentBox4 #social .row').css('display','flex');break;
		}
	});
	$('#moreInfo').click(function(){
		$('.rightHome').hide();$('#contentBox2').fadeIn(500);$('#contentBox2').css('display','flex');
		$('.sideNav > ul > li').find('a').removeClass('active');
		$('.sideNav > ul > li:eq(1)').find('a').addClass('active');
		$('.sideNav > ul > li > a').css('background-color','rgb(75,75,75,0.5)');
		$('.sideNav > ul > li:eq(1) > a').css('background-color',$(this).css('background-color'));
		$('#contentBox2').fadeIn(500);
		$('#contentBox2 #bio .row #languages .language .ratings').delay(500).slideDown(500);animateRatngs();
	});
	$('#contentBox4 #social .row').mouseenter(function(){
		$(this).find('i').css('color',socialColor[$(this).index()]);
		$(this).css('width','300px');
		$(this).css('margin','20px 0px');
		$(this).css('transition-duration','1s');
		$(this).css('border-left','10px solid '+socialColor[$(this).index()]);
		$(this).css('box-shadow','2px 4px 10px rgb(20,20,20,0.75)');
	});
	$('#contentBox4 #social .row').mouseleave(function(){
		$(this).find('i').css('color','#ddd');
		$(this).css('width','50px');
		if($('#contentBox4 #social .row').css('height')=='40px'){
			$(this).css('width','40px');
		}
		$(this).css('margin','5px 0px');
		$(this).css('transition-duration','1s');
		$(this).css('border-left','1px solid rgb(20,20,20,0.75)');
		$(this).css('box-shadow','2px 4px 10px rgb(20,20,20,0.5)');
	});
	$('.sideNav > #navIcon').click(function(){
		if($('.sideNav > ul').css('display')=='flex'){$('.sideNav > ul').slideUp(500);return;}
		if($('.sideNav > ul').css('display')=='none'){$('.sideNav > ul').slideDown(500);$('.sideNav > ul').css('display','flex');return;}
	});
	function animateRatngs(){
		let stars = $('#contentBox2 #bio .row #languages .language span i');
		let i = 0;
		setTimeout(function(){
			setInterval(function(){
				$('#contentBox2 #bio .row #languages .language span i:eq('+i+')').css('color',$('#contentBox2 > h1 > span').css('color'));i = i+1;
				if(i==10){
					return;
				}
			},100);
		},1000);
	}
});