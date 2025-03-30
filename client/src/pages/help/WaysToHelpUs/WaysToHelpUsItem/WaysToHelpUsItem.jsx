import { Heading3, Heading4 } from './styled.js';

export default function WaysToHelpUsItem({ heading, text }) {
  return (
    <div>
      <Heading3 className="h3">{heading}</Heading3>
      <Heading4 className="h4">{text}</Heading4>
    </div>
  );
}
