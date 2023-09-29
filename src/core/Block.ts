import { EventBus } from './EventBus';
import { nanoid } from 'nanoid';
import Handlebars from 'handlebars';

class Block<Props extends Record<string, unknown>> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  public id: string = nanoid(6);
  protected props = {} as Props;
  protected refs: Record<string, Block<Props> | Block<Props>[]> = {};
  private eventBus: () => EventBus;
  private _element: HTMLElement | null = null;
  public children: Record<string, Block<Props> | Block<Props>[]> = {};

  constructor(propsWithChildren = {}) {
    const eventBus = new EventBus();
    const { props, children } = this._getChildrenAndProps(
      propsWithChildren as Props
    );
    this.props = this._makePropsProxy(props, this);
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
    this.children = children;
  }

  private _getChildrenAndProps(childrenAndProps: Props): {
    props: Props;
    children: Record<string, Block<Props> | Block<Props>[]>;
  } {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block<Props> | Block<Props>[]> = {};

    for (const [key, value] of Object.entries(childrenAndProps)) {
      if (
        (value instanceof Block || Array.isArray(value)) &&
        (value as []).every(
          (item: HTMLElement | HTMLInputElement) => item instanceof Block
        )
      ) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    }
    return { props: props as Props, children };
  }

  private _addEvents(): void {
    const { events = {} } = this.props as Props & {
      events: Record<string, () => void>;
    };

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  private _removeEvents() {
    const { events = {} } = this.props as Props & {
      events: Record<string, () => void>;
    };

    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _init(): void {
    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init(): void {}

  _componentDidMount(): void {
    this.componentDidMount();
  }

  componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: Props, newProps: Props): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(oldProps?: Props, newProps?: Props): boolean {
    if (oldProps && newProps) {
      return true;
    }
    return false;
  }

  public setProps = (nextProps: Props): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  public value() {
    return this._element && (<HTMLInputElement>this._element).value
      ? (<HTMLInputElement>this._element).value
      : '';
  }

  private _render(): void {
    const fragment = this.compile(this.render(), this.props);
    this._removeEvents();
    const newElement = fragment.firstElementChild as HTMLElement;

    if (newElement && this._element) {
      this._element.replaceWith(newElement);
    }

    this._element = newElement;

    this._addEvents();
  }

  private compile(template: string, context: object) {
    const contextAndStubs = {
      ...context,
      __refs: this.refs,
      __children: [] as Array<{
        component: unknown;
        embed(node: DocumentFragment): void;
      }>,
    };

    const html = Handlebars.compile(template)(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = html;

    contextAndStubs.__children?.forEach(({ embed }) => {
      embed(temp.content);
    });

    return temp.content;
  }

  protected render(): string {
    return '';
  }

  public getContent() {
    return this.element;
  }

  private _makePropsProxy(props: Props, self: Block<Props>) {
    // Ещё один способ передачи this, но он больше не применяется с приходом ES6+

    return new Proxy(props, {
      set(target, prop, value) {
        const oldTarget = { ...target };
        target[prop as keyof Props] = value;

        // Запускаем обновление компоненты
        // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },

      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },

      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }
}

export default Block;
