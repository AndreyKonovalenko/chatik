import Block from '../../core/Block';

type TErrorLine ={
  error: string | undefined;
}

export class ErrorLine extends Block<TErrorLine> {
  protected render(): string {
    return `
      <span class="error-text">{{error}}</span>
    `;
  }
}
