import Block from '../../../core/Block';
import { dateFormatter } from '../../../utils/date-formater.ts';

import { TMessage } from '../../../pages/chat/chat.ts';

export class Message extends Block<TMessage | any> {
  constructor(props: TMessage) {
    super({
      ...props,
    });
  }

  protected render(): string {
    console.log(this.props);
    const { time } = this.props;
    return ` 
        <div>
          {{content}}
         ${dateFormatter(time)}
        </div>
        `;
  }
}
