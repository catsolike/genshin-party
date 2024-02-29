<script lang="ts" setup>

const characters = ref<ICharacter[]>([
        {   
            id: 0,
            name: 'Yanfei',
            image: 'img/yanfei.png',
            link: 'https://genshin-impact.fandom.com/wiki/Yanfei',
            description: 'Sometimes the law is compatible with human nature, but sometimes the two conflict. Balancing the two is a discipline in its own right...',
        },
        {   
            id: 1,
            name: 'Keqing',
            image: 'img/keqing.png',
            link: 'https://genshin-impact.fandom.com/wiki/Keqing',
            description: 'Hello. I am Keqing, Yuheng of the Liyue Qixing. We live in an era of change, as the old order that has existed for a thousand years is about to be rewritten. Join me. Let us bear witness to this historical moment together.',
        },
        {   
            id: 2,
            name: 'Ganyu',
            image: 'img/ganyu.png',
            link: 'https://genshin-impact.fandom.com/wiki/Ganyu',
            description: 'Copy that! Here is a draft Service Agreement for your review and consideration. Effective immediately, if all is in order… Ah! Wait a sec, wait a sec, I forgot to sign it… Gan… Yu… There. Right. Now… What was it you needed me to do for you exactly?',
        },
    ]);

const designerNickname = ref<string>('Karhyl');
const designerLink = ref<string>('https://ru.pinterest.com/Karhylselft/');
const developerNickname = ref<string>('Catsolike');
const developerLink = ref<string>('https://github.com/catsolike/');
const credits = ref<string[]>([`Design by `, `Site by `])

const headerTitles = ref<string[]>(['Genshin Impact', 'Party']);
const footerTxt = ref<string[]>(['Party combo', 'Check your waifu', 'Just for fun']);
const logo = ref<IImage>({
    src: 'img/logo.svg',
    alt: 'Mihoyo',
});
const genshinLink = ref<string>('https://genshin.hoyoverse.com');
</script>


<template>
    <div class="index_grid">
        <header class="index__header">
            <h1 class="index__title index__title_1">{{ headerTitles[0] }}</h1>
            <h2 class="index__title index__title_2">{{ headerTitles[1] }}</h2>
    
            <a class="index__logo" 
               :href="genshinLink"
               target="_blank">
                <img class="index__logo" :src="logo.src" :alt="logo.alt">
            </a>
        </header>
        
        <main class="index__main">
            <character-card class="char-card"
                            v-for="item in characters"
                            :key="item.id"
                            :character="item"/>
        </main>

        <footer class="index__footer"
                role="contentinfo">
            <div class="index__info_left">
                <p class="info__txt info__txt_1">{{ footerTxt[0] }}</p>
                <p class="info__txt info__txt_2">{{ footerTxt[1] }}</p>

                <div class="info__decor"></div>
                
                <p class="info__txt info__txt_3">{{ footerTxt[2] }}</p>
            </div>
            
            <div class="credits">
                <p class="credits__designer">{{ credits[0] }}<a :href="designerLink" target="_blank">{{ designerNickname }}.</a></p>
                <p class="credits__coder">{{ credits[1] }}<a :href="developerLink" target="_blank">{{ developerNickname }}</a></p>
            </div>
        </footer>
    </div>
</template>


<style lang='scss' scoped>
a {
    color: $index-p__txt-color;
}
.index {
    &_grid {
        display: grid;
        grid-template-columns: 1fr
                               minmax(130px, max-content)
                               1fr;
        
        min-height: 100%;
        background: $index-p__bg;
        color: $index-p__txt-color;
        font-family: 'GmarketSans';
        text-transform: uppercase;
    }

    &__header {
        @media screen {
            @media (min-width: $size_1) {
                grid-column: 2;

                display: grid;
                grid-template-columns: 1fr;
            }
            @media (min-width: $size_2) {
                grid-template-columns: 1fr 1fr;
            }
        }
        
    }

    &__title {
        @media screen {
            @media (min-width: $size_1) {
                font-size: 20px;
                text-align: center;
                padding: 0 0 0 10px;
            }
            @media (min-width: $size_2) {
                text-align: left;
            }
            @media (min-width: $size_3) {
                padding: 0;
            }
        }

            &_1 {
                @media screen {
                    @media (min-width: $size_1) {
                        grid-column: 1;
                        padding-top: 15px;
                    }
                }
            }

            &_2 {
                @media screen {
                    @media (min-width: $size_1) {
                        grid-column: 1;
            
                        font-family: 'Montserrat';
                        font-weight: normal;
                    }
                }
            }
    }

    &__logo {
        @media screen {
            @media (min-width: $size_1) {
                justify-self: center;

                padding: 10px;
                max-width: 100px;
            }
            @media (min-width: $size_2) {
                grid-column: 2;
                justify-self: end;
            }
            @media (min-width: $size_3) {
                max-width: 100px;

                padding: 0 0 15px 0;
            }
            @media (min-width: $size_4) {
                max-width: 200px;

                padding: 15px 90px 10px 0;
            }
        }
    }

    &__main {
        grid-column: 2;
    }

    &__footer {
        @media screen {
            @media (min-width: $size_1) {
                grid-column: 2;

                display: grid;
                grid-template-columns: 100%;
            }
            @media (min-width: $size_2) {
                grid-template-columns: 1fr 1fr;

            }
        }
    }

    &__info {

        &_left {
            grid-column: 1;
        }
    }
}
.char-card {
}
.info {
    &__txt {
        @media screen {
            @media (min-width: $size_1) {
                text-align: center;
                font-size: 10px;
            }
            @media (min-width: $size_2) {
                text-align: left;                
            }
        }
        
        &_1 {
            @media screen {
                @media (min-width: $size_1) {
                    font-size: 20px;
                }
                @media (min-width: $size_4) {
                    font-size: 30px;
                }
            }
        }

        &_2 {
            @media screen {
                @media (min-width: $size_1) {
                    font-size: 10px;
                    font-family: 'Montserrat';
                    letter-spacing: 0.4em;
                }
                @media (min-width: $size_4) {
                    font-size: 15px;
                }
            }
        }

        &_3 {
            @media screen {
                @media (min-width: $size_1) {
                    padding: 0 0 20px 0;
                    font-size: 10px;
                }
                @media (min-width: $size_4) {
                    font-size: 15px;
                }
            }
        }
    }

    &__decor {
        @media screen {
            @media (min-width: $size_1) {
                margin: 15px auto;

                width: 60%;
                height: 5px;
                background-color: yellow
            }
            @media (min-width: $size_2) {
                margin: 15px 0;
            }
            @media (min-width: $size_3) {
            }
            @media (min-width: $size_4) {
            }
            @media (min-width: $size_5) {
                width: 30%;
            }
            @media (min-width: $size_6) {
            }
        }
    }
}

.credits {
    @media screen {
        @media (min-width: $size_1) {
            grid-column: 1;

            text-align: center;
            justify-self: center;
            text-transform: none;
            font-size: 15px;

            padding: 20px 0 15px 0;
        }
        @media (min-width: $size_2) {
            grid-column: 2;
            text-align: end;
            justify-self: end;

            padding: 15px auto;
        }
        @media (min-width: $size_3) {
            font-size: 20px;
        }
        @media (min-width: $size_4) {
            padding: 15px 90px 15px 0;
        }
    }
    &__designer {
        padding-bottom: 5px;
    }

    &__coder {
    }
}

</style>