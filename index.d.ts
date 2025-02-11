import * as NS from "@nativescript/core";

declare module "dominative" {
	export interface NSCustomComponentsMap {}

	interface NSTypeofComponents {
		Frame: NS.Frame & typeof NS.Frame;
		Page: NS.Page & typeof NS.Page;
		AbsoluteLayout: NS.AbsoluteLayout & typeof NS.AbsoluteLayout;
		ActionBar: NS.ActionBar & typeof NS.ActionBar;
		ActionItem: NS.ActionItem & typeof NS.ActionItem;
		ActivityIndicator: NS.ActivityIndicator & typeof NS.ActivityIndicator;
		Button: NS.Button & typeof NS.Button;
		ContentView: NS.ContentView & typeof NS.ContentView;
		DatePicker: NS.DatePicker & typeof NS.DatePicker;
		DockLayout: NS.DockLayout & typeof NS.DockLayout;
		FlexboxLayout: NS.FlexboxLayout & typeof NS.FlexboxLayout;
		FormattedString: NS.FormattedString & typeof NS.FormattedString;
		GridLayout: NS.GridLayout & typeof NS.GridLayout;
		HtmlView: NS.HtmlView & typeof NS.HtmlView;
		Image: NS.Image & typeof NS.Image;
		Label: NS.Label & typeof NS.Label;
		ListPicker: NS.ListPicker & typeof NS.ListPicker;
		ListView: NS.ListView & typeof NS.ListView;
		NavigationButton: NS.NavigationButton & typeof NS.NavigationButton;
		Placeholder: NS.Placeholder & typeof NS.Placeholder;
		Progress: NS.Progress & typeof NS.Progress;
		ProxyViewContainer: NS.ProxyViewContainer & typeof NS.ProxyViewContainer;
		RootLayout: NS.RootLayout & typeof NS.RootLayout;
		ScrollView: NS.ScrollView & typeof NS.ScrollView;
		SearchBar: NS.SearchBar & typeof NS.SearchBar;
		SegmentedBar: NS.SegmentedBar & typeof NS.SegmentedBar;
		SegmentedBarItem: NS.SegmentedBarItem & typeof NS.SegmentedBarItem;
		Slider: NS.Slider & typeof NS.Slider;
		Span: NS.Span & typeof NS.Span;
		StackLayout: NS.StackLayout & typeof NS.StackLayout;
		Switch: NS.Switch & typeof NS.Switch;
		TabView: NS.TabView & typeof NS.TabView;
		TabViewItem: NS.TabViewItem & typeof NS.TabViewItem;
		TextField: NS.TextField & typeof NS.TextField;
		TextView: NS.TextView & typeof NS.TextView;
		TimePicker: NS.TimePicker & typeof NS.TimePicker;
		WebView: NS.WebView & typeof NS.WebView;
		WrapLayout: NS.WrapLayout & typeof NS.WrapLayout;
	}

	export const NSComponentsWithTypeOfMap: NSTypeofComponents;

	interface TypeofPseudoElements {
		Prop: Prop & typeof Prop;
		KeyProp: KeyProp & typeof KeyProp;
		ArrayProp: ArrayProp & typeof ArrayProp;
		ItemTemplate: ItemTemplate & typeof ItemTemplate;
	}

	export const PseudoElementsWithTypeofMap: TypeofPseudoElements;

	interface PseudoElementsMap {
		Prop: Prop;
		KeyProp: KeyProp;
		ArrayProp: ArrayProp;
		ItemTemplate: ItemTemplate;
	}

	interface NSComponentsMap {
		Frame: NS.Frame;
		Page: NS.Page;
		AbsoluteLayout: NS.AbsoluteLayout;
		ActionBar: NS.ActionBar;
		ActionItem: NS.ActionItem;
		ActivityIndicator: NS.ActivityIndicator;
		Button: NS.Button;
		ContentView: NS.ContentView;
		DatePicker: NS.DatePicker;
		DockLayout: NS.DockLayout;
		FlexboxLayout: NS.FlexboxLayout;
		FormattedString: NS.FormattedString;
		GridLayout: NS.GridLayout;
		HtmlView: NS.HtmlView;
		Image: NS.Image;
		Label: NS.Label;
		ListPicker: NS.ListPicker;
		ListView: NS.ListView;
		NavigationButton: NS.NavigationButton;
		Placeholder: NS.Placeholder;
		Progress: NS.Progress;
		ProxyViewContainer: NS.ProxyViewContainer;
		RootLayout: NS.RootLayout;
		ScrollView: NS.ScrollView;
		SearchBar: NS.SearchBar;
		SegmentedBar: NS.SegmentedBar;
		SegmentedBarItem: NS.SegmentedBarItem;
		Slider: NS.Slider;
		Span: NS.Span;
		StackLayout: NS.StackLayout;
		Switch: NS.Switch;
		TabView: NS.TabView;
		TabViewItem: NS.TabViewItem;
		TextField: NS.TextField;
		TextView: NS.TextView;
		TimePicker: NS.TimePicker;
		WebView: NS.WebView;
		WrapLayout: NS.WrapLayout;
	}

	export type ExtractEventNamesWithDefault<T> =
		| {
				[K in keyof T]: K extends `${infer Name}Event` ? Name : never;
		  }[keyof T]
		| ({} & string);

	export type ExtractEventNames<T> = {
		[K in keyof T]: K extends `${infer Name}Event` ? Name : never;
	}[keyof T];

	interface ElementCreationOptions {
		is?: string;
	}

	interface EventListener<T = HTMLViewBaseElement> {
		(event: Event<T>): void;
	}

	interface EventListenerObject<T = HTMLViewBaseElement> {
		handleEvent(event: Event<T>): void;
	}

	type EventListenerOrEventListenerObject<T = HTMLViewBaseElement> =
		| EventListener<T>
		| EventListenerObject<T>;

	interface AddEventListenerOptions extends EventListenerOptions {
		once?: boolean;
		passive?: boolean;
		//signal?: AbortSignal;
	}

	interface EventListenerOptions {
		capture?: boolean;
	}

	type DOMHighResTimeStamp = number;

	export interface EventOption {
		bubbles?: boolean;
		captures?: boolean;
		cancelable?: boolean;
	}

	export interface Event<T = HTMLViewBaseElement> {
		/** Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise. */
		readonly bubbles: boolean;
		/** Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method. */
		readonly cancelable: boolean;
		/** Returns the object who triggeres the event. */
		readonly target: (EventTarget<T> & T) | null;
		/** Returns the object whose event listener's callback is currently being invoked. */
		readonly currentTarget: (EventTarget<T> & T) | null;

		readonly object: (EventTarget<T> & T) | null;
		/** Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise. */
		readonly defaultPrevented: boolean;
		/** Returns the type of event, e.g. "click", "hashchange", or "submit". */
		readonly type: string;
		initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
		/** If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled. */
		preventDefault(): void;
		/** Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects. */
		stopImmediatePropagation(): void;
		/** When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object. */
		stopPropagation(): void;
	}

	export interface DOMEvent<T> extends Event<T> {}

	export type ExtendWithCustomEventHandlers<T, C> = {
		eventNames: ExtractEventNames<T>;
		on(
			eventNames: ExtractEventNames<T>,
			callback: (event: EventListenerOrEventListenerObject<C>) => void,
			thisArg?: any
		): void;
		off(
			event: ExtractEventNames<T>,
			callback: (event: EventListenerOrEventListenerObject<C>) => void,
			thisArg?: any
		): void;
		addEventListener(
			type: ExtractEventNames<T>,
			callback: EventListenerOrEventListenerObject<C>,
			options?: boolean | AddEventListenerOptions
		): void;
		removeEventListener(
			type: ExtractEventNames<T>,
			callback: EventListenerOrEventListenerObject<C>,
			options?: boolean | EventListenerOptions
		): void;
	} & C;

	type HTMLViewBaseElement = ExtendWithCustomEventHandlers<
		typeof NS.ViewBase,
		HTMLElement<NS.ViewBase>
	>;

	export class Node extends NS.ViewBase {
		constructor(nodeType: number, nodeName: string);
		readonly nodeType: number;
		readonly nodeName: string;
		readonly tagName: string;
		parentNode: ParentNode;
		get nextSibling(): Node;
		get previousSibling(): Node;

		get firstChild(): Node;
		get lastChild(): Node;

		hasChildNodes(): boolean;
		replaceWith(...nodes: Node[]): void;
		cloneNode(deep: boolean): Node;
		remove(): void;
	}

	export interface EventTarget<T = HTMLViewBaseElement> {
		/**
		 * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
		 *
		 * The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.
		 *
		 * When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
		 *
		 * When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.
		 *
		 * When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.
		 *
		 * If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.
		 *
		 * The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.
		 */
		addEventListener(
			type: string,
			callback: EventListenerOrEventListenerObject<T> | null,
			options?: AddEventListenerOptions | boolean
		): void;
		/** Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise. */
		dispatchEvent(event: Event): boolean;
		/** Removes the event listener in target's event listener list with the same type, callback, and options. */
		removeEventListener(
			type: string,
			callback: EventListenerOrEventListenerObject<T> | null,
			options?: EventListenerOptions | boolean
		): void;
	}

	export class Element extends ParentNode implements EventTarget {
		attributes: { namespace: string; name: string }[];
		style: NS.Style;
		localName: string;
		//@ts-ignore
		get className(): string;

		set className(val: string);

		get cssText(): string;
		set cssText(val: string);
		//@ts-ignore
		get children(): Element[];

		namespaceURI(): string;

		get innerHTML(): string;

		set innerHTML(value: string);

		get outerHTML(): string;

		set outerHTML(value: string);

		get textContent(): string;

		set textContent(value: string);

		insertBefore(child: Node, ref: Node): Node;

		setAttribute(qualifiedName: string, value: string): void;
		getAttribute(qualifiedName: string): string | null;

		removeAttribute(qualifiedName: string): void;
		/** Removes element's attribute whose namespace is namespace and local name is localName. */
		removeAttributeNS(namespace: string | null, localName: string): void;

		setAttributeNS(
			namespace: string | null,
			qualifiedName: string,
			value: string
		): void;
		/** Returns element's attribute whose namespace is namespace and local name is localName, and null if there is no such attribute otherwise. */
		getAttributeNS(namespace: string | null, localName: string): string | null;
		//@ts-ignore
		addEventListener(
			type: string,
			callback: EventListenerOrEventListenerObject,
			options?: boolean | AddEventListenerOptions
		): void;
		dispatchEvent(event: Event): boolean;
		removeEventListener(
			type: string,
			callback: EventListenerOrEventListenerObject,
			options?: boolean | EventListenerOptions
		): void;
	}

	export interface CharacterData extends Node {
		get data(): string;
		set data(data: string);

		get length(): number;

		get nodeValue(): string;
		set nodeValue(data: string);

		get textContent(): string;
		set textContent(value: string);

		appendData(data: string);
	}

	export interface Comment extends CharacterData {
		constructor(data: string): void;
	}

	//@ts-ignore
	export interface Text extends Node {
		constructor(text: string);
		set textContent(value: string);
		get textContent(): string;
	}

	export class ParentNode extends Node {
		childElementCount: number;
		get firstElementChild(): Node;
		get lastElementChild(): Node;
		get children(): Node[];
		get childNodes(): Node;
		append(...nodes: Node[]): void;
		insertBefore(child: Node, ref: Node): Node;
		replaceChild(child: Node, ref: Node): Node;
		appendChild(child: Node): Node;
		get textContent(): string;
		set textContent(value: string);
		removeChild(child: Node): Node;
	}

	export interface Scope {
		Event: Event;
		Node: Node;
		ParentNode: ParentNode;
		HTMLElement: HTMLElement;
		SVGElement: SVGElement;
		DocumentFragment: DocumentFragment;
		Comment: Comment;
		CharacterData: CharacterData;
		Text: Text;
		Element: Element;
		Document: Document;
	}

	export class DocumentFragment extends ParentNode {}

	export class SVGElement extends Element {}

	class HTMLElementBase extends Element {
		style: NS.Style;
	}

	export type HTMLElement<T = any> = Omit<HTMLElementBase & T, "on" | "off">;

	export type DominativeExtended<T = NS.ViewBase> = T & {};

	class TweakableBase {
		static getEventMap(fromEvent: string): string;
		static getEventOption(type: string): EventOption | void;
		static mapEvent(fromEvent: string, toEvent: string): void;
		static mapProp(fromProp: string, toProp: string): void;
		static defineEventOption(type: string, option: EventOption): void;
	}

	export type Tweakable<T> = TweakableBase & T;

	export class Prop extends HTMLElementBase {
		constructor(key: string, type: string);
		get key(): string;
		set key(key: string);
		get class(): string;
		set class(value: string);
		get type(): string;
		set type(type: string);
		get value(): any;
		set value(value: any);
		//@ts-ignore
		get parent(): ParentNode;
	}

	export class KeyProp extends Prop {
		constructor(key: string);
	}

	export class ArrayProp extends Prop {
		constructor(key: string);
	}

	export class ItemTemplate extends Prop {
		public static createViewEvent: string;
		public static itemLoadingEvent: string;
		get content(): any;
		set content(value: any);
		patch(data: {
			view: HTMLElement;
			index: number;
			item: any;
			data: any;
		}): HTMLElement;
		createView(): HTMLElement;
	}

	class DocumentBase extends ParentNode {
		createElement<K extends keyof HTMLElementTagNameMap | (string & {})>(
			tagName: K
		): //options?: ElementCreationOptions
		//@ts-ignore
		HTMLElementTagNameMap[K];
		createElementNS<K extends keyof HTMLElementTagNameMap | (string & {})>(
			namespace: string | null,
			qualifiedName: K
		): //options?: ElementCreationOptions
		Element;
		createTextNode(text: string): Text;
		createDocumentFragment(): DocumentFragment;
		createEvent(type: string): Event;
		createComment(data: string): Comment;
		get defaultView(): Scope;
	}

	type DominativeExtendedMap = {
		[K in keyof NSComponentsMap]: DominativeExtended<NSComponentsMap[K]>;
	} & {
		[K in keyof PseudoElementsMap]: DominativeExtended<PseudoElementsMap[K]>;
	};

	type TweakableMap = {
		[K in keyof NSComponentsMap]: Tweakable<DominativeExtendedMap[K]>;
	} & {
		[K in keyof PseudoElementsMap]: Tweakable<DominativeExtendedMap[K]>;
	};

	type HTMLElementTagNameMap = {
		[K in keyof NSComponentsMap]: ExtendWithCustomEventHandlers<
			typeof NSComponentsWithTypeOfMap[K],
			HTMLElement<TweakableMap[K]>
		>;
	} & {
		[K in keyof NSCustomComponentsMap]: HTMLElement<
			Tweakable<DominativeExtended<NSCustomComponentsMap[K]>>
		>;
	} & {
		[K in keyof PseudoElementsMap]: ExtendWithCustomEventHandlers<
			typeof PseudoElementsWithTypeofMap[K],
			HTMLElement<TweakableMap[K]>
		>;
	};

	export type Document = DocumentBase &
		Tweakable<DominativeExtended<NS.ContentView>> & {
			documentElement: HTMLElementTagNameMap["Frame"];
			body: HTMLElementTagNameMap["Page"];
		};

	export const document: Document;
	export const scope: Scope;
	/**
	 * Creates alias for tag names
	 * Useful when frameworks doesn't support case sensitive tag names
	 *
	 * @param      {string}  nameHandler  The name converter
	 */
	export function aliasTagName(nameHandler: (tag: string) => string): void;
	export const domImpl: {
		Node: Node;
		document: Document;
		isNode(node: any): boolean;
	};
	/**
	 * Creates a document
	 *
	 * @param      {Document}  initDocument  Method to initialize the document
	 */
	export function createDocument(
		initDocument?: (document: Document) => void
	): Document;
	/**
	 * Register a NativeScript view to be a DOM element
	 *
	 * @param      {string}  name     The name of the element
	 * @param      {T}       element  The view to be registered
	 */
	export function registerElement<T = NS.ViewBase>(
		name: string,
		element: T
	): HTMLElement<Tweakable<DominativeExtended<T>>>;
	/**
	 * Register anything as a DOM element
	 *
	 * @param      {string}   name     The name of the element
	 * @param      {T}        element  The element to be rsgistered
	 * @param      {boolean}  isSvg    Indicates if the element is svg
	 */
	export function registerDOMElement<T = any>(
		name: string,
		element?: T,
		isSvg?: boolean
	): HTMLElement<T>;
	/**
	 * Register all built-in elements automatically
	 * **Harmful to tree-shaking**
	 */
	export function registerAllElements(): void;
	/**
	 * Automatically register `document`, `window` and related variables globally
	 *
	 * @param      {any}  global  The global
	 */
	export function globalRegister(global: any): void;

	export function makeTweakable<T = Object>(obj: T, options: any): Tweakable<T>;
	export function makeView<T = NS.ViewBase>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeLayout<T = NS.LayoutBase>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeText<T = NS.TextBase>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeEditableText<T = NS.EditableTextBase>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeAbsoluteLayout<T = NS.AbsoluteLayout>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeActionBar<T = NS.ActionBar>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeActionItem<T = NS.ActionItem>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeActivityIndicator<T = NS.ActivityIndicator>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeButton<T = NS.Button>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeContentView<T = NS.ContentView>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeDatePicker<T = NS.DatePicker>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeDockLayout<T = NS.DockLayout>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeFlexboxLayout<T = NS.FlexboxLayout>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeFormattedString<T = NS.FormattedString>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeFrame<T = NS.Frame>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeGridLayout<T = NS.GridLayout>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeHtmlView<T = NS.HtmlView>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeImage<T = NS.Image>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeLabel<T = NS.Label>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeListPicker<T = NS.ListPicker>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeListView<T = NS.ListView>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeNavigationButton<T = NS.NavigationButton>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makePage<T = NS.Page>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makePlaceholder<T = NS.Placeholder>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeProgress<T = NS.Progress>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeProxyViewContainer<T = NS.ProxyViewContainer>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeRootLayout<T = NS.RootLayout>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeScrollView<T = NS.ScrollView>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeSearchBar<T = NS.SearchBar>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeSegmentedBar<T = NS.SegmentedBar>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeSegmentedBarItem<T = NS.SegmentedBarItem>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeSlider<T = NS.Slider>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeSpan<T = NS.Span>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeStackLayout<T = NS.StackLayout>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeSwitch<T = NS.Switch>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeTabView<T = NS.TabView>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeTemplateReceiver<T = NS.ViewBase>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeTextField<T = NS.TextField>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeTextView<T = NS.TextView>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeTimePicker<T = NS.TimePicker>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeWebView<T = NS.WebView>(
		view: T,
		options: any
	): DominativeExtended<T>;
	export function makeWrapLayout<T = NS.WrapLayout>(
		view: T,
		options: any
	): DominativeExtended<T>;

	export const AbsoluteLayout: DominativeExtendedMap["AbsoluteLayout"];
	export const ActionBar: DominativeExtendedMap["ActionBar"];
	export const ActionItem: DominativeExtendedMap["ActionItem"];
	export const ActivityIndicator: DominativeExtendedMap["ActivityIndicator"];
	export const Button: DominativeExtendedMap["Button"];
	export const ContentView: DominativeExtendedMap["ContentView"];
	export const DatePicker: DominativeExtendedMap["DatePicker"];
	export const DockLayout: DominativeExtendedMap["DockLayout"];
	export const FlexboxLayout: DominativeExtendedMap["FlexboxLayout"];
	export const FormattedString: DominativeExtendedMap["FormattedString"];
	export const Frame: DominativeExtendedMap["Frame"];
	export const GridLayout: DominativeExtendedMap["GridLayout"];
	export const HtmlView: DominativeExtendedMap["HtmlView"];
	export const Image: DominativeExtendedMap["Image"];
	export const Label: DominativeExtendedMap["Label"];
	export const ListPicker: DominativeExtendedMap["ListPicker"];
	export const ListView: DominativeExtendedMap["ListView"];
	export const NavigationButton: DominativeExtendedMap["NavigationButton"];
	export const Page: DominativeExtendedMap["Page"];
	export const Placeholder: DominativeExtendedMap["Placeholder"];
	export const Progress: DominativeExtendedMap["Progress"];
	export const ProxyViewContainer: DominativeExtendedMap["ProxyViewContainer"];
	export const RootLayout: DominativeExtendedMap["RootLayout"];
	export const ScrollView: DominativeExtendedMap["ScrollView"];
	export const SearchBar: DominativeExtendedMap["SearchBar"];
	export const SegmentedBar: DominativeExtendedMap["SegmentedBar"];
	export const SegmentedBarItem: DominativeExtendedMap["SegmentedBarItem"];
	export const Slider: DominativeExtendedMap["Slider"];
	export const Span: DominativeExtendedMap["Span"];
	export const StackLayout: DominativeExtendedMap["StackLayout"];
	export const Switch: DominativeExtendedMap["Switch"];
	export const TabView: DominativeExtendedMap["TabView"];
	export const TextField: DominativeExtendedMap["TextField"];
	export const TextView: DominativeExtendedMap["TextView"];
	export const TimePicker: DominativeExtendedMap["TimePicker"];
	export const WebView: DominativeExtendedMap["WebView"];
	export const WrapLayout: DominativeExtendedMap["WrapLayout"];
}
