<template>
  <div>
    <div v-if="!officeAvailable" class="callout alert">
      <h5>Microsoft Office не установлен</h5>
      <p>
        Функция конвертации, документа из формата DOCX в формат DOC, недоступна.
      </p>
    </div>

    <div class="button-group">
      <button type="button" class="button" v-on:click="runApp1">Запустить приложение "Блокнот"</button>
      <button type="button" class="button" v-bind:disabled="!officeAvailable">Преобразовать из docx в doc</button>
      <button type="button" class="button" v-on:click="clickBeepButton">Подать сигнал</button>
      <button type="button" class="button" id="installPWA-button" @click="installPWA" ref="installPWAButton">Установить на телефон</button>
    </div>
  </div>
</template>

<script>
  import wrapperBridge from '../lib/WrapperBridge'
  // import TemplateGenerator from '../lib/TemplateGenerator'
  // import installPWALogic from '../mixins/InstallPWA.js'

  export default {
    mixins: ['installPWALogic'],
    data: () => ({
      shown: false,
    }),
    computed: {
      officeAvailable() {
        this.$store.state.officeWrapperAvailable
      }
    },
    beforeMount() {
      console.log('hook FIRED!!!!!')

      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault()
        this.installEvent = e
        this.shown = true
        console.log('beforeinstallprompt fired!!!!!!!!!!!!')
      })
    },
    methods: {
      installPWA() {
        console.log('INSTALL PWA FIRED')
        this.installEvent.prompt()
        this.installEvent.userChoice.then((choice) => {
          console.log('USER CHOICE FIRED')
          this.dismissPrompt() // Hide the prompt once the user's clicked
          if (choice.outcome === 'accepted') {
            // Do something additional if the user chose to install
            this.shown = false
          } else {
            // Do something additional if the user declined
          }
        })
      },
      clickBeepButton() {
        wrapperBridge.beep()
      },

      runApp1() {
        wrapperBridge.execExternal("c:\\\\windows\\system32\\notepad.exe", [], "c:\\\\windows")
      },

      // convertDocxToDoc() {
      //   wrapperBridge.getOfficeBridge().saveFile("contentData://files/convert.docx",
      //           "storeDocs://converted.doc",
      //           handlers: {fileSaved: @_handlerConvertDocxToDocSaved.bind(@)})
      // },

      _handlerConvertDocxToDocSaved(filePath, saveTo) {
        alert("Файл  сконвертирован")
      },
    }
  }
</script>
