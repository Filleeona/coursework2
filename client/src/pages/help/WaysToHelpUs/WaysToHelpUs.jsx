import {
  WaysToHelpUsCommonInfo,
  WaysToHelpUsContainer,
  WaysToHelpUsGridContainer,
  WaysToHelpUsHeading,
  WaysToHelpUsImage,
} from './styled.js';
import WaysToHelpUsItem from './WaysToHelpUsItem/WaysToHelpUsItem.jsx';

export default function WaysToHelpUs() {
  const waysToHelpUsItems = [
    {
      heading: 'Donate Supplies',
      text: 'Shelters often need supplies like food, blankets, toys, and cleaning supplies.',
    },
    {
      heading: 'Volunteer Your Time',
      text: 'Offer to volunteer at the shelter. Tasks may include walking dogs, cleaning, socializing with animals, or helping with administrative work.',
    },
    {
      heading: 'Foster a Pet',
      text: 'Fostering a pet provides a temporary home for animals until they find their forever homes.',
    },
    {
      heading: 'Adopt a Pet',
      text: 'Consider adopting a pet from a shelter instead of buying one from a breeder or pet store.',
    },
    {
      heading: 'Spread Awareness',
      text: 'Share information about adoptable pets on social media, volunteer at adoption events, or organize fundraisers to raise awareness and support for the shelter.',
    },
    {
      heading: 'Monetary Donations',
      text: 'Make monetary donations to the shelter to help cover operating costs, medical expenses, and facility maintenance.',
    },
  ];

  return (
    <WaysToHelpUsContainer>
      <WaysToHelpUsHeading className="h2">Ways to help us</WaysToHelpUsHeading>
      <WaysToHelpUsGridContainer>
        <WaysToHelpUsImage src="https://img.freepik.com/premium-photo/cat-dog-sitting-together_191971-16716.jpg?w=2000" />
        {waysToHelpUsItems.map((item) => (
          <WaysToHelpUsItem
            text={item.text}
            heading={item.heading}
            key={item.heading}
          />
        ))}
      </WaysToHelpUsGridContainer>
      <WaysToHelpUsCommonInfo>
        <h4 className="h4">
          To adopt a pet from a shelter, you need to know the commitment
          involved in caring for a pet, including the time, effort, and
          resources required. You should have a suitable living environment that
          accommodates the needs of the pet, including space, safety, and any
          necessary amenities. Additionally, you should be ready for the
          responsibilities of pet ownership, such as regular feeding, grooming,
          exercise, and veterinary care.
        </h4>
      </WaysToHelpUsCommonInfo>
    </WaysToHelpUsContainer>
  );
}
