import {
  WaysToHelpUsCommonInfo,
  WaysToHelpUsContainer,
  WaysToHelpUsGridContainer,
  WaysToHelpUsHeading,
  WaysToHelpUsImage,
} from './styled.js';
import WaysToHelpUsItem from './WaysToHelpUsItem/WaysToHelpUsItem.jsx';
import { motion } from 'framer-motion'; // Import Framer Motion

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

  const itemVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <WaysToHelpUsContainer>
      <WaysToHelpUsHeading className="h2">Ways to help us</WaysToHelpUsHeading>
      <WaysToHelpUsGridContainer>
        <WaysToHelpUsImage src="images/help_page-removebg.png" />
        {waysToHelpUsItems.map((item) => (
          <motion.div
            key={item.heading}
            initial="initial"
            whileHover="hover"
            variants={itemVariants}
          >
            <WaysToHelpUsItem text={item.text} heading={item.heading} />
          </motion.div>
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
