<!--
 * @Author: JohnYang
 * @Date: 2020-10-16 12:55:02
 * @LastEditors: JohnYang
 * @LastEditTime: 2020-10-21 16:11:04
-->
<template>
  <el-form size="small" label-width="90px">
    <el-divider>基本信息</el-divider>
    <el-form-item label="组件类型">
      <el-select
        v-model="activeData.tagIcon"
        placeholder="请选择组件类型"
        :style="{ width: '100%' }"
        @change="tagChange"
      >
        <el-option-group
          v-for="group in tagList"
          :key="group.label"
          :label="group.label"
        >
          <el-option
            v-for="item in group.options"
            :key="item.label"
            :label="item.label"
            :value="item.tagIcon"
          >
            <svg-icon class="node-icon" :icon-class="item.tagIcon" />
            <span> {{ item.label }}</span>
          </el-option>
        </el-option-group>
      </el-select>
    </el-form-item>
    <el-form-item label="字段名">
      <el-input
        v-model="activeData.prop"
        placeholder="请输入字段名（v-model）"
      />
    </el-form-item>
    <el-form-item label="标题">
      <el-input v-model="activeData.label" placeholder="请输入标题" />
    </el-form-item>
    <el-form-item label="占位提示">
      <el-input v-model="activeData.placeholder" placeholder="请输入占位提示" />
    </el-form-item>
    <el-form-item label="表单栅格">
      <el-slider
        v-model="activeData.span"
        :max="24"
        :min="1"
        :marks="{ 12: '' }"
        @change="spanChange"
      />
    </el-form-item>
    <el-form-item label="标签宽度">
      <el-input-number
        v-model.number="activeData.labelWidth"
        :min="0"
        label="请输入标签宽度"
      ></el-input-number>
    </el-form-item>
    <el-form-item v-if="activeData.style" label="组件宽度">
      <el-input
        v-model="activeData.style.width"
        placeholder="请输入组件宽度"
        clearable
      />
    </el-form-item>
    <el-form-item label="默认值">
      <el-input
        :value="setDefaultValue(activeData.defaultValue)"
        placeholder="请输入默认值"
        @input="onDefaultValueInput"
      />
    </el-form-item>
    <el-form-item label="最小值">
      <el-input-number v-model="activeData.min" placeholder="最小值" />
    </el-form-item>
    <el-form-item label="最大值">
      <el-input-number v-model="activeData.max" placeholder="最大值" />
    </el-form-item>
    <el-form-item label="步长">
      <el-input-number v-model="activeData.step" placeholder="步数" />
    </el-form-item>
    <el-form-item label="精度">
      <el-input-number
        v-model="activeData.precision"
        :min="0"
        placeholder="精度"
      />
    </el-form-item>
    <el-form-item label="显示标签">
      <el-switch v-model="activeData.showLabel" />
    </el-form-item>
    <el-form-item label="严格标签">
      <el-switch v-model="activeData.stepStrictly" />
    </el-form-item>
    <el-form-item label="是否禁用">
      <el-switch v-model="activeData.disabled" />
    </el-form-item>
    <rules-control
      v-if="Array.isArray(activeData.rules)"
      :active-data="activeData"
    />
    <events-control
      v-if="Array.isArray(activeData.events)"
      :active-data="activeData"
    />
  </el-form>
</template>

<script>
import Component from "vue-class-component";
import BaseControl from "./BaseControl.vue";
@Component({
  name: "CounterMeta"
})
export default class CounterControl extends BaseControl {}
</script>
