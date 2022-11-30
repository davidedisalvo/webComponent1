import { defineCustomElement } from 'vue'
import First from './First.vue'

const modules = import.meta.globEager('./components/**/*.vue')
First.styles = Object.values(modules).reduce((arr, mod) => {
	return [...arr, ...(mod.default.styles || [])]
}, First.styles || [])

customElements.define('first-web-component', defineCustomElement(First))
