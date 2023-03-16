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
    </div>
  </div>
</template>

<script>
  import wrapperBridge from '../lib/WrapperBridge'

  export default {
    mixins: ['installPWALogic'],
    computed: {
      officeAvailable() {
        this.$store.state.officeWrapperAvailable
      }
    },
    methods: {
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
