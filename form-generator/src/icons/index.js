/*
 * @Author: JohnYang
 * @Date: 2020-10-14 22:25:11
 * @LastEditors: JohnYang
 * @LastEditTime: 2020-10-21 16:58:35
 */
import Vue from 'vue'
import SvgIcon from '@/components/svg-icon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
