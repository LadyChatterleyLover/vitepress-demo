import theme from 'vitepress/theme'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'
import Button from '../../../src/components/Button.vue'
import '../../../src/styles/index.css'
import './styles/index.css'

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    app.component(Button.name, Button)
    registerComponents(app)
  }
}
