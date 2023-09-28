import Block from '../../core/Block';

export type TInput = {
  className: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  ref: string;
  name: string;
  value: string;
  events?: object;
  onBlur?: () => void;
};

export class Input extends Block<TInput> {
  constructor(props: TInput) {
    super({
      ...props,
      events: {
        blur: props.onBlur,
      },
    });
  }

  protected render() {
    const { className, type, placeholder, ref, disabled, name, value } =
      this.props;
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
