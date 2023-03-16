<template>
    <div class="welcome-screen">
        <div v-if="!applicationInstalled && userAgent !== 'iphone'">
            Добро пожаловать! Для установки приложения, пожалуйста, нажмите на кнопку ниже
            <hr>
            <div>
              <button type="button" class="button" id="installPWA-button" @click="installPWA" ref="installPWAButton">Установить на телефон</button>
            </div>
        </div>

        <div v-if="!applicationInstalled && userAgent === 'iphone'">
          Добро пожаловать! Для установки приложения, пожалуйста следуйте инструкции ниже
            <hr>
            <div>
              <ul>
                <li>Нажмите иконку поделиться в вашем браузере Safari</li>
                <li>Выберите пункт: "Добавить на экран 'домой'"</li>
              </ul>
            </div>
        </div>

        <div v-else-if="applicationInstalled">
            Добро пожаловать в ваше мобильное приложение. Нажмите кнопку ниже, что бы перейти к документам
            <hr>
            <div>
              <button type="button" class="button" @click="$router.push({ name: 'documents' })">Перейти к документам</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WelcomeScreen',
    data: () => ({
      installEvent: null,
      applicationInstalled: true,
      userAgent: null,
    }),
    beforeMount() {
      window.addEventListener('DOMContentLoaded', function(){
         if (navigator.standalone || window.matchMedia('(display-mode: standalone)').matches || window.matchMedia('(display-mode: fullscreen)').matches || window.matchMedia('(display-mode: minimal-ui)').matches) {
           console.log('APP IS IN STANDALONE MODE')
          }
          else{
            console.log("APPLICATION IS NOT INSTALLED")
            this.applicationInstalled = false
          }
      });
      window.addEventListener('beforeinstallprompt', (e) => {
        console.log('BEFORE INSTALL FIRED')
        this.applicationInstalled = false
        e.preventDefault()
        this.installEvent = e
      })
      if(navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        this.userAgent = 'iphone'
      }
      console.log(this.userAgent)
    },
    methods: {
      async installPWA() {
          this.installEvent.prompt()
          let result = await this.installEvent.userChoice;
          console.log('RESULT:', result)
          if (result && result.outcome === 'accepted') {
             console.log('APP INSTALLED FROM FUNCTION')
             this.$router.push({name: 'documents'})
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
</style>