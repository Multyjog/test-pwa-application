<template>
    <div>
      <div class="welcome-screen">
          <div v-if="userAgent === 'chrome'">
            Добро пожаловать! Для установки приложения, пожалуйста, нажмите на кнопку ниже
            <hr>
            <button type="button" class="button" id="installPWA-button" :disabled="!promptFired" @click="installPWA" ref="installPWAButton">Установить на телефон</button>
            <hr>
            <button type="button" class="button" @click="$router.push({ name: 'documents' })">Продолжить в браузере</button>
          </div>

          <div v-if="userAgent === 'iphone'">
            Добро пожаловать! Для установки приложения, пожалуйста следуйте инструкции ниже
            <hr>
            <div>
              <ul>
                <li>Нажмите иконку поделиться в вашем браузере Safari</li>
                <li>Выберите пункт: "Добавить на экран 'домой'"</li>
              </ul>
            </div>
            <hr>
            <button type="button" class="button" @click="$router.push({ name: 'documents' })">Продолжить в браузере</button>
          </div>

          <div v-if="userAgent === 'firefox'">
            Добро пожаловать! Для установки приложения, пожалуйста следуйте инструкции ниже
            <hr>
            <div>
              <ul>
                <li>На вашем смартфоне, откройте меню браузера Firefox</li>
                <li>Выберите пункт: "Установить'"</li>
              </ul>
              <hr>
              <img src="../../public/img/firefox-instruction.jpg" alt="">
            </div>
            <hr>
            <button type="button" class="button" @click="$router.push({ name: 'documents' })">Продолжить в браузере</button>
          </div>

          <div v-if="!userAgent"> 
            Добро пожаловать! Для использования нашего мобильного приложение, пожалуйста: 
            <hr>
            <div>
              <ul>
                <li>Установите браузер <a href="https://www.google.com/chrome/">Google Chrome</a></li>
                <li>Зайдите на эту страницу снова и следуйте инструкции</li>
              </ul>
            </div>
            <hr>
            <button type="button" class="button" @click="$router.push({ name: 'documents' })">Продолжить в браузере</button>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'WelcomeScreen',
    data: () => ({
      installEvent: null,
      userAgent: null,
      promptFired: true,
    }),
    created() {
      // Проверка, запущено ли приложение в режиме PWA. У нас не используется, можно встроить доп логику
      if (navigator.standalone || window.matchMedia('(display-mode: standalone)').matches || window.matchMedia('(display-mode: fullscreen)').matches || window.matchMedia('(display-mode: minimal-ui)').matches) {
        console.log('APP IS IN STANDALONE MODE')
        this.$router.push({ name: 'documents' })
      }
      else{
        console.log("APPLICATION IS IN WEB")
      }
      const isPWAInstalled = localStorage.getItem('PWAInstalled') // Храним данные о установке в локалсторейдж
      if(navigator.userAgent.match(/chrome|chromium|crios/i)){
        // ЭТОТ ИВЕНТ ОТРАБАТЫВАЕТ ТОЛЬКО В БРАУЗЕРЕ CHROME
        if(isPWAInstalled) this.$router.push({ name: 'documents' }) //Если утановлено, редирект на документы

        window.addEventListener('beforeinstallprompt', (e) => {
          console.log('beforeinstallprompt event fired')
          e.preventDefault()
          this.promptFired = true // Делаем кнопку установки активной
          this.installEvent = e
        })
        window.addEventListener('appinstalled', (e) => {
          // место для доп логики после установки приложения
        })
        this.userAgent = 'chrome'
        this.promptFired = false // Выключаем кнопку от греха подальше
      }
      if(navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        console.log('IPHONE')
        this.userAgent = 'iphone'
      }
      if(navigator.userAgent.match(/firefox/i)) {
        console.log('FIREFOX')
        this.userAgent = 'firefox'
      }
    },
    methods: {
      async installPWA() {
        // ТОЛЬКО ДЛЯ CHROME
        this.installEvent.prompt()
        let result = await this.installEvent.userChoice;
        if (result && result.outcome === 'accepted') {
           this.$router.push({name: 'documents'})
           localStorage.setItem('PWAInstalled', true)
        }
      },
    }
}
</script>

<style scoped>
.welcome-screen {
  margin: 30px;
  font-weight: bold;
  text-align: center;
}
img {
  width: 200px;
  height: 400px;
}
</style>