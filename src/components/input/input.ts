import Block from '../../core/Block';

export type TInput = {
  className: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  ref: string;
  name: string;
  value: string;
  onBlur: () => void;
};

export class Input extends Block {
  constructor(props: TInput) {
    super({
      ...props,
      events: {
        blur: props.onBlur,
      },
    });
  }

  protected render(): string {
    const { className, type, placeholder, ref, disabled, name, value } = this
      .props as TInput;
    return `
            <input
                class="${className}"
                type="${type}"
                placeholder="${placeholder}"
                ref="${ref}"
                ${disabled ? 'disabled' : ''}
                name="${name}"
                value="${value}"
            />
    `;
  }
}
