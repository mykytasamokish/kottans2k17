<template lang='pug'>
  transition(name="modal")
    .modal-mask
      .modal-wrapper
        .modal-container

          .modal-header
            slot(name="header")
              span default header

          .modal-body
            slot(name="body")
              span default body

          .modal-footer
            slot(name="footer")
              span default footer
              button.modal-default-button(@click="$emit('close')") OK
</template>

<script>
export default {
  name: 'modal-window'
}
</script>

<style lang='styl'>
.modal-mask
  position fixed
  z-index 9998
  top 0
  left 0
  width 100%
  height 100%
  background-color rgba(0, 0, 0, .5)
  display table
  transition opacity .3s ease

.modal-wrapper
  display table-cell
  vertical-align middle

.modal-container
  width 60%
  margin 0px auto
  padding 20px 30px
  background-color #fff
  border-radius 2px
  box-shadow 0 2px 8px rgba(0, 0, 0, .33)
  transition all .3s ease
  font-family Helvetica, Arial, sans-serif

.modal-header a
  text-decoration none
  margin-top 0
  color #42b983

.modal-body
  margin 20px 0

  .table
    display flex
    justify-content space-around
    margin 10px

    .info
      list-style none
      .key
        color grey
        font-size 16px
      .value
        margin-left 8px
        color grey

.modal-default-button
  float right

.modal-enter
  opacity 0

.modal-leave-active
  opacity 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
  transform scale(1.1)
</style>
