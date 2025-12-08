import DefaultTheme from 'vitepress/theme'
import './styles.css'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  // Override the Layout with a wrapper component
  Layout: Layout,
}