import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import QuadraticExplorer from '../components/QuadraticExplorer.vue'
import PythagoreanProof from '../components/PythagoreanProof.vue'
import CoinSimulator from '../components/CoinSimulator.vue'

import './custom.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('QuadraticExplorer', QuadraticExplorer)
    app.component('PythagoreanProof', PythagoreanProof)
    app.component('CoinSimulator', CoinSimulator)
  }
}