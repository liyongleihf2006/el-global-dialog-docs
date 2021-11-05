# 介绍

通过`this.$dialog`的形式使用`el-dialog`
### 安装
```
npm install --save el-global-dialog
```
### 使用方法
``` js {2}
// 引入
import 'el-global-dialog'
```
::: demo 
```html
<template>
  <div>
    当前页面作用域的数据
    <span>{{ formData.name }}</span>
    <el-button @click="openDialog">打开dialog</el-button>
  </div>
</template>

<script>
export default {
  name: 'dialog-Demo',
  data() {
    return {
      formData: {
        name: 'abc',
      },
    };
  },
  mounted() {},
  methods: {
    openDialog() {
      this.$dialog({
        data: this.formData,
        title: '标题',
        width: '30%',
        center: true,
        beforeClose(done) {
          this.$confirm('确认关闭？')
            .then(() => {
              done();
            })
            .catch(() => {});
        },
        open() {
          console.log('open');
        },
        opened() {
          console.log('opened');
        },
        close() {
          console.log('close');
        },
        closed() {
          console.log('closed');
        },
        message: (dialog) => {
          return (
            <el-form>
              <el-form-item label="当前页面的数据,所以改变的时候会跟页面上面的数据同步,关闭重新打开后,依然是改变后的数据">
                <el-input vModel={this.formData.name} />
              </el-form-item>
              <el-form-item label="dialog的数据,所以改变的时候不会同步到页面上,只会改变dialog中的该数据,关闭重新打开后,数据就初始化了">
                <el-input vModel={dialog.data.name} />
                {dialog.data.name}
              </el-form-item>
            </el-form>
          );
        },
        titleSlot(dialog) {
          return <div>title2333{dialog.title}</div>;
        },
        footerSlot(dialog) {
          return (
            <span class="dialog-footer">
              <el-button
                v-on:click={() => {
                  dialog.visible = false;
                }}
              >
                取 消
              </el-button>
              <el-button
                type="primary"
                v-on:click={() => {
                  dialog.visible = false;
                }}
              >
                确 定
              </el-button>
            </span>
          );
        },
      });
    },
  },
};
</script>
```
:::
### attributes
参数|说明|类型|可选值|默认值
--|--|--|--|--
data|传入到dlalog中的数据,可以在`message titleSlot footerSlot`回调函数中通过注入的参数获取到,如形参叫做`dialog`,那么可以通过`dialog.data`获取到|object|——|——
message|写入`dialog`内容的回调,可以注入`dialog`实例,返回要渲染的jsx|function|——|——
titleSlot|写入`dialog`title的回调,相当于`el-dialog`中的`slot="title"`,可以注入`dialog`实例,返回要渲染的jsx|function|——|——
footerSlot|写入`dialog`footer的回调,相当于`el-dialog`中的`slot="footer"`,可以注入`dialog`实例,返回要渲染的jsx|function|——|——
open|`el-dialog`中的`open`事件|function|——|——
opened|`el-dialog`中的`opened`事件|function|——|——
close|`el-dialog`中的`close`事件|function|——|——
closed|`el-dialog`中的`closed`事件|function|——|——
title|请参照elementui官方文档
width|请参照elementui官方文档
fullscreen|请参照elementui官方文档
top|请参照elementui官方文档
modal|请参照elementui官方文档
modal-append-to-body|请参照elementui官方文档
append-to-body|请参照elementui官方文档
lock-scroll|请参照elementui官方文档
custom-class|请参照elementui官方文档
close-on-click-modal|请参照elementui官方文档
close-on-press-escape|请参照elementui官方文档
show-close|请参照elementui官方文档
before-close|请参照elementui官方文档
center|请参照elementui官方文档

* `visible`属性不支持传入,因调用`$dialog`直接就展示弹窗
* `destroy-on-close`属性不支持传入,每次关闭弹窗,都会自动销毁实例
