import { useState, useEffect, useRef, useCallback } from 'react';
import {
  WaysToHelpUsCommonInfo,
  WaysToHelpUsContainer,
  WaysToHelpUsGridContainer,
  WaysToHelpUsHeading,
  WaysToHelpUsImage,
  SupportButton,
  ModalOverlay,
  ModalContent,
  CloseButton,
  DonationSection,
  DonationInput,
  GameSection,
  HappinessBar,
  HappinessFill,
  RewardSection,
  Pet,
  Button,
  RewardItem,
} from './styled.js';
import WaysToHelpUsItem from './WaysToHelpUsItem/WaysToHelpUsItem.jsx';
import MiniGame from './MiniGame.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51RNyRZFL41rQqpjaFBcnEtMMad8rjbADrlZZl4OBb9JMtKfhrZfIXhHbWd6PDv8MRCCGINlKfn98XWmY6GNVq1Fc00pr8pnAKn',
);

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

  const [donationAmount, setDonationAmount] = useState('');
  const [petHappiness, setPetHappiness] = useState(0);
  const [rewards, setRewards] = useState([]);
  const [donated, setDonated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMiniGameOpen, setIsMiniGameOpen] = useState(false);
  const [showFeedingAnimation, setShowFeedingAnimation] = useState(false);
  const modalRef = useRef(null);

  // Load rewards from local storage and check for successful payment
  useEffect(() => {
    try {
      const storedRewards = JSON.parse(localStorage.getItem('rewards') || '[]');
      setRewards(storedRewards);
      const totalDonated = storedRewards.reduce(
        (sum, reward) => sum + reward.amount,
        0,
      );
      setPetHappiness(Math.min(totalDonated / 5, 100));
      setDonated(storedRewards.length > 0);

      const urlParams = new URLSearchParams(window.location.search);
      const isSuccess = urlParams.get('success') === 'true';
      console.log(
        'Payment success:',
        isSuccess,
        'Total donated:',
        totalDonated,
      );

      // Only set donationAmount from totalDonated if not a success redirect
      if (!isSuccess) {
        setDonationAmount('');
      }

      if (isSuccess) {
        const pendingDonation =
          Number(localStorage.getItem('pendingDonation')) || 0;
        console.log('Pending donation amount:', pendingDonation);
        if (pendingDonation > 0) {
          handleDonationSuccess(pendingDonation);
          localStorage.removeItem('pendingDonation');
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname,
          );
          setIsModalOpen(true); // Reopen the modal
          setShowFeedingAnimation(true); // Trigger feeding animation
          setTimeout(() => setShowFeedingAnimation(false), 2000); // Animation lasts 2 seconds
        }
      }
    } catch (error) {
      console.error('Error in useEffect:', error);
    }
  }, []);

  // Handle Stripe payment
  const handleStripePayment = async () => {
    const amount = Number(donationAmount) || 0;
    console.log('Initiating Stripe payment with amount:', amount);
    if (amount > 0) {
      try {
        localStorage.setItem('pendingDonation', amount.toString()); // Store the donation amount
        setDonationAmount(''); // Clear the input immediately
        const stripe = await stripePromise;
        const response = await fetch(
          'http://localhost:3002/api/create-checkout-session',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: amount * 100 }),
          },
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const session = await response.json();
        console.log('Stripe session created:', session.id);
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
        if (result.error) {
          console.error('Stripe redirect error:', result.error.message);
          localStorage.removeItem('pendingDonation');
        }
      } catch (error) {
        console.error('Error initiating Stripe payment:', error);
        localStorage.removeItem('pendingDonation');
      }
    } else {
      alert('Please enter a valid donation amount.');
    }
  };

  // Handle successful donation
  const handleDonationSuccess = (amount) => {
    try {
      console.log('Handling successful donation:', amount);
      const newReward = {
        id: Date.now(),
        amount,
        gift: amount >= 10 ? 'Golden Bone 🦴' : 'Shiny Coin 💰',
      };
      const updatedRewards = [...rewards, newReward];
      setRewards(updatedRewards);
      localStorage.setItem('rewards', JSON.stringify(updatedRewards));
      setPetHappiness((prev) => Math.min(prev + amount / 5, 100));
      setDonated(true);
    } catch (error) {
      console.error('Error in handleDonationSuccess:', error);
    }
  };

  // Close modal with Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      setIsModalOpen(false);
      setIsMiniGameOpen(false);
      setShowFeedingAnimation(false);
    }
  }, []);

  // Focus management for accessibility
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.focus();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, handleKeyDown]);

  // Handle donation input change
  const handleDonationChange = (e) => {
    const value = e.target.value;
    console.log('Input value:', value);
    if (value === '' || (!isNaN(value) && Number(value) >= 0)) {
      setDonationAmount(value);
    }
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

      {/* Support Button to Open Modal */}
      <SupportButton onClick={() => setIsModalOpen(true)}>
        Support Us with a Donation
      </SupportButton>

      {/* Modal with Animation */}
      <AnimatePresence>
        {isModalOpen && (
          <ModalOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setIsModalOpen(false);
              setIsMiniGameOpen(false);
              setShowFeedingAnimation(false);
            }}
          >
            <ModalContent
              as={motion.div}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
              tabIndex={-1}
            >
              <CloseButton
                onClick={() => {
                  setIsModalOpen(false);
                  setIsMiniGameOpen(false);
                  setShowFeedingAnimation(false);
                }}
              >
                ×
              </CloseButton>

              {isMiniGameOpen ? (
                <MiniGame onClose={() => setIsMiniGameOpen(false)} />
              ) : (
                <>
                  {/* Donation Section */}
                  <DonationSection>
                    <h2 className="text-2xl mb-4 text-gray-800 dark:text-gray-200">
                      Support Us with a Donation
                    </h2>
                    <DonationInput
                      type="number"
                      value={donationAmount}
                      onChange={handleDonationChange}
                      placeholder="Enter donation amount ($)"
                    />
                    <Button onClick={handleStripePayment}>
                      Pay with Stripe
                    </Button>
                  </DonationSection>

                  {/* Virtual Pet Game with Feeding Animation */}
                  <GameSection>
                    <h2 className="text-2xl mb-4 text-gray-800 dark:text-gray-200">
                      Our Virtual Pet!
                    </h2>
                    <motion.div
                      animate={{
                        scale: showFeedingAnimation ? [1, 1.2, 1] : 1,
                        rotate: showFeedingAnimation ? [0, 10, -10, 0] : 0,
                      }}
                      transition={{
                        duration: 2,
                        times: [0, 0.2, 0.8, 1],
                        repeat: showFeedingAnimation ? 1 : 0,
                      }}
                    >
                      <Pet>{showFeedingAnimation ? '🐶🍖' : '🐶'}</Pet>
                    </motion.div>
                    <p className="my-2 text-gray-700 dark:text-gray-300">
                      Happiness: {petHappiness}%
                    </p>
                    <HappinessBar>
                      <HappinessFill happiness={petHappiness} />
                    </HappinessBar>
                    {donated && (
                      <Button
                        onClick={() => setIsMiniGameOpen(true)}
                        className="mt-4"
                      >
                        Play Animal Puzzle Game
                      </Button>
                    )}
                  </GameSection>

                  {/* Rewards Section */}
                  <RewardSection>
                    <h2 className="text-2xl mb-4 text-gray-800 dark:text-gray-200">
                      Your Rewards
                    </h2>
                    {rewards.length > 0 ? (
                      rewards.map((reward) => (
                        <RewardItem key={reward.id}>
                          Donated ${reward.amount} - Reward: {reward.gift}
                        </RewardItem>
                      ))
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">
                        No rewards yet. Donate to earn some!
                      </p>
                    )}
                  </RewardSection>
                </>
              )}
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </WaysToHelpUsContainer>
  );
}
