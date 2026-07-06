import DefaultTheme from 'vitepress/theme'
import QuadraticExplorer from '../components/QuadraticExplorer.vue'
import PythagoreanProof from '../components/PythagoreanProof.vue'
import CoinSimulator from '../components/CoinSimulator.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('QuadraticExplorer', QuadraticExplorer)
    app.component('PythagoreanProof', PythagoreanProof)
    app.component('CoinSimulator', CoinSimulator)
  }
}
