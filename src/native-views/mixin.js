import { ViewBase, LayoutBase, TextBase, EditableTextBase, FormattedString } from '@nativescript/core'
import { isAndroid, isIOS } from '@nativescript/core/platform'
import { named, resolvePath } from '../utils.js'

/* eslint-disable spaced-comment */

const makeView = /*#__PURE__*/named(
	'View', 'ViewBase', ViewBase,
	_ => class SubView extends _ {
		/* eslint-disable class-methods-use-this, no-empty-function */
		constructor(...args) {
			super(...args)
			this.__dominative_isNative = true
			this.__dominative_role = 'View'
			Object.defineProperty(this, '__dominative_eventHandlers', {
				enumerable: false,
				value: {}
			})
		}

		__dominative_onInsertChild() {}
		__dominative_onRemoveChild() {}

		__dominative_onSetTextContent() {}
		__dominative_onGetTextContent() {}

		__dominative_onAddEventListener(...args) {
			return super.addEventListener(...args)
		}
		__dominative_onRemoveEventListener(...args) {
			return super.removeEventListener(...args)
		}

		__dominative_onAddedEventListener(...args) {
			return super.addEventListener(...args)
		}
		__dominative_onRemovedEventListener(...args) {
			return super.removeEventListener(...args)
		}

		__dominative_onSetAttributeNS(ns, name, value) {
			if (ns) return
			if (isAndroid && name.startsWith('ios.')) return
			if (isIOS && name.startsWith('android.')) return

			if (name === 'class') {
				super.className = value
				return
			}
			const [base, key] = resolvePath(name, this)
			base[key] = value
		}

		__dominative_onGetAttributeNS(ns, name, updateValue) {
			if (ns) return
			if (name === 'class') {
				updateValue(super.className)
				return
			}
			const [base, key] = resolvePath(name, this)
			updateValue(base[key])
		}

		__dominative_onRemoveAttributeNS(ns, name) {
			// eslint-disable-next-line no-void
			this.setAttributeNS(ns, name, void(0))
		}
	}
)

const makeLayout = /*#__PURE__*/named(
	'Layout', 'LayoutBase', LayoutBase,
	(_, options) => class SubLayout extends /*#__PURE__*/makeView(_, options) {
		constructor(...args) {
			super(...args)
			this.__dominative_role = 'Layout'
		}

		__dominative_onInsertChild(child, ref) {
			if (!child.__dominative_isNative || (ref && !ref.__dominative_isNative)) return

			if (ref) {
				const refIndex = this.getChildIndex(ref)
				super.insertChild(child, refIndex)
			} else {
				super.addChild(child)
			}

			super.__dominative_onInsertChild(child, ref)
		}

		__dominative_onRemoveChild(child) {
			if (child.nodeType === 3) return

			super.removeChild(child)

			if (child.__dominative_isNative) super.__dominative_onRemoveChild(child)
		}
	}
)

const makeText = /*#__PURE__*/named(
	'Text', 'TextBase', TextBase,
	(_, options) => class SubText extends /*#__PURE__*/makeView(_, options) {
		constructor(...args) {
			super(...args)
			this.__dominative_role = 'Text'
		}

		__dominative_updateText() {
			super.text = this.textContent
		}

		__dominative_onSetTextContent(val) {
			super.text = val
		}
		__dominative_onGetTextContent() {
			if (this.firstChild) return
			return super.text
		}

		__dominative_onInsertChild(child, ref) {
			super.__dominative_onInsertChild(child, ref)
			if (child instanceof FormattedString) this.formattedText = child
			if (child.nodeType === 3) this.__dominative_updateText()
		}
		__dominative_onRemoveChild(child) {
			super.__dominative_onRemoveChild(child)
			if (child instanceof FormattedString) this.formattedText = null
			if (child.nodeType === 3) this.__dominative_updateText()
		}
	}
)

const makeEditableText = /*#__PURE__*/named(
	'EditableText', 'EditableTextBase', EditableTextBase,
	(_, options) => class SubEditableText extends /*#__PURE__*/makeText(_, options) {
		constructor(...args) {
			super(...args)
			this.__dominative_role = 'EditableText'
		}
	}
)

export {
	named,
	makeView,
	makeLayout,
	makeText,
	makeEditableText
}
