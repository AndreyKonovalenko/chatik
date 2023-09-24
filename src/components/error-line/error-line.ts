import Block from '../../core/Block';

export class ErrorLine extends Block {
  protected render(): string {
    return `
      <span class="error-text">{{error}}</span>
    `;
  }
}
