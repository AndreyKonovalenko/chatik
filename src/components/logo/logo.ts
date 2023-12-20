import Block from "../../core/Block";
export type TLogo = {
  onClick: () => void;
  events: object;
};

export class Logo extends Block<TLogo> {
  constructor(props: TLogo) {
    super(props);
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    return `
        <div class='logo-container' >
            <p page="login">C</p>
        </div>     
    `;
  }
}
