<script setup>
const props = defineProps({
  character: Object
})

const linkTitles = ref(['Character','Check'])

</script>

<template>
	<div class="character-card_grid">
		<div class="character-card__bg"></div>

		<a class="character-card__link character-card__link_1" :href="character.link" target="_blank">{{linkTitles[0]}}</a>
		<a class="character-card__link character-card__link_2" href="/">{{ linkTitles[1] }}</a>
		
		<h1 class="character-card__name name_big">{{ character.name }}</h1>
		<h2 class="character-card__name name_mini">{{ character.name }}</h2>
		
		<p class="character-card__description">{{ character.description }}</p>
		
		<!-- <div class="circle-bg"></div>
		<div class="circle-bg cbg_2"></div> -->
		
		<img class="character-card__image" :src="character.image" :alt="character.name">
		<!-- <a class="character-card__barcode" :href="character.link">
			<img class="character-card__barcode" src="" alt="Barcode">
		</a> -->
	</div>
</template>


<style lang='scss' scoped>
// $font-size__name_big: 60px;
// $font-size__name_mini: 30px;

$max-width-card: $size_2 - 20px;
$max-height-card: calc($size_2 / 2);

a {
	color: $index-p__txt-color;	
}

.character-card {
	&_grid {
		@media screen {
			@media (min-width: $size_1) {
				display: grid;
				grid-template-rows: repeat(1fr);
				grid-template-columns: 100%;

				padding: 0 0 10px 0;

				overflow: hidden;
				
				font-family: 'GmarketSans';

				border-radius: 2px;
			}
			@media (min-width: $size_2) {
				grid-template-columns: 50% 50%;
			}
			@media (min-width: $size_3) {
				max-width: $size_3 - 20px;
				border-radius: 3px;
			}
			@media (min-width: $size_4) {
				grid-template-columns: 10px 
									   150px
									   150px
									   1fr
									   1fr
									   84px;

				grid-template-rows: 40px
									60px
									min-content
									80px
									10px;
				
				max-width: $size_4 - 20px;

				overflow: visible;

			}
			@media (min-width: $size_5) {
				max-width: $size_5 - 20px;

				border-radius: 4px;
			}
			@media (min-width: $size_6) {
				max-width: $size_5 - 20px;
				
			}
		}
	}

	&__bg {
		@media screen {
			@media (min-width: $size_1) {
				grid-column: 1;
				grid-row: 1 / 10;

				min-width: 100%;
				min-height: 100%;
				background: $char-card__bg;

				z-index: $z-bg_1;
			}
			@media (min-width: $size_2) {
				grid-column: 1 / 3;
			}
			@media (min-width: $size_3) {

			}
			@media (min-width: $size_4) {
				grid-row: 2 / 5;
				grid-column: 1 / 6;

				// background: red;
			}
			@media (min-width: $size_5) {

			}
			@media (min-width: $size_6) {

			}
		}	
	}

	&__link {
		@media screen {
			@media (min-width: $size_1) {
				text-transform: uppercase;
				z-index: $z-txt_1;
			}
			@media (min-width: $size_4) {
				padding: 30px 20px;
			}
		}
		&_1 {
			@media screen {
				@media (min-width: $size_1) {
					padding: 10px 0 0 0;
					grid-row: 1;
					grid-column: 1;
					justify-self: center;
				}
				@media (min-width: $size_2) {
					padding: 10px;
				}
				@media (min-width: $size_3) {

				}
				@media (min-width: $size_4) {
					grid-row: 2;
					grid-column: 2;

					padding: 30px 20px;
				}
				@media (min-width: $size_5) {
				
				}
				@media (min-width: $size_6) {
			
				}
			}
		}

		&_2 {
			@media screen {
				@media (min-width: $size_1) {
					grid-column: 1;
					grid-row: 2;
					justify-self: center;

					padding: 0 0 10px 0;
				}
				@media (min-width: $size_2) {
					grid-column: 2;
					grid-row: 1;

					padding: 10px;
				}
				@media (min-width: $size_3) {

				}
				@media (min-width: $size_4) {
					grid-row: 2;
					grid-column: 3;

					padding: 30px 20px;
				}
				@media (min-width: $size_5) {

				}
				@media (min-width: $size_6) {

				}
			}
		}
	}

	&__name {
		@media screen {
			@media (min-width: $size_1) {
				grid-row: 3;
				text-transform: uppercase;
			}
			@media (min-width: $size_2) {

			}
			@media (min-width: $size_3) {

			}
			@media (min-width: $size_4) {
				grid-row: 3;
			}
			@media (min-width: $size_5) {

			}
			@media (min-width: $size_6) {

			}
		}
	}

	&__description {
		@media screen {
			@media (min-width: $size_1) {
				grid-row: 4;
				grid-column: 1;
				
				padding: 5px;
				
				text-transform: none;
				font-family: 'Montserrat';
				font-size: 14px;
				text-shadow: 0px 2px 20px $char-card__bg;		

				z-index: $z-txt_2;
			}
			@media (min-width: $size_2) {
				grid-column: 1 / 3;
				
			}
			@media (min-width: $size_3) {

			}
			@media (min-width: $size_4) {
				grid-row: 4;
				grid-column: 2 / 5;

				padding: 20px;
			}
			@media (min-width: $size_5) {

			}
			@media (min-width: $size_6) {

			}
		}
	}

	&__image {
		@media screen {
			@media (min-width: $size_1) {
				grid-row: 3;
				grid-column: 1;
				
				max-width: 150%;
				z-index: $z-img;

				border-bottom: 3px solid $index-p__bg;
			}
			@media (min-width: $size_2) {
				grid-column: 1 / 3;

			}
			@media (min-width: $size_3) {

			}
			@media (min-width: $size_4) {
				grid-row: 1 / 5;
				grid-column: 4 / 7;

				justify-self: end;
				align-self: end;
				
				max-width: 100%;
				max-height: 100%;

				border-bottom: 0px solid transparent;
			}
			@media (min-width: $size_5) {

			}
			@media (min-width: $size_6) {

			}
		}
	}

	&__barcode {
		@media screen {
			@media (min-width: $size_1) {
				grid-row: 5;
				grid-column: 1;
				
				z-index: $z-txt_2;
				justify-self: center;

				padding: 10px;
			}
			@media (min-width: $size_2) {
				grid-column: 1 / 3;

			}
			@media (min-width: $size_3) {

			}
			@media (min-width: $size_4) {
				grid-row: 4;
				grid-column: 5;

				align-self: end;
				justify-self: end;
				padding: 20px;
			}
			@media (min-width: $size_5) {
				padding: 30px;
			}
			@media (min-width: $size_6) {

			}
		}
	}
}
.name {
	&_big {
		@media screen {
			@media (min-width: $size_1) {
				grid-column: 1;
				padding: 0 0 0 10px;
				
				z-index: $z-txt_1;

				font-size: 80px;

				-webkit-text-stroke: 2px $index-p__txt-color;
				color: transparent;
			}
			@media (min-width: $size_2) {
				font-size: 100px;
			}
			@media (min-width: $size_3) {
				font-size: 130px;
			}
			@media (min-width: $size_4) {
				grid-column: 2 / 7;

				padding: 0 0 0 50px;

				font-size: 150px;

				-webkit-text-stroke: 3px $index-p__txt-color;
			}
			@media (min-width: $size_5) {
				padding: 0 0 0 60px;
				font-size: 165px;
			}
			@media (min-width: $size_6) {
				padding: 0 0 0 80px;

				font-size: 200px;
				-webkit-text-stroke: 4px $index-p__txt-color;
			}
		}
	}

	&_mini {
		@media screen {
			@media (min-width: $size_1) {
				grid-column: 1;
				z-index: $z-txt_2;
				
				padding: 1.5em 0 0 5px;

				font-size: 35px;
				
				text-shadow: 0px 5px 10px $char-card__bg;		
			}
			@media (min-width: $size_2) {
				font-size: 50px;
			}
			@media (min-width: $size_3) {

			}
			@media (min-width: $size_4) {
				grid-column: 2;
				padding: 1.6em 0 0 25px;

				font-size: 60px;
			}
			@media (min-width: $size_5) {
				padding: 1.8em 0 0 35px;

				font-size: 70px;
			}
			@media (min-width: $size_6) {
				padding: 1.9em 0 0 45px;
			}
		}
	}
}
.circle-bg {
	@media screen {
		@media (min-width: $size_4) {
			grid-row: 3;
			grid-column: 4;
			background: conic-gradient(rgb(32, 197, 197), magenta, rgb(200, 200, 5), rgb(32, 197, 197));
			z-index: $z-bg_2;
			border-radius: 50%;
			width: 100px;
			height: 100px;
		}
	}
}

.cbg_2 {
	transform: translateX(20px);
	grid-row: 3;
	grid-column: 4;
	background: conic-gradient(rgb(119, 0, 255), rgb(146, 70, 146), rgb(119, 60, 5), rgb(119, 0, 255));

}

</style>