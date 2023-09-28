import Block from '../../core/Block';

export class ErrorLine extends Block<any> {
  protected render(): string {
    return `
      <span class="error-text">{{error}}</span>
    `;
  }
}
