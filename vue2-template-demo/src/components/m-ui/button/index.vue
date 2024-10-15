<template>
  <button class="m-button" :class="styleClass">
    <span v-if="icon">
      <r-icon :name="icon"></r-icon>
    </span>

    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MButton',
  props: {
    type: {
      type: String,
      default: '',
      validator: value => {
        return ['', 'primary', 'success', 'warning', 'danger'].includes(value)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    styleClass() {
      return {
        [`m-button--${this.type}`]: this.type,
        'is-round': this.round,
        'is-disabled': this.disabled
      }
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.m-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.m-button + .m-button {
  margin-left: 10px;
}

.m-button:focus,
.m-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

.m-button:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: 0;
}

.m-button.is-disabled,
.m-button.is-disabled:focus,
.m-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}

.m-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.m-button--primary:focus,
.m-button--primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}

.m-button--primary.is-disabled,
.m-button--primary.is-disabled:active,
.m-button--primary.is-disabled:focus,
.m-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}

.m-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.m-button--success:focus,
.m-button--success:hover {
  background: #85ce61;
  border-color: #85ce61;
  color: #fff;
}

.m-button--success.is-active,
.m-button--success:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
}

.m-button--success:active {
  outline: 0;
}

.m-button--success.is-disabled,
.m-button--success.is-disabled:active,
.m-button--success.is-disabled:focus,
.m-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}

.m-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.m-button--warning:focus,
.m-button--warning:hover {
  background: #ebb563;
  border-color: #ebb563;
  color: #fff;
}

.m-button--warning.is-active,
.m-button--warning:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #fff;
}

.m-button--warning:active {
  outline: 0;
}

.m-button--warning.is-disabled,
.m-button--warning.is-disabled:active,
.m-button--warning.is-disabled:focus,
.m-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}

.m-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.m-button--danger:focus,
.m-button--danger:hover {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
}

.m-button--danger.is-active,
.m-button--danger:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
}

.m-button--danger:active {
  outline: 0;
}

.m-button--danger.is-disabled,
.m-button--danger.is-disabled:active,
.m-button--danger.is-disabled:focus,
.m-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}

.m-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}

.m-button--info:focus,
.m-button--info:hover {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}

.m-button--info.is-active,
.m-button--info:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
}

.m-button--info:active {
  outline: 0;
}

.m-button--info.is-disabled,
.m-button--info.is-disabled:active,
.m-button--info.is-disabled:focus,
.m-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}

/**圆角**/
.m-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

/**size**/

.m-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.m-button--mini,
.m-button--small {
  font-size: 12px;
  border-radius: 3px;
}

.m-button--small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}

.m-button--mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}

.m-button::-moz-focus-inner {
  border: 0;
}
</style>
